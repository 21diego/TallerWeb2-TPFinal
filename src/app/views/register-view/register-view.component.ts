import { Component } from "@angular/core";
import { UserService } from "../../services/user.service";


@Component({
    selector: 'register-view',
    templateUrl: './register-view.component.html',
    styleUrls : [ './register-view.component.css']
})



export class RegisterView{
    name: string;
    email: string;
    password: string;
    title = "Esta es la pagina de registro"

    constructor(public userService: UserService) {}

    registrarse(){
        const user = { name: this.name, email: this.email, password: this.password };
        this.userService.register(user).subscribe( data => {
            console.log(data)
        })
    }
}