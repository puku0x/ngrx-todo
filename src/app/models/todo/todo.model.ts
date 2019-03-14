/**
 * Todo
 */
export class Todo {
  constructor(
    public id?: string,
    public text?: string,
    public checked?: boolean,
    public createdAt?: number,
    public updatedAt?: number
  ) {}
}
