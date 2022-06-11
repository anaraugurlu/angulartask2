import { ToDoItem } from './todoitem';

export class Model {
  name: string;
  items: ToDoItem[];

  constructor() {
    this.name = 'Anara';
    this.items = [
      new ToDoItem(1, 'Breakfast', false),
      new ToDoItem(2, 'Sport', false),
      new ToDoItem(3, 'Read Book', false),
    ];
  }
}
