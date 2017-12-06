import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Tasks } from '../model/Tasks';
import { Task } from '../model/Task';
import { Priority } from '../model/Priority';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TasksComponent implements OnInit 
{
  get tasks() : Tasks
  {
      return this.taskService.tasks;
  }
    
  // This is a hack that enables us to use imported enums.
  Priority = Priority;
    
  constructor(private taskService : TaskService) { }

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
    
  removeTask(task : Task) : void
  {
      this.tasks.removeTaskById(task.id);
  }

}
