import { useState, useEffect, useCallback } from 'react';

/**
 * Hook to manage Dashboard Authentication.
 * Uses localStorage for session persistence (Mocked).
 */
export const useAuth = () => {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('vat_masters_auth_user');
        return saved ? JSON.parse(saved) : null;
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate initial check
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const login = useCallback((username, password) => {
        // Mock credentials: admin / admin123
        if (username === 'admin' && password === 'admin123') {
            const userData = { username, role: 'admin', loginAt: new Date().toISOString() };
            localStorage.setItem('vat_masters_auth_user', JSON.stringify(userData));
            setUser(userData);
            return { success: true };
        }
        return { success: false, message: "Invalid credentials" };
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('vat_masters_auth_user');
        setUser(null);
    }, []);

    const isAuthenticated = !!user;

    return {
        user,
        isAuthenticated,
        isLoading,
        login,
        logout
    };
};
