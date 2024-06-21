import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AppModule} from "../../../../app.module";
import {MatCard} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-payment',
  templateUrl: './payment-subscription.component.html',
  styleUrl: './payment-subscription.component.css'
})
export class PaymentSubscriptionComponent implements OnInit {
  cardToShow: string | undefined;

  constructor(private route: ActivatedRoute,private _snackBar: MatSnackBar,private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cardToShow = params['card'];
    });
  }

  openSnackBar() {
    let snackBarRef = this._snackBar.open('Successful payment', 'Close', {
      duration: 2000,
      panelClass: ['custom-snackbar'],
      verticalPosition: 'top',


    });

    snackBarRef.afterDismissed().subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

}
