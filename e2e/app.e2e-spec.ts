import { NgStopwatchPage } from './app.po';

describe('ng-stopwatch App', () => {
  let page: NgStopwatchPage;

  beforeEach(() => {
    page = new NgStopwatchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
