import { Injectable } from '@angular/core';

interface Todo {
  content: String
  checked: Boolean
}

@Injectable()
export class TodoService {

  todos: Array<Todo>;
  constructor() {
    this.todos = [
	  {content:'Todo 1', checked:false},
	  {content:'Todo 2', checked:false},
	  {content:'Todo 3', checked:false}
    ];
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  updateTodo(value, index) {
    this.todos[index].content = value;
  }

  addTodo(value) {
  	let newTodo = {
	  content:value,
	  checked:false
  	}
  	this.todos.push(newTodo);
  }

  toggleChecked(index) {
  	this.todos[index].checked = !this.todos[index].checked;
  }

  deleteChecked() {
	this.todos = this.todos.filter( function(todo) {
	    return !(todo.checked);
	});
  }
}
