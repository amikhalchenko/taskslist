import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TasksList} from '../../models/tasksList.model';
import {MatDialog} from '@angular/material';
import {TasksListDialogComponent} from '../tasks-list-dialog/tasks-list-dialog.component';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  @Input() tasksList: TasksList;
  @Output() tasksListRemoved = new EventEmitter();
  @Output() tasksListUpdated = new EventEmitter();

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  checkTask(checked: boolean, index: number) {
    const task = this.tasksList.tasks.splice(index, 1)[0];
    task.isDone = checked;
    if (task.isDone === true) {
      this.tasksList.tasks.push(task);
    } else {
      this.tasksList.tasks.unshift(task);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(TasksListDialogComponent, {
      data: this.tasksList
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tasksListUpdated.emit(result);
      }
    });
  }

  removeTasksList() {
    this.tasksListRemoved.emit(this.tasksList);
  }

}
