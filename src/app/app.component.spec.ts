import { TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from '@app/core/core.module';
import { TodoModule } from '@app/todo/todo.module';
import * as TodoActions from '@app/todo/actions';
import * as fromTodo from '@app/todo/reducers';
import { reducers, metaReducers } from '@app/reducers';
import { Todo } from '@app/models';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let store: Store<fromTodo.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([]),
        RouterTestingModule,
        CoreModule.forRoot(),
        TodoModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'select').and.callThrough();
    spyOn(store, 'pipe').and.callThrough();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('ngrx-todo');
  }));

  it('should dispatch an action to load data', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.debugElement.componentInstance;
    app.ngOnInit();
    const action = new TodoActions.LoadTodos();
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.pipe).toHaveBeenCalled();
  });

  it('should dispatch an action to create data', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.debugElement.componentInstance;
    app.create('test');
    const action = new TodoActions.CreateTodo({
      todo: new Todo(null, 'test')
    });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch an action to update data', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.debugElement.componentInstance;
    app.update(new Todo('1', 'test'));
    const action = new TodoActions.UpdateTodo({
      todo: {
        id: '1',
        changes: new Todo('1', 'test')
      }
    });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch an action to delete data', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.debugElement.componentInstance;
    app.delete(new Todo('1', 'test'));
    const action = new TodoActions.DeleteTodo({ id: '1' });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

});
