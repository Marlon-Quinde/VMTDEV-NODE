import express, { NextFunction, Request, Response } from "express";
import { PORT } from "./environments/env";

// ? Rutas del proyecto
import authRoutes from "./modules/auth/routes";

const app = express();

// ? Configuracion de JSON para del proyecto 
app.use(express.json());

const prefix: string = "/api";

// ? Deficion de rutas por modulos
app.use(`${prefix}/auth`, authRoutes)

const port: number = Number(PORT);
app.listen(port, () => {
    console.log('El servidor esta levantado en el puerto:', port);
});
