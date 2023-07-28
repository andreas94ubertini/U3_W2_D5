import { Component } from '@angular/core';
import {Task} from "../../model/task";
import {TaskService} from "../../task.service";

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent {
  taskArray!: Task[]
constructor(private taskSvc: TaskService) {}
  ngOnInit() {
    this.taskArray = []
    this.taskSvc.getAll()
      .then(data=> {
        this.taskArray = data['db']
      })
  }
  getData2(value:Task){
    console.log(value, 'ricevuto')
    const newValue = new Task(value.id, value.title, true)
    this.taskSvc.delete(newValue).then(()=>{
      this.ngOnInit()
    })

  }
}
