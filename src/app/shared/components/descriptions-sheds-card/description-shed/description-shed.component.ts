import { Component } from '@angular/core';

@Component({
  selector: 'app-description-shed',
  templateUrl: './description-shed.component.html',
  styleUrl: './description-shed.component.css'
})
export class DescriptionShedComponent {
  Handle(event:number)
  {
    alert(`You rate ${event}`);
  }
}
