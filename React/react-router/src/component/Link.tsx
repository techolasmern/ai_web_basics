import { Link, type LinkProps } from "react-router";
import type { RouterMapType } from "../types/route";

type DynamicRoute = `/profile/${string}`;

type TLinkProps = Omit<LinkProps, "to"> & {
    to: RouterMapType | DynamicRoute;
}

export const TypedLink = (props: TLinkProps) => {
    return <Link {...props}/>
};