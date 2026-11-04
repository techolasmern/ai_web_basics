import { api } from "../lib/axios";
import type { Users } from "../types/users";

export const getUsers = async (query: string) => {
    try {
        const response = await api.get<Users>(`/users/search`, {
            params: { 
                q: query
             }
        });
        console.log(response);
        return response.data;
    } catch (err) {
        return null;
    }
}