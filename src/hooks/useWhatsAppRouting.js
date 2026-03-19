import { useState, useEffect, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { whatsappAPI } from '../services/api';

export const useWhatsAppRouting = () => {
    const location = useLocation();

    const defaultRouting = useMemo(() => ({
        number: '971525966056',
        message: 'Hello, VAT Master, We are looking for VAT Services.'
    }), []);

    const [routing, setRouting] = useState(defaultRouting);
    const [isLoading, setIsLoading] = useState(true);

    const refreshRouting = useCallback(async () => {
        const path = window.location.pathname;
        try {
            const data = await whatsappAPI.getRouting(path);
            setRouting({ number: data.number, message: data.message });
        } catch {
            setRouting(defaultRouting);
        } finally {
            setIsLoading(false);
        }
    }, [defaultRouting]);

    useEffect(() => {
        refreshRouting();
    }, [refreshRouting, location.pathname]);

    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
    const encodedMsg = encodeURIComponent(routing.message);
    const whatsappUrl = isMobile
        ? `https://wa.me/${routing.number}?text=${encodedMsg}`
        : `https://web.whatsapp.com/send?phone=${routing.number}&text=${encodedMsg}`;

    return { ...routing, whatsappUrl, isLoading };
};
