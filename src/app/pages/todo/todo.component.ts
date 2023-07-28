import {Component, OnInit} from '@angular/core';
import {Task} from "../../model/task";
import {TaskService} from "../../task.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{
  taskArray!: Task[]
  taskArrayHome!: Task[]
  newTask:Partial<Task> = new Task(0,'',false)
  message:string = ''


  constructor(private taskSvc: TaskService) {
  }

  ngOnInit() {
    this.taskArray = []
    this.taskSvc.getAll()
      .then(data=> {
        this.taskArray = data['db']
      })
  }
  create() {
    this.taskSvc.create(this.newTask)
      .then(res => {
        console.log(this.newTask)
        this.message = `aggiunto`
        this.ngOnInit()
      })
  }
  getData(value:Task){
    console.log(value, 'ricevuto')
    const newValue = new Task(value.id, value.title, true)
    this.taskSvc.completedTask(newValue).then(()=>{
      this.ngOnInit()
    })

  }
}
