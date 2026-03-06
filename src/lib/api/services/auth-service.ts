import Cookies from 'js-cookie';
import { api } from '../axios';
import type { AxiosResponse } from 'axios';
import { browser } from '$app/environment';

export interface User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
}

export const authService = {
    /**
     * Set Access Token into Cookies
     * Domain root path for 30 days
     */
    setToken: (token: string) => {
        if (browser) {
            Cookies.set('accessToken', token, {
                expires: 30,
                secure: import.meta.env.PROD,
                sameSite: 'strict',
                path: '/'
            });
        }
    },

    clearToken: () => {
        if (browser) {
            Cookies.remove('accessToken', { path: '/' });
        }
    },

    login: async (credentials: any) => {
        const res = await api.post<AxiosResponse<LoginResponse>>('/auth/login', {
            ...credentials,
            expiresInMins: 30
        });

        const data = res.data;

        // Note: For server-side actions, we handle the cookie set in the action itself
        // to avoid dependency on js-cookie and to work with SvelteKit's event.cookies.
        if (browser && data.accessToken) {
            authService.setToken(data.accessToken);
        }
        return data;
    },

    getUserProfile: async (token?: string) => {
        const config = token
            ? { headers: { Authorization: `Bearer ${token}` } }
            : {};

        const res = await api.get<AxiosResponse<User>>('/auth/me', config);
        return res.data;
    },

    logout: async () => {
        authService.clearToken();
    }
};
