import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {TasksList} from '../../models/tasksList.model';

@Component({
  selector: 'app-create-tasks-list',
  templateUrl: './create-tasks-list.component.html',
  styleUrls: ['./create-tasks-list.component.scss']
})
export class CreateTasksListComponent implements OnInit {

  @Input() id: number;
  @Input() tasksList: TasksList;
  @Output() tasksListCreated = new EventEmitter();

  tasksForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    const tasks = [];

    if (this.tasksList) {
      for (const task of this.tasksList.tasks) {
        tasks.push(this.formBuilder.group(task));
      }
    } else {
      tasks.push(
        this.formBuilder.group({
          text: '',
          isDone: false
        })
      );
    }

    this.tasksForm = this.formBuilder.group({
      title: this.tasksList ? this.tasksList.title : '',
      tasks: this.formBuilder.array(tasks)
    });
  }

  get formTasks() {
    return this.tasksForm.get('tasks') as FormArray;
  }

  addTask() {
    const task = this.formBuilder.group({
      text: '',
      isDone: false
    });

    this.formTasks.push(task);
  }

  deleteTask(i) {
    this.formTasks.removeAt(i);
  }

  createTasksList() {
    this.tasksListCreated.emit({
      id: this.tasksList ? this.tasksList.id : this.id,
      title: this.tasksForm.get('title').value,
      tasks: this.formTasks.value
    });
  }

}
