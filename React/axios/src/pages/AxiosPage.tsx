import { useEffect, useState } from "react";
import { type User } from "../types/users";
import { api } from "../lib/axios";

export const AxiosPage = () => {

    const [users, setUsers] = useState <User[]>([]);

    const getUsers = async () => {
        try {
            // const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
            const response = await api.get<User[]>("/users");
            setUsers(response.data);
        } catch (err) {
            
        }
    }

    // 200 => OK, 201 => Created, 404 => Not Found
    useEffect(() => {
        getUsers();
    }, []);

    return <div>
        {
            users.map(user => {
                return <div key={user.id}>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </div>
            })
        }
    </div>
};