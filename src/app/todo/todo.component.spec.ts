import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '../material';
import { SharedModule } from '../shared';
import { Todo } from '../models';
import { reducers, metaReducers } from '../reducers';
import * as TodoActions from './actions';
import * as fromTodo from './reducers';
import { TodoEffects } from './effects/todo.effects';
import { TodoComponent } from './todo.component';
import { CoreModule } from '../core/core.module';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let store: Store<fromTodo.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        MaterialModule,
        SharedModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreModule.forFeature('todo', fromTodo.reducers),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([TodoEffects]),
        CoreModule.forRoot()
      ],
      declarations: [ TodoComponent ]
    })
    .compileComponents();
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'select').and.callThrough();
    spyOn(store, 'pipe').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an action to load data', () => {
    const app: TodoComponent = fixture.debugElement.componentInstance;
    app.ngOnInit();
    const action = new TodoActions.LoadTodos();
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.pipe).toHaveBeenCalled();
  });

  it('should dispatch an action to create data', () => {
    const app: TodoComponent = fixture.debugElement.componentInstance;
    app.create('test');
    const action = new TodoActions.CreateTodo({
      todo: new Todo(null, 'test')
    });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch an action to update data', () => {
    const app: TodoComponent = fixture.debugElement.componentInstance;
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
    const app: TodoComponent = fixture.debugElement.componentInstance;
    app.delete(new Todo('1', 'test'));
    const action = new TodoActions.DeleteTodo({ id: '1' });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
