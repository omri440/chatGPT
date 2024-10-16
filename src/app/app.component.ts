import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ChatboxComponent } from "./components/chatbox/chatbox.component";
import { MainCardComponent } from "./components/main-card/main-card.component";
import { HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, ChatboxComponent, MainCardComponent,HttpClientModule]
})
export class AppComponent {
   private title = 'signals_project';
}
