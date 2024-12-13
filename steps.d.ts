/// <reference types='codeceptjs' />
type loginPage = typeof import('./pages/login.page');
type testData = typeof import('./testData/data');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, testData: testData }
  interface Methods extends Playwright {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
