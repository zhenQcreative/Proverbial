import { ProverbialPage } from './app.po';

describe('proverbial App', () => {
  let page: ProverbialPage;

  beforeEach(() => {
    page = new ProverbialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
