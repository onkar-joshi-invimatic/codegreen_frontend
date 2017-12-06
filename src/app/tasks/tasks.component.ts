import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Tasks } from '../model/Tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TasksComponent implements OnInit
{
  task = "todo";
    
  constructor() { }

  ngOnInit() 
  {
  }

}
