import { Component } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";


@Component({
    selector: 'register-view',
    templateUrl: './register-view.component.html',
    styleUrls : [ './register-view.component.css']
})



export class RegisterView{
    name: string;
    lastname: string;
    email: string;
    password: string;
    address: string;

    title = "Esta es la pagina de registro"

    constructor(public userService: UserService, public router: Router) {}

    registrarse(){
        const user = { name: this.name, lastname: this.lastname, email: this.email, password: this.password, address: this.address};
        this.userService.register(user).subscribe( data => {
            console.log(data)
            if(data.state){
                this.router.navigate(['/']).then(()=>{
                    window.location.reload();
                });;
            }


        })
    }
}


