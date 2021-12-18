import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  isEditEnable : boolean = false; 
  inputTodo:string="";
  Todoedit:string="";
  todos:Todo[];
  constructor() { }

  ngOnInit(): void {
    this.todos=[
      {content:'firsttodo',completed:false},
      {content:'secondtodo',completed:false}
    ]
  }
  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }
  deleteToDo(id:number){
    // delete this.todos[id];
    this.todos = this.todos.filter((v, i) => i !== id);
   
  }
  addToDo()
  {
      this.todos.push({
        content:this.inputTodo,
        completed:false}
      );
      this.inputTodo="";
  }
editTodo(id:number,cont: string)
{
   this.todos[id].content=cont;
   
}
onEdit(){
  this.isEditEnable =!this.isEditEnable;
}
}
