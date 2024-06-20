
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {ProfileService} from "../../model/profile.service";
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {SignInRequest} from "../../model/sign-in.request";

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

  constructor(private builder: FormBuilder, private authenticationService: AuthenticationService) {
    super();
  }

  //constructor(private router: Router, private profileService: ProfileService) {
    //super();}

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

  register={
    email:'',
    password:''
  };

  //save() {

  //this.profileService.addRegister(this.register);
  //this.router.navigate(['/create-profile']);
  //this.register = {
  //email: '',
  //password: ''
  //};

  //}

  ngOnInit(): void {
    this.form = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    let username = this.form.value.username;
    let password = this.form.value.password;
    const signInRequest = new SignInRequest(username, password);
    this.authenticationService.signIn(signInRequest);
    this.submitted = true;
  }

  save() {
    // Aquí va la lógica de la función save
    console.log('La función save ha sido llamada');
  }
}
