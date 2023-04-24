import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

/* AuthenticationService is used to check the correct credentaials*/
export class AuthenticationService {
    constructor() { }

    authenticate(username: any, password: any) {
        if (username === "pavi" && password === "Pavi@28") {
            sessionStorage.setItem('username', username)
            return true;
        }
        else {
            return false;
        }
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('username')
        console.log(!(user === null))
        return !(user === null)
    }

    logOut() {
        sessionStorage.removeItem('username')
    }
}