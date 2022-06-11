export class ToDoItem {
  constructor(
    public id: number,
    public description: string,
    public action: boolean
  ) {
    this.id = id;
    this.description = description;
    this.action = action;
  }
}