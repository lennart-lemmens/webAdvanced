"use strict";

const showUsers = document.getElementById("showUsers");

const users = [
    { id: 1, name: "Emma", role: "Admin", lastLogin: "2023-03-15" },
    { id: 2, name: "Thomas", role: "User", lastLogin: "2023-03-17" },
    { id: 3, name: "Sophie", role: "Editor", lastLogin: "2023-03-12" },
    { id: 4, name: "Lucas", role: "User", lastLogin: "2023-03-10" }
];

const showUsersInConsole = () => {
    console.table(users);
    
    console.group("Gebruikersrollen");
    for (let user of users) {
        if (user.role === "Admin") console.info(user.role);
        if (user.role === "User") console.warn(user.role);
        if (user.role === "Editor") console.error(user.role);
    }
    console.groupEnd()
}

showUsers.addEventListener("click", showUsersInConsole);