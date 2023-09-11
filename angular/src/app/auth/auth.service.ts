import { Injectable } from "@angular/core";
import { UseRequest } from "../shared/request/use-request";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private useRequest: UseRequest) {}

    signUp(email: string, password: string) {
        return this.useRequest.doRequest('POST', 'http://localhost:3000/api/users/signup', {email, password});
    }

}