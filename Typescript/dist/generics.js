"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userData = {
    name: "John Doe",
    age: 30,
    city: "New York"
};
const adminData = {
    firstName: "Admin",
    lastName: "001",
    age: 35,
    city: "Los Angeles",
    role: "admin"
};
function getDetails(details) {
    return details;
}
const user = getDetails(userData);
const admin = getDetails(adminData);
//# sourceMappingURL=generics.js.map