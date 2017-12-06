import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Tasks } from '../model/Tasks';
import { Priority } from '../model/Priority';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TasksComponent implements OnInit 
{
  tasks = new Tasks();
    
  // This is a hack that enables us to use imported enums.
  Priority = Priority;
    
  constructor() { }

  ngOnInit() 
  {
      this.tasks.addTask("Send mail to Elon.", Priority.Yellow, new Date());
      this.tasks.addTask("Send mail to Elon.", Priority.Yellow, new Date());
      this.tasks.addTask("Send mail to Elon.", Priority.Yellow, new Date());
      this.tasks.addTask("Buy catfood!", Priority.Red, new Date());
      this.tasks.addTask("Buy catfood!", Priority.Red, new Date());
      this.tasks.addTask("Buy catfood!", Priority.Red, new Date());
      this.tasks.addTask("Write loveletter.", Priority.Green, new Date());
      this.tasks.addTask("Write loveletter.", Priority.Green, new Date());
      this.tasks.addTask("Write loveletter.", Priority.Green, new Date());
  }

}
