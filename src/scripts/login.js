

/* ---- Imports ---- */

// User Principle
let ACTIVE_USERNAME;
let ACTIVE_USER_ROLE;

// User Database
import { userTable } from "../database/users.js";

console.log(userTable)

// Get form sumbit buttons

const loginOption = document.getElementById("login-action");
const signUpOption = document.getElementById("signup-action");

/*---------------------------
    Login
-----------------------------*/
const loginFunction = () => {

    // getDataFromFields
    let username = document.getElementById("username-login").value;
    let password = document.getElementById("password-login").value;

    userTable.forEach(user => {
        
        if(username === user.username && password === user.password) {

            // log user in
            ACTIVE_USERNAME = username;
            ACTIVE_USER_ROLE = user.role;

            localStorage.setItem("csa-auth-user", ACTIVE_USERNAME);
            localStorage.setItem("csa-auth-role", ACTIVE_USER_ROLE);

            // redirect user to app
            window.location = ("./src/library.html")
            
        }

    });

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

        // add user to database
        userTable.push(newUser)

        console.log("Updated succesfully!")
        console.log(userTable)

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