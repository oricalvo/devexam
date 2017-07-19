import { DevexamPage } from './app.po';

describe('devexam App', () => {
  let page: DevexamPage;

  beforeEach(() => {
    page = new DevexamPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
