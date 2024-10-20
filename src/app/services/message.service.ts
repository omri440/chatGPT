import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChatService } from './chat.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private chatService: ChatService) {}


  private isChatbotProcessing: boolean = false;
  private messages = new BehaviorSubject<{ text: string, sender: string }[]>([]);

  getMessages(): Observable<{ text: string, sender: string }[]> {
    return this.messages.asObservable();
  }


  addMessage(message: { text: string, sender: string }) {
    const currentMessages = this.messages.getValue();
    const lastSender = currentMessages[currentMessages.length - 1];

    if (this.isChatbotProcessing && message.sender === "user") {
        let waitMessage = { text: "Please wait until the chatbot finishes responding.", sender: "chatbot" };
        this.messages.next([...currentMessages, message, waitMessage]);
        return;
    }

    this.messages.next([...currentMessages, message]);

    if (message.sender === "user") {
        this.isChatbotProcessing = true;

        this.chatService.sendMessage(message.text).subscribe({
            next: (response) => {
                const chatResponse = { text: response.message, sender: "chatbot" };
                const updatedMessages = this.messages.getValue();
                this.messages.next([...updatedMessages, chatResponse]);
                this.isChatbotProcessing = false;
            },
            error: (err) => {
                let errorMessage = { text: "Error communicating with chatbot.", sender: "chatbot" };
                const updatedMessages = this.messages.getValue();
                this.messages.next([...updatedMessages, errorMessage]);
                this.isChatbotProcessing = false;
            }
        });
    }
}

  clearMessages() {
    this.messages.next([]);
  }
  getLastMessage(): { text: string, sender: string } | null {
    const currentMessages = this.messages.getValue();
    return currentMessages.length > 0 ? currentMessages[currentMessages.length - 1] : null;
  }

  

}
