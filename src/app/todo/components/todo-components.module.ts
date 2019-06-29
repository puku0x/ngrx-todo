import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../material';
import {
  TodoCreateDialogComponent,
  TodoDeleteDialogComponent,
  TodoEditDialogComponent
} from './containers';
import { TodoPageComponent } from './pages';
import { TodoListComponent, TodoListItemComponent } from './presenters';

/**
 * Components
 */
const dialogs = [
  TodoCreateDialogComponent,
  TodoDeleteDialogComponent,
  TodoEditDialogComponent
];
const pages = [TodoPageComponent];
const presenters = [TodoListComponent, TodoListItemComponent];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [...dialogs, ...pages, ...presenters],
  entryComponents: [...dialogs],
  declarations: [...dialogs, ...pages, ...presenters]
})
export class TodoComponentsModule {}
