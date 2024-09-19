# Aloware Test

# Important note: 
The test plan and test cases to verify the home page are located in the cypress/fixtures/documents folder (Word document)

# Install Cypress and run the automated test
Although the project already contains the necessary dependencies to be downloaded and executed (clone project), here is a brief guide on how to install Cypress and run the project.

1. The tool chosen to automate the test on this occasion is Cypress in its latest version
   
2. Configure the test environment
-Requirement: have npm installed, npm install latest-version. Have Visual Studio code installed (https://code.visualstudio.com/download)
-Create a folder in any desired location
-Open the folder created in the previous step and install cypress from the command line, npm install cypress –save-dev
-Then run the npx cypress open command
-In the new window select the option E2E Testing>Continue
-Select the Browser of your preference>Start E2E Testing in Chrome
-Select the option Create new spec > Create spec > Ok run the spec
-Close the test runner windows and return to Visual Studio code, notice that a new folder was created with the name Cypress
-Open the cypress>e2e folder
- Copy the content from the repo (e2e, pages, etc) in the new cypress installation

 3. Run the automated test
-Run the test again with the npx cypress open command
-Select E2E Testing>Chrome>Start E2E Testing in Chrome
-Select the homePageValidations.cy.js test

# Generate reports in Cypress
Although the project already contains the necessary dependencies to generate reports, here is a brief guide on how to install Mocha Reporter and generate some reports of the execution, the project already contains some examples of previously executed reports in HTML format within the cypress/reports folder.

1. Reports in Cypress can be generated using Mocha reporter
2. Install the library and configure it in Cypress
-In the command line install
 npm install mochawesome --save-dev
 npm install mochawesome-merge --save-dev
 npm install mochawesome-report-generator --save-dev

-Configure the cypress config.js file, include the following within defineConfig
reporter: 'mochawesome',
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "overwrite": false,
    "html": true,
    "json": false
  },


-Configure the Package.json file and include the following Script
"scripts": {
    "runner": "cypress open",
    "html-report": "npx cypress run --spec cypress/e2e/homePageValidations.cy.js --browser chrome --headed"
  }

-To run the test and execute the report it is necessary to execute the previous script in the command line, this will execute the test directly in visual mode, and after execution the cypress>reports folder will be generated, and inside the HTML file with the details of the test execution (with the detail if any of the tests passed or failed)

# Run tests daily via Github Actions
The GitHub Actions are configured in the project to run all tests daily at 6:00 PM, in this way we make sure to test all the tests included in the solution daily. In the case of this particular exercise, the test that verifies the automated test cases for the home page will be run.
Although Github Actions will run the test daily, collaborators in the repository will not receive notifications because Github does not support sending notifications natively. It would be necessary to add some integration for sending messages, either by email or by another means. This example shows what should go in Actions if you want to send notifications through a Slack channel.

You'll need to:
Use a secret for the Slack Webhook URL in your repository's settings.
Install a Slack Webhook URL to the channel where you want the notifications.
![image](https://github.com/user-attachments/assets/7c3f0e11-3d4d-4cc0-b499-89255e20dd2b)


     




 




