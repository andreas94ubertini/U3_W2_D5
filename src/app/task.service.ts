import {Injectable, OnInit} from '@angular/core';
import {Task} from "./model/task";
import {logMessages} from "@angular-devkit/build-angular/src/tools/esbuild/utils";
import {getLocaleFirstDayOfWeek} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskArray!:Task[]
constructor() {}
  getAll(){
  return fetch('http://localhost:3000/db')
      .then(res => res.json())

  }
  create(task:Partial<Task>):Promise<Task>{
    return fetch('http://localhost:3000/db',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    }).then(res => res.json());
  }
  completedTask(task:Task){
    return  fetch('http://localhost:3000/db/' + task.id,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    }).then(res => res.json())
       .then(()=>{
         this.getAll().then(data=>{
          this.taskArray = data['db'].filter((el:Task)=> el.completed === true)
         })
       });

  }

  delete(task:Task){
    return fetch('http://localhost:3000/db/'+ task.id,{
      method: 'DELETE'
    }).then(res => res.json());
  }
  modifyTask(task:Task){
     return fetch(`http://localhost:3000/db/${task.id}`, {
      method: 'PUT',
       headers: {
         'content-type' : 'application/json'
       },
       body: JSON.stringify(task)
     }).then(res => res.json())
   }

}
