import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

import { AuthResponseData, AuthService } from "../auth.service";
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  emailErrorMsg: string = '';
  passwordErrorMsg: string = '';
  genericMessage: string = '';
  isSignup: boolean = false;

  constructor (private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if(this.router.url.includes('signup')) {
      this.isSignup = true;
    }
  }

  async onSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;

    let authObs: Promise<AuthResponseData>;

    if(this.router.url.includes('signup')) {
      authObs = this.authService.signUp(email, password);
    } else {
      authObs = this.authService.signIn(email, password);
    }
    const res = (await authObs);

    if(res instanceof Array) {
        this.emailErrorMsg, this.passwordErrorMsg = '', this.genericMessage = '';
        this.showErrorMessage(res)
        return
    }

    form.reset();
    this.router.navigate(['/']);
  }

  private showErrorMessage(message: Array<{message: string, field: string}>) {
      message.forEach(value => {
        if(value.message && !value.field) {
          this.genericMessage = value.message
        } else if (value.field == 'email' || value.message.toLocaleLowerCase().includes('email')) {
          this.emailErrorMsg = value.message
        } else if (value.field == 'password' || value.message.toLocaleLowerCase().includes('password')) {
          this.passwordErrorMsg = value.message
        }
      });
  }
}
