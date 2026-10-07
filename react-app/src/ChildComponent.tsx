interface Props{
    p1: string;
    p2: string;
    children: React.ReactNode;
    data: string;
}

export const ChildComponent = ({ p1, p2, children, data }: Props) => {

    return <div>
        Child Component - {p1}, {p2}
        <br />
        Rendered in child component - {children}
        <br />
        Data: {data}
    </div>
}