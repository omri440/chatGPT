import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageItemComponent } from "./message-item/message-item.component";
import { MessageInputComponent } from "../message-input/message-input.component";
import {MatGridListModule} from '@angular/material/grid-list';
import { Observable } from 'rxjs';
import { MessageService } from '../../services/message.service';
import {MatDividerModule} from '@angular/material/divider';
import { ChatService } from '../../services/chat.service';
import {ScrollingModule} from '@angular/cdk/scrolling';


@Component({
  selector: 'app-chatbox',
  standalone: true,
  imports: [MessageItemComponent, MessageInputComponent,MatGridListModule,CommonModule,MatDividerModule,ScrollingModule],
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.css'
})
export class ChatboxComponent {
  messages$: Observable<{ text: string, sender: string }[]>;
  public isUser: boolean = false

  constructor(private messageService: MessageService, private chatService:ChatService) {
    this.messages$ = this.messageService.getMessages();
  }


}
