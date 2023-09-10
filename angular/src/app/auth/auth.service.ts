import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor() {}

    signUp(email: string, password: string) {
        return axios.post('http://localhost:3000/api/users/signup', {email, password});
    }

}