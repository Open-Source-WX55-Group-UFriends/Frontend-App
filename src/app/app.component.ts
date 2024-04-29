import { Component, OnInit } from '@angular/core';
//ojo
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FarmLogicTech';
  options=[
    {
      path: '/subscriptions-card', title :'Subscriptions'
    },
    {
      path: 'subscription', title :'Subscription'
    }
  ]

}
