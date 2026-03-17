import { useState, useEffect, useCallback, useMemo } from 'react';

/**
 * Hook to get the currently active WhatsApp number based on the schedule.
 * Defaults to a specified fallback if no config is found.
 */
export const useWhatsAppRouting = () => {
    const defaultRouting = useMemo(() => ({
        number: "971525966056", // Default fallback
        message: "Hello The VAT Consultant, I am seeking for TAX Services."
    }), []);

    const [routing, setRouting] = useState(defaultRouting);
    const [isLoading, setIsLoading] = useState(true);

    const refreshRouting = useCallback(() => {
        // We check all known possible keys to be extremely robust
        const keys = ['whatsapp_routing_config', 'whatsapp_routing_raw_data'];
        let rawContent = null;

        for (const key of keys) {
            rawContent = localStorage.getItem(key);
            if (rawContent) {
                break;
            }
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
                // Handle Array format (from Whatsappdash or NewWhatsAppDashboard raw)
                match = data.find(r => r.day.toLowerCase() === currentDay && r.status === 'active');
            } else if (typeof data === 'object') {
                // Handle Object format (from NewWhatsAppDashboard config)
                // We need to look up keys case-insensitively
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
            console.error("Failed to parse WhatsApp routing config", e);
            setRouting(defaultRouting);
        }
        setIsLoading(false);
    }, [defaultRouting]);

    useEffect(() => {
        // Initial "fetch"
        const timer = setTimeout(() => {
            refreshRouting();
        }, 500); // Simulate network latency

        // Listen for storage changes if the dashboard is open in another tab
        const handleStorage = (e) => {
            const keys = ['whatsapp_routing_config', 'whatsapp_routing_raw_data'];
            if (keys.includes(e.key)) {
                refreshRouting();
            }
        };

        window.addEventListener('storage', handleStorage);
        return () => {
            window.removeEventListener('storage', handleStorage);
            clearTimeout(timer);
        };
    }, [refreshRouting]);

    const whatsappUrl = `https://wa.me/${routing.number}?text=${encodeURIComponent(routing.message)}`;

    return {
        ...routing,
        whatsappUrl,
        isLoading
    };
};
