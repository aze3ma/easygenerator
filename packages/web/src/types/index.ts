export interface RegisterFormType {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface LoginFormType {
    email: string;
    password: string;
}

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    token: string;
}

