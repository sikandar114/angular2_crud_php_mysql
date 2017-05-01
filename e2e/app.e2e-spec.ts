import { CliSrcPage } from './app.po';

describe('cli-src App', () => {
  let page: CliSrcPage;

  beforeEach(() => {
    page = new CliSrcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
