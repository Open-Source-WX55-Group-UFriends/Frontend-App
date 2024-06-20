import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, tap, throwError} from "rxjs";
import {Router} from "@angular/router";
import {SignInRequest} from "../model/sign-in.request";
import {SignInResponse} from "../model/sign-in.response";
import {SignUpRequest} from "../model/sign-up.request";
import {SignUpResponse} from "../model/sign-up.response";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  basePath: string = `${environment.serverBasePath}`;
  isProfileCreated: boolean = false;
  private varToken: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private idSignIn = new BehaviorSubject<string>('');

  setProfileCreated(value: boolean) {
    this.isProfileCreated = value;
  }
  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })};

  private signedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private signedInUserId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private signedInUsername: BehaviorSubject<string> = new BehaviorSubject<string>('');


  constructor(private router: Router, private http: HttpClient) { }

  get isSignedIn() {
    return this.signedIn.asObservable();
  }

  get currentUserId() {
    return this.signedInUserId.asObservable();
  }

  get currentUsername() {
    return this.signedInUsername.asObservable();
  }

  signUp(signUpRequest: SignUpRequest): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(`${this.basePath}/authentication/sign-up`, signUpRequest, this.httpOptions);
  }


  signIn(signInRequest: SignInRequest): Observable<SignInResponse> {
    console.log(signInRequest);
    return this.http.post<SignInResponse>(`${this.basePath}/authentication/sign-in`, signInRequest, this.httpOptions)
      .pipe(
        tap((response) => {
          this.signedIn.next(true);
          this.signedInUserId.next(response.id);
          this.setIdSignIn(response.id.toString());
          this.signedInUsername.next(response.username);
          localStorage.setItem('token', response.token);
          this.setToken(response.token);
          console.log(`Signed in as ${response.username} with token ${response.token}`);
        }),
        catchError((error) => {
          console.error(`Error while signing in: ${error}`);
          this.signedIn.next(false);
          this.signedInUserId.next(0);
          this.signedInUsername.next('');
          localStorage.removeItem('token');
          this.router.navigate(['/sign-in']).then();
          return throwError(error);
        })
      );
  }

  signOut() {
    this.signedIn.next(false);
    this.signedInUserId.next(0);
    this.signedInUsername.next('');
    localStorage.removeItem('token');
    this.router.navigate(['/sign-in']).then();
    this.setProfileCreated(false);
    this.setToken('');
    this.setIdSignIn('');

    }

  setToken(token: string) {
    this.varToken.next(token);
  }

  getIdSignIn() {
    return this.idSignIn.value; // Devuelve el valor del BehaviorSubject
  }

  // Método para establecer el ID del usuario autenticado
  setIdSignIn(id: string) {
    this.idSignIn.next(id);
  }

  getToken(): Observable<string> {
    return this.varToken.asObservable();
  }



}
