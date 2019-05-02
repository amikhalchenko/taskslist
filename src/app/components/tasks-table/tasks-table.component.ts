import {Component, HostListener, OnInit} from '@angular/core';
import {TasksList} from '../../models/tasksList.model';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.scss']
})
export class TasksTableComponent implements OnInit {

  private tasksListIdCounter = 0;

  tasksLists: Array<TasksList> = [];

  isCreateTasksListShowed = false;

  constructor() {
  }

  ngOnInit() {
    const savedTasksLists = JSON.parse(localStorage.getItem('tasksLists'));
    if (savedTasksLists) {
      this.tasksLists = savedTasksLists;
    }
  }

  onTasksListCreated(tasksList: TasksList) {
    this.isCreateTasksListShowed = false;
    this.tasksLists.push(tasksList);
    this.tasksListIdCounter++;
  }

  onTasksListUpdated(tasksList: TasksList) {
    this.tasksLists[this.getTasksListIndex(tasksList)] = tasksList;
  }

  onTasksListRemoved(tasksList) {
    this.tasksLists.splice(this.getTasksListIndex(tasksList), 1);
  }

  private getTasksListIndex(tasksList): number {
    let tasksListIndex;
    this.tasksLists.forEach((list, index) => {
      if (list.id === tasksList.id) {
        tasksListIndex = index;
      }
    });

    return tasksListIndex;
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    localStorage.setItem('tasksLists', JSON.stringify(this.tasksLists));
  }

}
