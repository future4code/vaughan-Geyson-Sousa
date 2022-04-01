export enum Type {
    ADMIN = "Admin",
    NORMAL = "Normal"
};

export type User = {
    id: number,
    name: string,
    email: string,
    type: Type,
    age: number
};

export const users: User[] = [
    {
        id: 1,
        name: "geyson",
        email: "g@email.com",
        type: Type.ADMIN,
        age: 20
    },
    {
        id: 2,
        name: "diego",
        email: "d@email.com",
        type: Type.NORMAL,
        age: 19
    },  
];