import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TodoEffects } from './effects/todo.effect';
import { todoReducer } from './reducers/todo.reducer';
import { TodoService } from './services/todo.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({todo: todoReducer}),
    EffectsModule.forRoot([TodoEffects])
  ],
  declarations: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        TodoService,
      ]
    };
  }

  /**
   * コンストラクタ
   * @param parentModule
   */
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
