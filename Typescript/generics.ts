type UserType = {
    name: string;
    age: number;
    city: string;
}

type Role = "user" | "admin" | "superAdmin" | "guest";

type AdminType = {
    firstName: string;
    lastName: string;
    age: number;
    city: string;
    role: Role
}

const userData: UserType = {
    name: "John Doe",
    age: 30,
    city: "New York"
}

const adminData: AdminType = {
    firstName: "Admin",
    lastName: "001",
    age: 35,
    city: "Los Angeles",
    role: "admin"
}

function getDetails<T>(details: T): T {
    return details;
}

const user = getDetails(userData);
const admin = getDetails(adminData);