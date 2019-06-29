import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoPageComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: TodoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {}
