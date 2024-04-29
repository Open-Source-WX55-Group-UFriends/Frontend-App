import { Component } from '@angular/core';

@Component({
  selector: 'app-subscriptions-card',
  templateUrl: './subscriptions-card.component.html',
  styleUrl: './subscriptions-card.component.css'
})
export class SubscriptionsCardComponent {
  scrollToTop() {
    window.scrollTo(0, 0);
  }

}

