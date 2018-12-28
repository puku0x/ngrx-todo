import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatToolbarModule
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatToolbarModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: []
})
export class MaterialModule {}
