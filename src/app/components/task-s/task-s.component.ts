import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Injectable, NgModule, OnInit } from '@angular/core';
 import { Interface } from 'src/app/models/interface';
import { TaskService } from 'src/app/services/task.service';

@Injectable({
  providedIn: 'root'
})
 
@Component({
  selector: 'app-task-s',
  templateUrl: './task-s.component.html',
  styleUrls: ['./task-s.component.css']
})
 
 
export class TaskSComponent implements OnInit {
tasks :Interface[]=[];
Resulttasks :Interface[]=[];
myTask :Interface ={
  label : '',
  completed : false
}
show = false ;
searchtext ='';
  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }


  getTasks(){
    this.taskService.findAll()
    .subscribe(tasks => { 
      this.Resulttasks=this.tasks=tasks
    } )
  }
  deleteTask(id:any ){
    this.taskService.delete(id)
    .subscribe(() =>{
      this.tasks=this.tasks.filter(task => task.id != id)
    })
  }

  persistTask(){
    this.taskService.persist(this.myTask)
    .subscribe((task) =>{
      this.tasks= [task, ...this.tasks]
    this.resetTask();
    this.show=false;
    });
}
resetTask(){
  this.myTask = {
    label: '',
    completed: false
  }
}

toggleCompleted(task:any){
  this.taskService.completed(task.id ,task.completed)
  .subscribe(() =>{
  task.completed =  !task.completed
  })
}

editForm =false;

editTask(task:any){
this.myTask=task;
this.editForm=true;
}
updateTask(){
  this.taskService.update(this.myTask)
  .subscribe(task => {
    this.resetTask();
    this.editForm=false;
  })
}

searchTasks(){
  this.Resulttasks=this.tasks.filter((task) => task.label.toLowerCase().includes(this.searchtext.toLowerCase()))
}


  
}
