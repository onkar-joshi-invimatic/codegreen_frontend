import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Tasks } from '../model/Tasks';
import { Task } from '../model/Task';
import { TaskService } from '../task.service';
import { RestService } from '../services/RestService';

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
    
  constructor(private taskService : TaskService, private restService: RestService) { }

  ngOnInit() 
  {
    this.taskService.tasks = new Tasks();
    this.restService.getAllTasks().subscribe((response) => {
      response.forEach((item) => {
        let date = new Date(item.date);
          this.taskService.tasks.addTask(item.id, item.description, item.priority, date);  
      })
    })
  }
    
  removeTask(task : Task) : void
  {
      this.restService.deleteTask(task._id).subscribe(() => {
        this.tasks.removeTaskById(task._id);
      })
  }

}
