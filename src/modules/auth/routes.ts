import { NextFunction, Request, Response, Router } from "express";
import { loginController, registerController } from "./controller";
import { HttpHelper } from "../../helpers/httpResponse";
import { CodigosHttpEnum } from "../../enums/codesHttpEnum";

const routes = Router();

routes.post(
  "/register",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await registerController(req);
      res.status(response.code).json(response)
    } catch (error) {
      HttpHelper.fail<string>(res, CodigosHttpEnum.internalServerError, (error as any).toString());
    }
  }
);
routes.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await loginController(req);
      res.status(200).json(response);
    } catch (error) {
      throw error;
    }
  }
);

export default routes;
