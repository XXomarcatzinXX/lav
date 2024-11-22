import { Component } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { error } from 'console';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IconFieldModule, InputIconModule, InputTextModule, ButtonModule, FloatLabelModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  value: string | undefined;
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.required])
  })


  constructor(private auth: AuthService, private router: Router, private formbuilder: FormBuilder) {
  }



  login() {
    const { email, password } = this.form.value;

    if (this.form.valid) {
      this.auth.login(email, password)
        .then((resp) => {
          console.log('Se ha iniciado sesión correctamente');
          this.router.navigate(['/home']);
        })
        .catch(error => {
          console.error('Login error', error);
        });
    } else {
      console.error('Formulario inválido. Por favor, revisa los campos.');
    }
  }



}





