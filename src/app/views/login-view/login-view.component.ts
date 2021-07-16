import { Component } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
    selector: 'login-view',
    templateUrl: './login-view.component.html',
    styleUrls: [ './login-view.component.css']
})


export class LoginView{
    email: string;
    password: string;

    title = "Esta es la pagina de login"

    constructor(public userService: UserService, public router: Router) {}

    loguearse(){
        const user = { email: this.email, password: this.password };
        this.userService.login(user).subscribe( data => {
            console.log(data)
            if(data.state){
                sessionStorage.setItem('usuario', JSON.stringify(data))
                this.router.navigate(['/']).then(()=>{
                    window.location.reload();
                });
            }
        })
    }

    

    
}
