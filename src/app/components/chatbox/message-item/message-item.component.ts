import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-message-item',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.css'
})
export class MessageItemComponent {
  @Input({required:true}) message!: { text: string, sender: string };

  get isUserMessage() {
    return this.message.sender === 'user';
  }
}
