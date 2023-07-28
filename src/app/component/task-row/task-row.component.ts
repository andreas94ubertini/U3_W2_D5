import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../model/task";

@Component({
  selector: 'app-task-row',
  templateUrl: './task-row.component.html',
  styleUrls: ['./task-row.component.scss']
})
export class TaskRowComponent {
  @Output() completed = new EventEmitter<Task>()
  @Output() deleted = new EventEmitter<Task>()
  @Input()taskTitle!:string
  @Input()task!:Task
  completedTask(task:Task){
    this.completed.emit(task)
  }
  deletedTask(task:Task){
    this.deleted.emit(task)

  }

}
