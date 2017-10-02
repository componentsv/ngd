import { NgdPage } from './app.po';

describe('ngd App', () => {
  let page: NgdPage;

  beforeEach(() => {
    page = new NgdPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
