import AuthRepository from "./repository";
import { UserI } from "../../interfaces/Auth.Interface";
import { CodigosHttpEnum } from "../../enums/codesHttpEnum";
import { HttpHelper } from "../../helpers/httpResponse";

export class AuthService {
  private readonly _authRepository: AuthRepository;
  constructor() {
    this._authRepository = new AuthRepository();
  }

  async registerService(username: string, password: string) {
    const existingUser = await this._authRepository.findByUsername(username);
    if (existingUser) {
      throw new Error("Username already exists");
    }

    const newUser = await this._authRepository.createUser({
      username,
      password,
    });

    if (!newUser) {
      return HttpHelper.response(CodigosHttpEnum.internalServerError, null);
    }

    return HttpHelper.response<null>(CodigosHttpEnum.ok, null)
  }

  async loginService(username: string, password: string) {
    const user = await this._authRepository.findByUsername(username);
    if (!user || user.password !== password) {
      throw new Error("Invalid username or password");
    }

    // Simulate a simple token generation
    const token = Buffer.from(`${username}:${password}`).toString("base64");
    return token;
  }
}
