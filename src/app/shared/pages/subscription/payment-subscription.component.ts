import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-subscription',
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
    let snackBarRef = this._snackBar.open('Pago exitoso', 'Cerrar', {
      duration: 5000,
      panelClass: ['custom-snackbar'],
      verticalPosition: 'top',


    });

    snackBarRef.afterDismissed().subscribe(() => {
      this.router.navigate(['/subscriptions-card']);
    });
  }

}
