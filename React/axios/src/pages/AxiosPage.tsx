import { useEffect, useState } from "react";
import { type Users } from "../types/users";
import { getUsers } from "../services/users";

let mounted = false;

export const AxiosPage = () => {

    const [users, setUsers] = useState<Users["users"]>([]);
    const [query, setQuery] = useState<string>("");
    const [isFetching, setIsFetching] = useState<boolean>(false);

    // 200 => OK, 201 => Created, 404 => Not Found

    const fetchUsers = async () => {
        setIsFetching(true);
        const res = await getUsers(query);
        if (res) {
            setUsers(res.users);
        }
        setIsFetching(false);
    };

    useEffect(() => {
        let debouce: number;
        if (!mounted) {
            fetchUsers();
            mounted = true;
        } else {
            debouce = setTimeout(() => {
                fetchUsers();
            }, 1300);
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
                !isFetching && users.length === 0 && <div className="col-span-12 flex flex-col items-center mt-10 text-center">
                    <img src="./image.png" alt="not found" className="w-50" />
                    <div className="w-full max-w-100">
                        <h1 className="text-2xl my-4">No results found</h1>
                        <p>No results found for this query. Try to search something else.</p>
                    </div>
                </div>
            }
            {
                isFetching && new Array(30).fill(0).map((_, index) => {
                    return <div key={index} className="bg-white relative text-center shadow shadow-black/30 p-3 rounded-md cursor-pointer hover:scale-105 hover:shadow-2xl duration-500 transition-all">
                        <span className="absolute top-1 right-1 bg-gray-300 text-white p-1 px-2 rounded inline-block h-8 w-9"></span>
                        <span className="absolute top-1 left-1 bg-gray-300 text-white p-1 px-2 text-sm rounded inline-block h-8 w-20"></span>
                        <div className="flex justify-center">
                            <div className="w-20 h-20 rounded-full bg-gray-300"/>
                        </div>
                        <div className="mt-2">
                            <div className="h-4 bg-gray-300 rounded mb-2"/>
                            <div className="h-4 bg-gray-300 rounded mb-2"/>
                            <div className="h-4 bg-gray-300 rounded mb-2"/>
                        </div>
                    </div>
                })
            }
            {
                !isFetching && users.map(user => {
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