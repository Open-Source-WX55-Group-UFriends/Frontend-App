
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {ProfileService} from "../../model/profile.service";
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {SignInRequest} from "../../model/sign-in.request";
import {SignUpRequest} from "../../model/sign-up.request";

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent extends BaseFormComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  isActive = false;
  isForgotPasswordActive = false;
  currentUsername: string = '';
  isSignedIn: boolean = false;
  register = {
    email: '',
    password: ''
  };

  constructor(private builder: FormBuilder, private router: Router, private authenticationService: AuthenticationService) {
    super();
    this.authenticationService.currentUsername.subscribe((username) => {
      this.currentUsername = username;
    });
    this.authenticationService.isSignedIn.subscribe((isSignedIn) => {
      this.isSignedIn = isSignedIn;
    });


  }










  ngOnInit(): void {

    this.authenticationService.isSignedIn.subscribe((isSignedIn) => {
      this.isSignedIn = true;
    });
    this.form = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })


  }


  toggleActive(): void {
    this.isActive = !this.isActive;
  }

  toggleForgotPassword(): void {
    this.isActive = false;
    this.isForgotPasswordActive = !this.isForgotPasswordActive;
  }

  backToSignIn(): void {
    this.isForgotPasswordActive = false;
    this.isActive = false;
  }

  onSubmit() {
    if (this.form.invalid) return;
    let username = this.form.value.username;
    let password = this.form.value.password;
    const signUpRequest = new SignUpRequest(username, password);
    this.authenticationService.signUp(signUpRequest).subscribe({
      next: () => {
        this.submitted = true;
        this.router.navigate(['/create-profile']);
      },
      error: (error) => {
        console.error(`Error while signing up: ${error}`);
        // Aún navega a /create-profile incluso si hay un error
        this.router.navigate(['/create-profile']);
      }
    });
  }
  onSignIn() {
    if (this.form.invalid) return;
    let username = this.form.value.username;
    let password = this.form.value.password;
    console.log(`Username: ${username}, Password: ${password}`);
    const signInRequest = new SignInRequest(username, password);
    this.authenticationService.signIn(signInRequest);
  }
  onSignUp() {
    this.router.navigate(['/sign-up']).then();
  }
  onSignOut() {
    this.authenticationService.signOut();
  }

  save() {
    // Aquí va la lógica de la función save
    console.log('La función save ha sido llamada');
  }

  protected readonly SignInRequest = SignInRequest;
}
