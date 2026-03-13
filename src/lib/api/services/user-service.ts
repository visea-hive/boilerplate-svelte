import { api } from '$lib/api/axios';

// 1. Defining Types (Best Practice for Multi-Module)
export interface User {
    id: number;
    name: string;
    email: string;
}

// 2. Resource/Module Module (e.g., Users)
export const userService = {
    getAll: () => api.get<User[]>('/users'),
    getById: (id: number) => api.get<User>(`/users/${id}`),
    create: (userData: Omit<User, 'id'>) => api.post<User>('/users', userData),
    update: (id: number, userData: Partial<User>) => api.put<User>(`/users/${id}`, userData),
    delete: (id: number) => api.delete<void>(`/users/${id}`)
};
