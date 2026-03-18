import { useState, useEffect, useCallback } from 'react';

/**
 * Hook to manage site-wide pricing dynamically.
 * Fetches data from localStorage and listens for updates.
 */
export const usePricing = () => {
    const [prices, setPrices] = useState(() => {
        const saved = localStorage.getItem('vat_masters_pricing_config');
        return saved ? JSON.parse(saved) : {};
    });

    const refreshPrices = useCallback(() => {
        const saved = localStorage.getItem('vat_masters_pricing_config');
        if (saved) {
            setPrices(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        // Initial sync to ensure we have the latest if storage changed during mount
        const timer = setTimeout(refreshPrices, 0);

        const handleStorage = (e) => {
            if (e.key === 'vat_masters_pricing_config') {
                refreshPrices();
            }
        };

        window.addEventListener('storage', handleStorage);
        return () => {
            window.removeEventListener('storage', handleStorage);
            clearTimeout(timer);
        };
    }, [refreshPrices]);

    /**
     * Get price for a specific service ID with a fallback.
     * @param {string} serviceId - Unique ID of the service (e.g., 'vat-registration-micro')
     * @param {string|number} defaultPrice - Fallback price if not found in storage
     * @returns {string} - The current price
     */
    const getPrice = (serviceId, defaultPrice) => {
        if (prices[serviceId] && prices[serviceId].status === 'active') {
            return prices[serviceId].price;
        }
        return defaultPrice.toString();
    };

    /**
     * Get the full service object (price, originalPrice, currency).
     */
    const getService = (serviceId, defaults = {}) => {
        if (prices[serviceId] && prices[serviceId].status === 'active') {
            return prices[serviceId];
        }
        return {
            price: defaults.price || "0",
            originalPrice: defaults.originalPrice || "0",
            currency: defaults.currency || "AED",
            name: defaults.name || serviceId
        };
    };

    return {
        prices,
        getPrice,
        getService,
        refreshPrices
    };
};
