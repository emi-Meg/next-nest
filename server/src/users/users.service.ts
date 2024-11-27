import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [];

    register(user: {username: string; password: string}) {
        this.users.push(user);
        return { message: 'User registered successfully!', user};
    }

    login(user: { username: string; password: string}){
        const found = this.users.find(
            (u) => u.username === user.username && u.password === user.password,
        );
        if (!found) {
            return { message: 'Invalid credentials!'};
        }
        return { message: 'Login successfully!', user: found };
    }
}
