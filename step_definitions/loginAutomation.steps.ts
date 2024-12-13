export{ };
const {
    I, loginPage, testData
} = inject();

Given('I am on the Demo App login page', () => {
I.amOnPage('/')
});

When('I input credentials into the login form', () => {
 loginPage.validateLogin(testData.demoScenario.userName, testData.demoScenario.password);
});

Then('I should successfully login to Demo App', () => {
  loginPage.verifyDemoAppSuccessMessage();
  });

Then('I navigate to Web Application', () => {
  loginPage.navigateWebApp();
  });

Then ('I should see Implement user authentication in the To Do column', () => {
    loginPage.verifyTaskInToDoColumn();
  });


Then('It should have the tags Feature and High Priority', async() => {
   await loginPage.verifyFeatureAndPriorityTagsInToDoColumn();
  });


Then ('I should see Fix navigation bug in the To Do column', () => {
    loginPage.verifyBugFixInToDoColumn();
  });

Then('It should have the tag Bug', async() => {
    await loginPage.confirmBugTagInToDoColumn();
   });

Then ('I should see Design system updates in the In Progress column', () => {
    loginPage.taskDesing();
  });

Then('It should have the tag Design', async() => {
    await loginPage.confirmDesignTagInProgressColumn();
   });

Then('I navigate to Mobile Application', () => {
    loginPage.navigateMobApp();
    });

Then ('I should see Push notification system in the To Do column', () => {
      loginPage.taskPush();
    });

Then('It should have the tag Feature', async() => {
      await loginPage.confirmFeatureTagInToDoColumn();
     });

Then ('I should see Offline mode in the In Progress column', () => {
      loginPage.taskMode();
    });

Then('I should confirm the tags are Feature and High Priority', async() => {
      await loginPage.confirmFeatureAndPriorityTagsInProgressColumn();
     });

Then ('I should see App icon design in the Done column', () => {
      loginPage.taskDone();
    });

Then('I should confirm the tag is Design', async() => {
      await loginPage.confirmDesignTagInDoneColumn();
     })
  



  
  
  