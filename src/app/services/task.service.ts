import { Interface } from 'src/app/models/interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/*
 @NgModule({
   imports:[HttpClientModule],
   providers:[HttpClient]
 })*/
 
export class TaskService {
apiurl="http://localhost:5000/tasks";

  constructor(private http  : HttpClient) { }

  findAll(){
    return this.http.get<Interface[]>(this.apiurl);
  }
  delete(id:any){
    return this.http.delete(`${this.apiurl}/${id}`);
  }
  persist(task:any){
    return this.http.post<Interface>(this.apiurl, task);
  }
  completed(id:any,completed:any){
    return this.http.patch(`${this.apiurl}/${id}` , {completed: !completed});
  }
update(task:any){
return this.http.put(`${this.apiurl}/${task.id}`,task);
}
 }
