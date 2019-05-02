import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TasksList} from '../../models/tasksList.model';

@Component({
  selector: 'app-tasks-list-dialog',
  templateUrl: './tasks-list-dialog.component.html',
  styleUrls: ['./tasks-list-dialog.component.scss']
})
export class TasksListDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TasksListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TasksList
  ) {
  }

  ngOnInit() {
  }

  updateTasksList(tasksList) {
    this.dialogRef.close(tasksList);
  }

}
