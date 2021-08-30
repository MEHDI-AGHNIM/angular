 import { TestBed} from '@angular/core/testing';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TaskService } from './task.service';
import { AppRoutingModule } from '../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';

describe('TaskService', () => {
   
  let httpMock:HttpTestingController;
  let httpClient:HttpClient;
   beforeEach(() => {
    TestBed.configureTestingModule({
       imports: [
      RouterTestingModule,
      HttpClientModule,
      AppRoutingModule,
      BrowserModule,
      HttpClientTestingModule,
       
    ],
    providers:[],
    });
    const service = TestBed.inject(TaskService);
    httpMock=TestBed.get(HttpTestingController);
    httpClient=TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    
    const service: TaskService = TestBed.get(TaskService);
    expect(service).toBeTruthy();
  });
  it('should have getData function', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service.apiurl).toBeTruthy();
   });

});
