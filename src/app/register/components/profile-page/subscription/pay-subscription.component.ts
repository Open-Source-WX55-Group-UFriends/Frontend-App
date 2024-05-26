import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './pay-subscription.component.html',
  styleUrl: './pay-subscription.component.css'
})
export class PaySubscriptionComponent {
  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
