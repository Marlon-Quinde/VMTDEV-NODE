import { UserI } from "../../interfaces/Auth.Interface";
import fs from 'fs/promises';
import path from 'path';


// Ruta del archivo JSON
const dataFilePath = path.join('src','data','users.json');
export default class AuthRepository {

    async readUsers(): Promise<UserI[]> {
        try {
            const data = await fs.readFile(dataFilePath, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            // Si no existe el archivo o hay un error, devolvemos una lista vacía
            return [];
        }
    }

    async writeUsers(users: UserI[]): Promise<void> {
        await fs.writeFile(dataFilePath, JSON.stringify(users, null, 2), 'utf-8');
    }

    async findByUsername(username: string): Promise<UserI | undefined> {
        const users = await this.readUsers();
        return users.find(user => user.username === username);
    }

    async createUser(user: UserI): Promise<UserI> {
        const users = await this.readUsers();
        users.push(user);
        await this.writeUsers(users);
        return user;
    }

    
};
