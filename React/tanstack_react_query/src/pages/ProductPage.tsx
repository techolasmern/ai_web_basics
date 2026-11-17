import { useParams } from "react-router";
import { useUserQuery } from "../hooks/reactQuery";

export const ProductPage = () => {

    const { id } = useParams<{ id: string; }>();
    const { data, isLoading, isError } = useUserQuery(Number(id) || 0);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <div>Error</div>
    }

    return <div>{ data?.firstName }</div>
};