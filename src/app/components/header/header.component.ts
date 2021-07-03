import { Component, DoCheck, OnInit} from "@angular/core";
import { UserService, User } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
    selector: 'header-comp',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class Header implements OnInit{
    usuario: User
    nombre: string
    usuarioActivo: boolean

    constructor(private userService: UserService, private router: Router) {}

    ngOnInit(){
        if(!this.usuario){
            console.log("no hay usuario")
            this.userService.getCurrentUser().subscribe( data =>{
                console.log(data)
                this.setUser(data)
            })
        }
    }

    setUser(user: User){
        this.usuario = user; 
        var name = user.name;
        this.nombre = name ? name.charAt(0).toUpperCase() + name.slice(1) : ", inicie sesion por favor";
        this.usuarioActivo = user.state;
    }

    desloguearse(){
        this.userService.logout().subscribe( data => {
            console.log(data);
            this.setUser(data);
            if(!data.state){
                sessionStorage.removeItem('usuario');
                this.router.navigate(['/login']).then(()=>{
                    window.location.reload();
                });
            }
        });
    }
}