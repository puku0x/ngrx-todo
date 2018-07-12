import { TodoStateModule } from './todo-state.module';

describe('TodoStateModule', () => {
  let coreModule: TodoStateModule;

  beforeEach(() => {
    coreModule = new TodoStateModule(null);
  });

  it('should create an instance', () => {
    expect(coreModule).toBeTruthy();
  });

  it('should refuse multiple imports', () => {
    expect(() => new TodoStateModule(coreModule)).toThrow();
  });

});
