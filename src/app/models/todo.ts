/**
 * Todo
 */
export class Todo {
  constructor(
    public id?: number,
    public content?: string,
    public done?: boolean,
    public createDate?: Date,
    public updateDate?: Date,
  ) { }
}
