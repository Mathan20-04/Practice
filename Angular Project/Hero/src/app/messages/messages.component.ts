import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() item = '';
  constructor(public messageService:MessageService) { }

  ngOnInit(): void {
  }
  clear(){
    this.messageService.clear();
  }
  
}
