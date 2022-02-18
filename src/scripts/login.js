

/* ---- Imports ---- */

// User Principle
let ACTIVE_USERNAME;
let ACTIVE_USER_ROLE;

// User Database
import { userTable } from "../database/users.js";

let users = JSON.stringify(userTable);
console.log(users)

// Get form sumbit buttons

const loginOption = document.getElementById("login-action");
const signUpOption = document.getElementById("signup-action");
    
// key for users in storage
const userDB = "csa-auth-userDatabase"

/*---------------------------
    Login
-----------------------------*/

const loginDatabaseFunctionality = () => {

// Mock singleton - Make sure userDatabase is only created once in Storage api
    if (!localStorage.getItem(userDB)) {

        console.log("Please create user database")

        localStorage.setItem(userDB, users);
        console.log(localStorage.getItem(userDB));
        console.log("db created successfully")
        
    } else {

        console.log("user database already exists")
        console.log(localStorage.getItem(userDB));
    }
}


const loginFunction = () => {

    // controller exists variable
    let authenticated = false;

    // getDataFromFields
    let username = document.getElementById("username-login").value;
    let password = document.getElementById("password-login").value;

    userTable.forEach(user => {
        
        if(username === user.username && password === user.password) {

            // log user in
            ACTIVE_USERNAME = username;
            ACTIVE_USER_ROLE = user.role;

            authenticated = true;
        }

    });

    if (authenticated) {
        
        localStorage.setItem("csa-auth-user", ACTIVE_USERNAME);
        localStorage.setItem("csa-auth-role", ACTIVE_USER_ROLE);

        loginDatabaseFunctionality();

        // redirect user to app
        window.location = ("./src/library.html")
        
    } else {

        alert("Invalid username or password. Please sign in using your correct account details");
    }

};


/*---------------------------
    Sign up
-----------------------------*/
const signupFunction = () => {

    // getDataFromFields
    let newUsername = document.getElementById("username-input").value;
    let newEmail = document.getElementById("email-input").value;
    let newPassword = document.getElementById("password-input").value;
    let newPasswordConfirm = document.getElementById("password-input-confirm").value;

    // Create new user object
    if (newPassword === newPasswordConfirm) {

        let newUser = {
            
            username : newUsername,
            email : newEmail,
            password : newPassword,
            role : "member"
            
        };

        loginDatabaseFunctionality();

        // --- add user to database --- //
       
        // add newUser to js array
        users = JSON.parse(users);
        users.push(newUser);

        console.log("Updated succesfully!")
        console.log(users)

        // convert js array to JSON and save to storage
        users = JSON.stringify(users);
        localStorage.setItem(userDB, users)

        // log new user in
        ACTIVE_USERNAME = newUser.username;
        ACTIVE_USER_ROLE = newUser.role;
        localStorage.setItem("csa-auth-user", ACTIVE_USERNAME);
        localStorage.setItem("csa-auth-role", ACTIVE_USER_ROLE);

        // redirect new user to app
        window.location = ("./src/library.html")
                    
                
    } else {
        alert("Please confirm your password by entering the same password in both blocks")
    }
};


/*---------------------------
    Event Handling and Interactivity
-----------------------------*/

loginOption.addEventListener("click", () => {
    loginFunction()
});



signUpOption.addEventListener("click", () => {
    signupFunction()
});