import { Injectable } from '@angular/core';
import { Message, TypeOfMessage } from '../types/message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  message: Message | null = null;
  constructor() {}

  private addMessage(type: TypeOfMessage, text: string, timeout?: number) {
    this.message = { type, text };
    setTimeout(() => {
      this.message = null;
    }, timeout ?? 3000);
  }

  success(message: string, timeout?: number) {
    this.addMessage('success', message, timeout);
  }

  error(message: string, timeout?: number) {
    this.addMessage('error', message, timeout);
  }

  info(message: string, timeout?: number) {
    this.addMessage('info', message, timeout);
  }

  warning(message: string, timeout?: number) {
    this.addMessage('warning', message, timeout);
  }
}
