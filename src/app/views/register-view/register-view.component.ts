import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators  } from "@angular/forms";

const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const REGEX_PASS_MED = /^(?=.*\d)[0-9a-zA-Z]{8,}$/;
const REGEX_PASS_STR = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{10,}$/;
@Component({
    selector: 'register-view',
    templateUrl: './register-view.component.html',
    styleUrls : [ './register-view.component.css']
})

export class RegisterView implements OnInit{
    errorEmail = '';
    complexDESC = '';
    color = '';
    myForm: FormGroup;


    constructor(public userService: UserService, public router: Router, public fb: FormBuilder) {
        this.myForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            lastname: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.pattern(REGEX_EMAIL)]],
            address: ['', [Validators.required, Validators.minLength(5)]],
            password: ['', [Validators.required, Validators.minLength(8)]]
          });
    }

    ngOnInit() { }

    validarPassword(){
        let progress = document.querySelector('#progress-bar');
        let password = this.myForm.value.password;
        if( password === ''){
            progress.setAttribute('style','width:0%');
            this.color = 'bg-secondary';
            this.complexDESC = '';
        }else
        if(REGEX_PASS_STR.test(password)){
            progress.setAttribute('style','width:100%');
            this.color = 'bg-success';
            this.complexDESC = 'Muy Fuerte'
        }else
        if(REGEX_PASS_MED.test(password)){
            progress.setAttribute('style','width:66%');
            this.color = 'bg-warning';
            this.complexDESC = 'Fuerte'
        }else{
            progress.setAttribute('style','width:33%');
            this.color = 'bg-danger';
            this.complexDESC = 'Debil'
        }

    }

    registrarse(){
        const user = this.myForm.value
        this.userService.register(user).subscribe( data => {
            console.log(data)
            if(!data.error){
                sessionStorage.setItem('usuario', JSON.stringify(data))
                localStorage.setItem('kart', JSON.stringify([]));
                this.router.navigate(['/']).then(()=>{
                    window.location.reload();
                });
            }
            else if (data.errorCode === "auth/email-already-in-use") {
                console.log(data.error)
                this.errorEmail = "El email ya esta registrado"
            }
        })
    }
}


