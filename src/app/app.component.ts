import { Component } from '@angular/core';
import {AuthenticationService} from "./register/services/authentication.service";
import {Translator} from "@angular/compiler-cli/linker/src/file_linker/translator";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dashboard Analytics';
  options = [
    { path: '/financial-stats', title: 'Financial Stats'},
  ];

  constructor(private authService: AuthenticationService,
               translate: TranslateService) {
    this.authService.loadSession();
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
