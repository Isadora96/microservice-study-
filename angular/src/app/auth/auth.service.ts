import { Injectable } from "@angular/core";
import { UseRequest } from "../shared/request/use-request";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    url: string = 'http://localhost:3000/api/v1'

    constructor(private useRequest: UseRequest) {}

    signUp(email: string, password: string) {
        return this.useRequest.doRequest('POST', `${this.url}/users/signin`, {email, password});
    }

}