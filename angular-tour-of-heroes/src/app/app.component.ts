import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //imports: [MessagesComponent]
})
export class AppComponent {
  title = 'Tour of Heroes';
}