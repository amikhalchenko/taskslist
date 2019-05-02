export class TasksList {
  id: number;
  title: string;
  tasks: Array<Task>;
}

export class Task {
  text: string;
  isDone: boolean;
}
