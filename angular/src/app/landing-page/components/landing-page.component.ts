import { Component, Inject, Optional } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  currentUser: string = this.data;

  constructor( @Optional() @Inject('data') private data: any) {
    console.log(data)
  }
  

}
