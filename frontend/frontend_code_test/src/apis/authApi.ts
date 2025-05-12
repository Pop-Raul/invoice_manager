import type { AuthDto } from "../models/AuthDto";
import type { Tokens } from "../models/Tokens";
import api from "./interceptor";


export const signIn = async (dto: AuthDto): Promise<Tokens> => {
    const response = await api.post<Tokens>('http://localhost:3000/auth/signin', dto, {
    headers: { 'Content-Type': 'application/json' },
    });

    return response.data;
};