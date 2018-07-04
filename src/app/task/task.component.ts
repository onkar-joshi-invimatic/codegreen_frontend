import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Task } from '../model/Task';
import { Tasks } from '../model/Tasks';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { RestService } from '../services/RestService';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent implements OnInit
{
  taskDescription = "";
  taskPriority = "Green";

  constructor(private taskService : TaskService, private router : Router, private restService: RestService) { }

  ngOnInit() {
  }
    
  addTask() : void
  {
     this.restService.addTask(new Task(null, this.taskDescription, this.taskPriority, new Date())).subscribe(() => {
        this.taskService.tasks.addTask(null, this.taskDescription, this.taskPriority, new Date());
        this.taskDescription = "";
        this.taskPriority = "Green";
        this.router.navigate(['tasks']);
      })
  }

}
