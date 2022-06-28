import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  @ViewChild('signUpForm', { static: false }) signUpForm!: NgForm;
  submitted: boolean;
  constructor() {
    this.submitted = false;
  }
  onSubmit(signupForm: NgForm) {
    this.submitted = true;
    console.log(signupForm.valid, signupForm);
  }
}
