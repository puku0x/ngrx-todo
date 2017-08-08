import { NgrxTestPage } from './app.po';

describe('ngrx-test App', () => {
  let page: NgrxTestPage;

  beforeEach(() => {
    page = new NgrxTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
