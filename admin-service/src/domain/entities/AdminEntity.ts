import { ObjectId } from "mongoose";

enum Role {
    user = 'user',
    admin = 'admin'
}

export interface AdminEntity {
    _id?: ObjectId | string;
    username: string;
    email: string;
    password: string;
    role: Role;
    isAdmin: boolean,
    isBlocked: boolean;
}