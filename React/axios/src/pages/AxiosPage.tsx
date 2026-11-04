import { useEffect, useState } from "react";
import { type Users } from "../types/users";
import { getUsers } from "../services/users";

let mounted = false;

export const AxiosPage = () => {

    const [users, setUsers] = useState<Users["users"]>([]);
    const [query, setQuery] = useState<string>("");

    // 200 => OK, 201 => Created, 404 => Not Found

    const fetchUsers = async () => {
        const res = await getUsers(query);
        if (res) {
            setUsers(res.users);
        }
    };

    useEffect(() => {
        let debouce: number;
        if (!mounted) {
            fetchUsers();
            mounted = true;
        } else {
            debouce = setTimeout(() => {
                fetchUsers();
            }, 2000);
        }
        return () => {
            clearTimeout(debouce);
        }
    }, [query]);

    return <div>
        <div className="pt-4 sticky top-0 z-1 bg-white shadow pb-2 flex justify-between px-5">
            <div>
                <h1 className="text-3xl font-bold text-center">Users List</h1>
            </div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="w-full max-w-100 p-2 shadow rounded outline-none" placeholder="Search Query..."/>
        </div>
        <div className="grid grid-cols-1 gap-3 p-3 w-full max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
            {
                users.map(user => {
                    return <div key={user.id} className="bg-white relative text-center shadow shadow-black/30 p-3 rounded-md cursor-pointer hover:scale-105 hover:shadow-2xl duration-500 transition-all">
                        <span className="absolute top-1 right-1 bg-red-600 text-white p-1 px-2 rounded">{user.bloodGroup}</span>
                        <span className="absolute top-1 left-1 bg-emerald-800 text-white p-1 px-2 text-sm rounded">{user.role}</span>
                        <div className="flex justify-center">
                            <img src={user.image} alt={user.firstName} className="w-20 h-20 rounded-full object-cover" />
                        </div>
                        <div className="mt-2">
                            <h1>{user.firstName} {user.lastName}</h1>
                            <p>{user.email}</p>
                            <p>Age: {user.age}</p>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
};