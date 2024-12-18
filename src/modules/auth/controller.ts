import { Request } from "express";
import { UserI } from "../../interfaces/Auth.interface";
import { AuthServices } from "./services";

export const RegisterController = async (req: Request) => {
    try {
        const {username, password} = req.body as UserI
        const user = await new AuthServices().registerService(username, password)
        return {'message': 'Usuario', 'usuario': user}
    } catch (error) {
        throw error
    }
}