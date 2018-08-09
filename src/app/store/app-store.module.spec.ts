import { AppStoreModule } from './app-store.module';

describe('AppStoreModule', () => {
  let coreModule: AppStoreModule;

  beforeEach(() => {
    coreModule = new AppStoreModule();
  });

  it('should create an instance', () => {
    expect(coreModule).toBeTruthy();
  });

});
