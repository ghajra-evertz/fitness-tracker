import { Subject } from "rxjs";
import { AuthData } from "./auth-data.model";
import { User } from "./user.model";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthService{
    authchange = new Subject<boolean>();

    private user: User | undefined | null;

    constructor(private router: Router) {}

    registerUser(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random()*10000).toString()
        };
        this.authchange.next(true);
        this.router.navigate(['/training']);
    }

    login(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random()*10000).toString()
        };
        this.authSuccessfully();
    }

    logout(){
        this.user = null;
        this.authchange.next(false);
        this.router.navigate(['/login']);
    }

    getUser(){
        return { ...this.user };
    }

    isAuth(){
        return this.user !== null || this.user !== undefined;
    }

    private authSuccessfully(){
        this.authchange.next(true);
        this.router.navigate(['/training']);
    }
}