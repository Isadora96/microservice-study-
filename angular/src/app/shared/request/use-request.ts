import axios from "axios";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UseRequest {

    async doRequest(method: string, url: string, data: any) {
        try {
            const response = await axios.request({method, url, data});
            return response.data
        } catch (err: any) {
            return err.response.data.errors
        }
    }
};