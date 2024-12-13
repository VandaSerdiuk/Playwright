
@ProjectBoard
Feature: LoginAutomation
As a user of the Project Board application
  I want to be able to log in successfully using valid credentials
  So that I can access the Demo App dashboard

@ProjectBoardLogin 
Scenario:The script should input these credentials into the login form and submit it successfully
Given I am on the Demo App login page
When I input credentials into the login form
Then I should successfully login to Demo App

@BoardVerification
Scenario: Verify task details in the To Do column
Given I am on the Demo App login page
When I input credentials into the login form
Then I navigate to Web Application
Then I should see Implement user authentication in the To Do column
Then It should have the tags Feature and High Priority

@TaskVerification
Scenario: Verify Fix navigation bug in the To Do column
Given I am on the Demo App login page
When I input credentials into the login form
Then I navigate to Web Application
Then I should see Fix navigation bug in the To Do column
Then It should have the tag Bug

@TaskDesing
Scenario: Verify Design system updates in the In Progress column
Given I am on the Demo App login page
When I input credentials into the login form
Then I navigate to Web Application
Then I should see Design system updates in the In Progress column
Then It should have the tag Design

@TaskVerificationPush
Scenario: Verify Push notification system in the To Do column
Given I am on the Demo App login page
When I input credentials into the login form
Then I navigate to Mobile Application
Then I should see Push notification system in the To Do column
Then It should have the tag Feature

@TaskVerificationOfflineMode
Scenario: Verify Offline mode and its tags in the In Progress column
Given I am on the Demo App login page
When I input credentials into the login form
Then I navigate to Mobile Application
Then I should see Offline mode in the In Progress column
Then I should confirm the tags are Feature and High Priority

@TaskVerificationDone
Scenario: Verify App icon design and its tag in the Done column
Given I am on the Demo App login page
When I input credentials into the login form
Then I navigate to Mobile Application 
Then I should see App icon design in the Done column
Then I should confirm the tag is Design



