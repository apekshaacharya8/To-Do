import { Component } from '@angular/core';
import { Item } from 'src/app/Model/todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashBoardComponent {
  items : Item[]=[
    {
      label : "Add Task" ,
      image: ""
    },
    {
      label : "Add Task" ,
      image: ""
    }
  ];
}
