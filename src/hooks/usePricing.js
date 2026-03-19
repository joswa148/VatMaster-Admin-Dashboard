import { useState, useEffect, useCallback } from 'react';
import { pricingAPI } from '../services/api';

export const usePricing = () => {
    const [prices, setPrices] = useState({});

    const refreshPrices = useCallback(() => {
        pricingAPI.getAll()
            .then(({ config }) => setPrices(config))
            .catch(e => console.error('Failed to load pricing', e));
    }, []);

    useEffect(() => {
        refreshPrices();
    }, [refreshPrices]);

    const getPrice = (serviceId, defaultPrice) => {
        if (prices[serviceId] && prices[serviceId].status === 'active') {
            return prices[serviceId].price;
        }
        return defaultPrice.toString();
    };

    const getService = (serviceId, defaults = {}) => {
        if (prices[serviceId] && prices[serviceId].status === 'active') {
            return prices[serviceId];
        }
        return {
            price:         defaults.price         || '0',
            originalPrice: defaults.originalPrice || '0',
            currency:      defaults.currency      || 'AED',
            name:          defaults.name          || serviceId
        };
    };

    return { prices, getPrice, getService, refreshPrices };
};
