import { useState, useEffect, useCallback, useMemo } from 'react';

/**
 * Hook to manage and fetch service pricing globally.
 * Allows updating prices from the dashboard and reflecting them on landing pages.
 */
export const usePricing = () => {
    const defaultPricing = useMemo(() => ({
        "corporate-tax": {
            id: "corporate-tax",
            name: "Corporate Tax Registration",
            price: "199",
            originalPrice: "499",
            currency: "AED",
            status: "active"
        },
        "vat-registration": {
            id: "vat-registration",
            name: "VAT Registration",
            price: "299",
            originalPrice: "599",
            currency: "AED",
            status: "active"
        }
    }), []);

    const [pricing, setPricing] = useState(defaultPricing);
    const [isLoading, setIsLoading] = useState(true);

    const refreshPricing = useCallback(() => {
        const saved = localStorage.getItem('vat_masters_pricing_config');
        if (saved) {
            try {
                setPricing(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse pricing config", e);
                setPricing(defaultPricing);
            }
        } else {
            setPricing(defaultPricing);
        }
        setIsLoading(false);
    }, [defaultPricing]);

    useEffect(() => {
        // Initial fetch simulation
        const timer = setTimeout(() => {
            refreshPricing();
        }, 600);

        const handleStorage = (e) => {
            if (e.key === 'vat_masters_pricing_config') {
                refreshPricing();
            }
        };

        window.addEventListener('storage', handleStorage);
        return () => {
            window.removeEventListener('storage', handleStorage);
            clearTimeout(timer);
        };
    }, [refreshPricing]);

    const getPrice = (id) => {
        return pricing[id] || defaultPricing[id] || { price: "0", originalPrice: "0", currency: "AED" };
    };

    return {
        pricing,
        getPrice,
        isLoading
    };
};
