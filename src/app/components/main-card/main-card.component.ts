import { Component } from '@angular/core';
import { ChatboxComponent } from "../chatbox/chatbox.component";
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [ChatboxComponent,MatCardModule],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.css'
})
export class MainCardComponent {

}
