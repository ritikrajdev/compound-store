import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.success('Welcome to the home page!');
  }
}
