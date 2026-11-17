import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../lib/axios";
import { useNavigate } from "react-router";
import { useUsersQuery } from "../hooks/reactQuery";

export const HomePage = () => {

    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { data, isLoading, isError } = useUsersQuery();

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
            return queryClient.invalidateQueries({
                queryKey: ["users"]
            })
        }
    });

    if(isLoading){
        return <div>Loading...</div>
    }
    
    if (isError) {
        return <div>Error</div>
    }

    return <div className="p-3">
        <div className="text-center my-5">
            <h1 className="text-4xl font-bold underline">Tanstack React Query</h1>
        </div>
        <div className="text-end">
            <button className="p-2 px-4 bg-indigo-800 text-white rounded" onClick={() => mutate()}>Add User</button>
        </div>
        <div className="grid gap-3 grid-cols-3 my-3">
            {data?.users.map(user => {
                return <div onClick={() => navigate(`/products/${user.id}`)} className="border p-3 cursor-pointer" key={user.id}>{user.firstName} {user.lastName} {user.age}</div>
            })}
       </div>
        <br /><br />
       
    </div>
};