import { NgsitePage } from './app.po';

describe('ngsite App', function() {
  let page: NgsitePage;

  beforeEach(() => {
    page = new NgsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
