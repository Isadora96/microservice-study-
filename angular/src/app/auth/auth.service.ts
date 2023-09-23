import { Injectable } from "@angular/core";
import { UseRequest } from "../shared/request/use-request";

export interface AuthResponseData {
    id: string,
    email: string
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    url: string = 'http://localhost:3000/api/v1'

    constructor(private useRequest: UseRequest) {}

    signUp(email: string, password: string): Promise<AuthResponseData> {
        return this.useRequest.doRequest('POST', `${this.url}/users/signup`, {email, password});
    }

    signIn(email: string, password: string): Promise<AuthResponseData> {
        return this.useRequest.doRequest('POST', `${this.url}/users/signin`, {email, password});
    }

}