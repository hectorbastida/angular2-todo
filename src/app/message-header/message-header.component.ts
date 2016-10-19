import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-message-header',
  templateUrl: './message-header.component.html',
  styleUrls: ['./message-header.component.css']
})
export class MessageHeaderComponent implements OnInit {

  constructor(@Inject('todoService') private todoService) { }

  ngOnInit() {
  }

  addMessage(value,input) {
  	if(!value) return; 
  	this.todoService.addTodo(value);
  	input.value="";
  }
}