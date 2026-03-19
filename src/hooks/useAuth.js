import { useState, useEffect, useCallback } from 'react';
import { authAPI } from '../services/api';

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

    const login = useCallback(async (username, password) => {
        try {
            const result = await authAPI.login(username, password);
            if (result.success) {
                const userData = { ...result.user, loginAt: new Date().toISOString() };
                localStorage.setItem('vat_masters_auth_user', JSON.stringify(userData));
                setUser(userData);
                return { success: true };
            }
            return { success: false, message: result.message || "Invalid credentials" };
        } catch (err) {
            console.error("Login Error:", err);
            return { success: false, message: err.message || "Server connection failed" };
        }
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
