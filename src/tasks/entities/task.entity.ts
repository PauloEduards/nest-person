import { CreateTaskDto } from "../dto/create-task.dto";

export class Task {
  private readonly tasks: {
    id: number;
    title: string;
    description?: string;
  }[] = [
    {
      id: 1,
      title: 'Sample Task',
      description: 'This is a sample task description',
    },
  ];

  public add(task: CreateTaskDto) {
    this.tasks.push({
      id: this.tasks.length + 1,
      title: task.title,
      description: task.description,
    });
  }
}