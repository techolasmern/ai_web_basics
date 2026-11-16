import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../lib/axios";
import type { Users } from "../types/users";

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

    const { mutate } = useMutation({
        mutationFn: async () => {
            const response = await api.post("/users/add", {
                firstName: 'Muhammad',
                lastName: 'Ovi',
                age: 250
            });
            return response.data;
        },
        onSuccess: () => {
            const queryClient = useQueryClient();
            queryClient.invalidateQueries({
                queryKey: ["users"]
            })
        }
    });

    
    return <div>
        <div className="text-center my-5">
            <h1 className="text-4xl font-bold underline">Tanstack React Query</h1>
        </div>
        <button onClick={() => mutate()}>Add User</button>
        {data?.users.map(user => {
            return <div key={user.id}>{user.firstName} {user.lastName} {user.age}</div>
        })}
        <br /><br />
       
    </div>
};