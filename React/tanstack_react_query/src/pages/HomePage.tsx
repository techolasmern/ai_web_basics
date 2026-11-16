import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axios";
import type { Users } from "../types/users";
import { Child } from "../components/Child";

export const HomePage = () => {

    const { data, isLoading, isError } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await api.get<Users>("/users");
            return res.data;
        },
        refetchOnWindowFocus: false,
        enabled: true,
        retry: 5,
        staleTime: 1000 * 60
    });

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error</div>
    }

    return <div>
        <div className="text-center my-5">
            <h1 className="text-4xl font-bold underline">Tanstack React Query</h1>
        </div>
        {data?.users[0].firstName}
        <br /><br />
        <Child />
    </div>
};