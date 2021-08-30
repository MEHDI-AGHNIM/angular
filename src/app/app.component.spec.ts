import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient  } from '@angular/common/http';
import { HttpClientModule  } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TaskSComponent } from './components/task-s/task-s.component';

describe('AppComponent', () => {
  let httpMock:HttpTestingController;
  let httpClient:HttpClient;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserModule,
        HttpClientTestingModule 
         
      ],
      providers:[HttpClient,TaskSComponent],

      declarations: [
        AppComponent,
          
      ],
    }).compileComponents();
    httpMock=TestBed.get(HttpTestingController);
    httpClient=TestBed.inject(HttpClient);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
     const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'karma'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('karma');
  });

  it('should render title in h1 tag ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('karma app is running!');
  });
});
