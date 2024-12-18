import { Request } from "express";
import { AuthService } from "./services";



export const registerController = async (req: Request) => {
  try {
    const { username, password } = req.body;
    const response = await new AuthService().registerService(username, password);
    return response
  } catch (error) {
    throw error
  }
};

export const loginController = async (req: Request) => {
   try {
    const { username, password } = req.body;
    console.log(req.body)
    const token = await new AuthService().loginService(username, password);
    return { message: 'Login successful', token };
   } catch (error) {
     throw error
   }
}
