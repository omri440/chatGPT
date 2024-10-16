import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages = new BehaviorSubject<{ text: string, sender: string }[]>([]);
  private messageSUB$ = new BehaviorSubject<{ text: string, sender: string }>({text:'',sender:''})

  getMessages(): Observable<{ text: string, sender: string }[]> {
    return this.messages.asObservable();
  }
  getMessage(): Observable<{ text: string, sender: string }> {
    return this.messageSUB$.asObservable();
  }

  addMessage(message: { text: string, sender: string }) {
    const currentMessages = this.messages.getValue();
    this.messages.next([...currentMessages, message]);
  }

  clearMessages() {
    this.messages.next([]);
  }
  getLastMessage(): { text: string, sender: string } | null {
    const currentMessages = this.messages.getValue();
    return currentMessages.length > 0 ? currentMessages[currentMessages.length - 1] : null;
  }

  

}
