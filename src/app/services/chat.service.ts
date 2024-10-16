import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private localHostServer = "http://localhost:3000/api/chat"
  constructor(private http:HttpClient) { }

  sendMessage(message: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(this.localHostServer, { message });
  }
}
