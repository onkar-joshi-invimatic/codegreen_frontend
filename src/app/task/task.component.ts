import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Task } from '../model/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent implements OnInit
{
  task = new Task();

  constructor() { }

  ngOnInit() {
  }

}
