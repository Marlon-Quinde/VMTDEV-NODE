import { UserI } from "../../interfaces/Auth.interface";

const users: UserI[] = [];

export default class AuthRepository {

    async createUser(user: UserI): Promise<UserI> {
        users.push(user);
        return user;
    }

    // ? Este codigo sirve para tal cosa cosa
    async findByUsername(username: string): Promise<UserI | undefined> {
        return users.find((user) => user.username === username);
    }

    // async findByUsernameDosPuntocero(username: string): Promise<UserI | undefined> {
    //     return users.find((user) => user.username === username);
    // }

    // ? ==     Comparación Debil   1 == '1' // VERDADERO
    // ? ===    Comparación Fuerte  1 === '1' // FALSO
}