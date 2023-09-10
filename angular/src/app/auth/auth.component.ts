import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

import { AuthService } from "./auth.service";
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor (private authService: AuthService) {}

  onSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;

    this.authService.signUp(email, password).then(response => {
      console.log(response.data)
    }).catch(err => {
      console.error(err);
    });

  }
}
