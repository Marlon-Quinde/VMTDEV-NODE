import { Response } from "express";
import { CodigosHttpEnum } from "../enums/codesHttpEnum";

interface HttpResponseI<T> {
  message: string;
  data?: T;
  code: number;
}

export namespace HttpHelper {
  export const response = <T>(
    code: number,
    data?: T,
    message: string = "Transacción Exitosa"
  ): HttpResponseI<T> => {
    return {
      code,
      message,
      data,
    };
  };
  export const success = <T>(
    res: Response,
    code: number,
    data?: T,
    message: string = "Transacción Exitosa"
  ) => res.status(code).json({ code, data, message });
  export const fail = <T>(
    res: Response,
    code: number,
    message: string = "Ocurrio un error en el servidor",
    data?: T
  ) => res.status(code).json({ code, data, message });
}
// export namespace HttpHelper {
//   export const response = <T>(
//     res: Response,
//     code: number,
//     data?: T,
//     message: string = "Transacción Exitosa"
//   ): HttpResponseI<T> =>
//     res.status(code).send({
//       code,
//       data,
//       message,
//     }) as unknown as HttpResponseI<T>;
// }
