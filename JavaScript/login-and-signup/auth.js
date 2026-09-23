const getData = () => {
    const data = localStorage.getItem("users");
    const users = data ? JSON.parse(data) : [];
    return users;
}

const setData = (users) => {
    if (typeof users !== "object") return;
    return localStorage.setItem("users", JSON.stringify(users));
}

const updateUsersArray = (user) => {
    const users = getData();
    const uIndex = users.findIndex(user => user.email === user.email);
    if(uIndex !== -1) return;
    users.push(user);
    return setData(users);
}