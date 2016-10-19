import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styles: []
})
export class SimpleFormComponent implements OnInit {
  @Input() todo:Object;
  @Input() index:number;

  constructor(@Inject('todoService') private todoService) {

  }
  updateMessage(value, index, input) {
    if(!value) return;
    this.todoService.updateTodo(value, index);
  }
  deleteMessage(index, input) {
    this.todoService.deleteTodo(index);
  }
  toggleChecked(index) {
    this.todoService.toggleChecked(index);
  }
  ngOnInit() {
  }

}
