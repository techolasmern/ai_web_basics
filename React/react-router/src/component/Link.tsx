import { Link, type LinkProps } from "react-router";
import type { RouterMapType } from "../types/route";

type TLinkProps = Omit<LinkProps, "to"> & {
    to: RouterMapType | string;
}

export const TypedLink = (props: TLinkProps) => {
    return <Link {...props}/>
};