export interface IUser {
    UserId:number;
    UserName: string;
    Password: string;
    Email: string;
    Role: number;
    ResetToken: string;
    LastLogin: string;
    History: string;
}

export class User implements IUser {
    UserId: number;
    UserName: string;
    Password: string;
    Email: string;
    Role: number;
    ResetToken: string;
    LastLogin: string;
    History: string;
}