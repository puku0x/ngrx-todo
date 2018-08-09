import { TodoStoreModule } from './todo-store.module';

describe('TodoStoreModule', () => {
  let coreModule: TodoStoreModule;

  beforeEach(() => {
    coreModule = new TodoStoreModule();
  });

  it('should create an instance', () => {
    expect(coreModule).toBeTruthy();
  });

});
