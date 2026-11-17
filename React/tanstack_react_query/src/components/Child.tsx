import { useUsersQuery } from "../hooks/reactQuery";

export const Child = () => {

    const { data, isLoading, isError } = useUsersQuery();

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
    </div>
};