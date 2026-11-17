import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axios";
import type { User, Users } from "../types/users";

export const useUsersQuery = () => useQuery({
    queryKey: ["users"],
    queryFn: async () => {
        const res = await api.get<Users>("/users");
        return res.data;
    },
    refetchOnWindowFocus: false,
    enabled: true,
    staleTime: 1000 * 60
});

export const useUserQuery = (id: number) => useQuery({
    queryKey: ["users", id],
    queryFn: async () => {
        const res = await api.get <User>(`/users/${id}`);
        return res.data;
    },
    refetchOnWindowFocus: false,
    enabled: Boolean(id),
    staleTime: 1000 * 60
})