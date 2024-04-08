import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private messageService: MessageService) {

  }
  error(summary: string, detail: string = '') {
    this.messageService.add({ severity: 'error', summary: summary, detail: detail });
  }

  info(summary: string, detail: string = '') {
    this.messageService.add({ severity: 'info', summary: summary, detail: detail });
  }

  warning(summary: string, detail: string = '') {
    this.messageService.add({ severity: 'warn', summary: summary, detail: detail });
  }

  success(summary: string, detail: string = '') {
    this.messageService.add({ severity: 'success', summary: summary, detail: detail });
  }

}
