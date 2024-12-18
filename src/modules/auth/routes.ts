import {NextFunction, Request, Response, Router} from "express"
import { RegisterController } from "./controller";

const routes = Router();

routes.post('/register', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await RegisterController(req)
        res.status(404).json(response)

        // ? esto sirve para
    } catch (error) {
        throw error
    }
})

export default routes;