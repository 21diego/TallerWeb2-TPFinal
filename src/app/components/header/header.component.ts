import { Component } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
    selector: 'header-comp',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class Header{
    usuario = 'Prueba'

    constructor(private userService: UserService, private router: Router) {}

    desloguearse(){
        this.userService.logout().subscribe( data => {
            console.log(data)
            if(data.state){
                this.router.navigate(['/login']);
            }
        });
    }
}