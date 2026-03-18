import { useState, useEffect, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to get the currently active WhatsApp number based on the schedule or path override.
 * Defaults to a specified fallback if no config is found.
 */
export const useWhatsAppRouting = () => {
    const location = useLocation();
    
    const defaultRouting = useMemo(() => ({
        number: "971525966056", // Default fallback
        message: "Hello The VAT Consultant, I am seeking for TAX Services."
    }), []);

    const [routing, setRouting] = useState(defaultRouting);
    const [isLoading, setIsLoading] = useState(true);

    const refreshRouting = useCallback(() => {
        const path = window.location.pathname;
        
        // 1. Check for Route Overrides first
        const overridesRaw = localStorage.getItem('whatsapp_routing_overrides');
        if (overridesRaw) {
            try {
                const overrides = JSON.parse(overridesRaw);
                // Find an active override that exactly matches current path
                const routeMatch = overrides.find(r => r.path === path && r.status === 'active');
                if (routeMatch) {
                    setRouting({
                        number: routeMatch.number.replace(/\D/g, ''),
                        message: routeMatch.message
                    });
                    setIsLoading(false);
                    return;
                }
            } catch (e) {
                console.error("Failed to parse WhatsApp overrides", e);
            }
        }

        // 2. Fallback to Day-based Global Config
        const keys = ['whatsapp_routing_config', 'whatsapp_routing_raw_data'];
        let rawContent = null;

        for (const key of keys) {
            rawContent = localStorage.getItem(key);
            if (rawContent) break;
        }
        
        if (!rawContent) {
            setRouting(defaultRouting);
            setIsLoading(false);
            return;
        }

        try {
            const data = JSON.parse(rawContent);
            const now = new Date();
            const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
            
            let match = null;

            if (Array.isArray(data)) {
                match = data.find(r => r.day.toLowerCase() === currentDay && r.status === 'active');
            } else if (typeof data === 'object') {
                const matchedKey = Object.keys(data).find(k => k.toLowerCase() === currentDay);
                if (matchedKey && data[matchedKey].status === 'active') {
                    match = data[matchedKey];
                }
            }
            
            if (match) {
                setRouting({
                    number: match.number.replace(/\D/g, ''),
                    message: match.message
                });
            } else {
                setRouting(defaultRouting);
            }
        } catch (e) {
            console.error("Failed to parse global WhatsApp config", e);
            setRouting(defaultRouting);
        }
        setIsLoading(false);
    }, [defaultRouting]);

    useEffect(() => {
        // Use a tiny delay to avoid "setState during render" warning
        const timer = setTimeout(refreshRouting, 0);

        const handleStorage = (e) => {
            const keys = ['whatsapp_routing_config', 'whatsapp_routing_raw_data', 'whatsapp_routing_overrides'];
            if (keys.includes(e.key)) {
                refreshRouting();
            }
        };

        window.addEventListener('storage', handleStorage);
        
        return () => {
            window.removeEventListener('storage', handleStorage);
            clearTimeout(timer);
        };
    }, [refreshRouting, location.pathname]); // Re-run on route change

    const whatsappUrl = `https://wa.me/${routing.number}?text=${encodeURIComponent(routing.message)}`;

    return {
        ...routing,
        whatsappUrl,
        isLoading
    };
};
