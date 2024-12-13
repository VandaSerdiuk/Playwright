const{
    I,
} =inject();

export = {

buttons: {
    signIn: { xpath: "//*[@type='submit' and contains(text(), 'Sign in')]"}, 
    toDoList: { xpath: '//*[@class=\"flex flex-col w-80 bg-gray-50 rounded-lg p-4\"][1]' },
    demoApp: { xpath:'//*[@class="inline-flex gap-6 p-6 h-full"]'},
    webApp: { xpath:'//button[@class="w-full text-left p-4 hover:bg-gray-700 transition-colors bg-gray-700"]'},
    inProgress: { xpath: '//*[@class="flex flex-col w-80 bg-gray-50 rounded-lg p-4"][2]'},
    mobApp: { xpath:'//button//h2[text()="Mobile Application"]'},
    todoCol: { xpath:'//*[@class="flex flex-col w-80 bg-gray-50 rounded-lg p-4"][1]'},
    progrCol: { xpath:'//*[@class="flex flex-col w-80 bg-gray-50 rounded-lg p-4"][2]'},
    doneCol: { xpath:'//*[@class="flex flex-col w-80 bg-gray-50 rounded-lg p-4"][4]'}

},

fields: {
    userName: { id : 'username'},
    password: { id: 'password'},
},


validateLogin(userName, password) {
    I.fillField(this.fields.userName, userName); 
    I.fillField(this.fields.password, password); 
    I.click(this.buttons.signIn);
},

async sucsDemo()  {
  I.see("Main web application development")
   
   },

async navigateWebApp()  {
    const text = await I.grabTextFrom(this.buttons.webApp);
   
    if(text.includes("Web Application")){
       console.log("Web Application");
    }else
    console.log("Not Web Application");
   
   },

async boardVerification()  {
 const text = await I.grabTextFrom(this.buttons.toDoList);

 if(text.includes("Implement user authentication")){
    console.log("Implement user authentication is in the To Do column");
 }else
 console.log("Implement user authentication is Not in the To Do column");

},

async boardVerification1() {
    try {
        const text = await I.grabTextFrom(this.buttons.toDoList);

        if (text.includes("Feature") && text.includes("High Priority")) {
            console.log("Confirm Tags");
        } else {
            console.log("Not Confirm Tags");
        }
    } catch (error) {
        console.error("An error occurred while verifying the tags:", error);
    }
},


async taskVerification()  {
    const text = await I.grabTextFrom(this.buttons.toDoList);
   
    if(text.includes("Fix navigation bug")){
       console.log("Fix navigation bug is in the To Do column");
    }else
    console.log("Fix navigation bug is Not in the To Do column");
   
   },

   async taksVerification1(): Promise<void> {

    try {
        const text: string = await I.grabTextFrom(this.buttons.toDoList);

        if (text.includes("Bug")) {
            console.log("Confirm Tags");
        } else {
            console.log("Not Confirm Tags");
        }
    } catch (error) {
        console.error("An error occurred while verifying the tags:", error);
    }
},


async taskDesing()  {
    const text = await I.grabTextFrom(this.buttons.inProgress);
   
    if(text.includes("Design system updates")){
       console.log("Design system updates in the In Progress column");
    }else
    console.log("Design system updates Not in the In Progress column");
   
   },

   async taksDesing1(): Promise<void> {

    try {
        const text: string = await I.grabTextFrom(this.buttons.inProgress);

        if (text.includes("Design")) {
            console.log("Confirm Tags");
        } else {
            console.log("Not Confirm Tags");
        }
    } catch (error) {
        console.error("An error occurred while verifying the tags:", error);
    }
},

async navigateMobApp()  {
    I.click(this.buttons.mobApp);
    const text = await I.grabTextFrom(this.buttons.mobApp);
   
    if(text.includes("Mobile Application")){
       console.log("Mobile Application");
    }else
    console.log("Not Mobile Application");
   
   },

async taskPush()  {
    const text = await I.grabTextFrom(this.buttons.todoCol);
   
    if(text.includes("Push")){
       console.log("Push is in the To Do column");
    }else
    console.log("Push is Not in the To Do column");
   
   },

async taksPush1() {

    try {
        const text: string = await I.grabTextFrom(this.buttons.todoCol);

        if (text.includes("Feature")) {
            console.log("Confirm Tags");
        } else {
            console.log("Not Confirm Tags");
        }
    } catch (error) {
        console.error("An error occurred while verifying the tags:", error);
    }
},

async taskMode()  {
    const text = await I.grabTextFrom(this.buttons.progrCol);
   
    if(text.includes("Offline")){
       console.log("Offline mode in the In Progress column");
    }else
    console.log("Offline mode Notin the In Progress column");
   
   },
   
   async taskMode1() {
    try {
        const text: string = await I.grabTextFrom(this.buttons.progrCol);

        if (text.includes("Feature") && text.includes("High Priority")) {
            console.log("Confirm Tags");
        } else {
            console.log("Not Confirm Tags");
        }
    } catch (error) {
        console.error("An error occurred while verifying the tags:", error);
    }
},

async taskDone()  {
    const text = await I.grabTextFrom(this.buttons.doneCol);
   
    if(text.includes("App icon design")){
       console.log("App icon design in the Done column");
    }else
    console.log("App icon design Not in the Done column");
   
   },

async taksDone1(): Promise<void> {

    try {
        const text: string = await I.grabTextFrom(this.buttons.doneCol);

        if (text.includes("Design")) {
            console.log("Confirm Tags");
        } else {
            console.log("Not Confirm Tags");
        }
    } catch (error) {
        console.error("An error occurred while verifying the tags:", error);
    }
},


   
}