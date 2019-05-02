import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTasksListComponent } from './create-tasks-list.component';

describe('CreateTasksListComponent', () => {
  let component: CreateTasksListComponent;
  let fixture: ComponentFixture<CreateTasksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTasksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
