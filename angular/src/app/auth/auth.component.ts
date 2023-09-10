import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor () {}

  onSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;

    console.log(email, password);
  }
}
