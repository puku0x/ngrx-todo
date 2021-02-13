export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface TodoCreateDto {
  title: string;
}

export interface TodoUpdateDto {
  id: string;
  title: string;
  completed: boolean;
}
