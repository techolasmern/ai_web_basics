import { useParams, useSearchParams } from "react-router";

export const ProfilePage = () => {

    const { id } = useParams<{ id: string }>();
    const [query] = useSearchParams();

    console.log(query.get("time"));

    return <div>ProfilePage - {id}</div>
};