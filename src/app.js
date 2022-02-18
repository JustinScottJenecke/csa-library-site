

// ------------Constants-----------------//
    
    // key for users in storage
    const userDB = "csa-auth-userDatabase"

    // key for records in storage
    const recordDB = "csa-auth-recordsDatabase"


    let users = JSON.parse(localStorage.getItem(userDB));
    console.log(users)

// // Mock singleton - Make sure userDatabase is only created once in Storage api
//     if (!localStorage.getItem(userDB)) {

//         console.log("Please create user database")
//         let users = JSON.stringify(userTable);

//         localStorage.setItem(userDB, users);
//         console.log(localStorage.getItem(userDB));
//         console.log("db created successfully")
        
//     } else {

//         console.log("user database already exists")
//         console.log(localStorage.getItem(userDB));
//     }