import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
   arr: string[] = ['jinal', 'shah', 'coal'];
   todolist: Todo[] = [
     new Todo('1', 'push your product on your todo application', 'pending'),
     new Todo('2', 'email the management for more informations', 'done')
   ];
   flag: boolean = false;
   Id: string = '';
   Title: string = '';
   Status: string = '';
   str1: string = 'jinal';
   ontodoDelete(item: Todo): void {
     this.todolist.splice(this.todolist.indexOf(item), 1);
   }
   onAddTodo(): void {
     this.todolist.push(new Todo(this.Id, this.Title, this.Status));
     this.Id = '';
     this.str1 = '';
   }
   ontodoupdate(item: Todo): void {
     if (item.Status === 'done') {
       item.Status = 'pending';
     } else {
       item.Status = 'done';
     }
   }
   onCancelTodo(): void {
     this.flag = true;
   }
   onAddForm(): void {
      this.flag = true;
   }
  constructor() { }

  ngOnInit(): void {
  }

}
