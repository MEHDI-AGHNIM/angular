import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSComponent } from './task-s.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
 
describe('TaskSComponent', () => {
  let component: TaskSComponent;
  let fixture: ComponentFixture<TaskSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, ],
      declarations: [ TaskSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
