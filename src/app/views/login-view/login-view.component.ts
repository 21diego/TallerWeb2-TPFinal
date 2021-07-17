import { Component } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators  } from "@angular/forms";
@Component({
    selector: 'login-view',
    templateUrl: './login-view.component.html',
    styleUrls: [ './login-view.component.css']
})


export class LoginView{
    errorEmail = "";
    errorPassword = "";
    myForm: FormGroup;

    constructor(public userService: UserService, public router: Router, public fb: FormBuilder) {
        this.myForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        })
    }

    loguearse(){
        const user = this.myForm.value;
        this.userService.login(user).subscribe( data => {
            console.log(data)
            if(!data.error){
                sessionStorage.setItem('usuario', JSON.stringify(data))
                this.router.navigate(['/']).then(()=>{
                    window.location.reload();
                });
            }else {
                this.errorEmail = "";
                this.errorPassword = "";
                if ( data.errorCode === "auth/wrong-password"){
                    this.errorPassword = "La contraseña es incorrecta";
                }else if ( data.errorCode === "auth/user-not-found"){
                    this.errorEmail = "El email no esta asociado a ninguna cuenta";
                }
            }
        })
    }

    

    
}
