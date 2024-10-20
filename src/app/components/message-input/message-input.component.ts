import { Component, inject, Input } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MessageService } from '../../services/message.service';
import { ChatService } from '../../services/chat.service';
@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,FormsModule ,MatButtonModule,MatIconModule],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.css'
})
export class MessageInputComponent {
private messageService = inject(MessageService);
private chatService = inject(ChatService);
@Input() userMessage:string = '';

onUserSendMessage() {
  if (this.userMessage) {
    // 1. Add message to UI
    this.messageService.addMessage({ text: this.userMessage, sender: 'user' });
    console.log(this.userMessage)

    // 4. Clear input field
    this.userMessage = '';
  }
}
onUserClearChatBox():void{
  this.messageService.clearMessages()
}
}

