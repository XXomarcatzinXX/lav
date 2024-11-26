import { Component } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { error } from 'console';
import { MessagesModule } from 'primeng/messages';

import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IconFieldModule, InputIconModule, InputTextModule, ButtonModule, FloatLabelModule, FormsModule, ReactiveFormsModule, MessagesModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  messages: Message[] = [];
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
        .then(() => {
          console.log('Se ha iniciado sesión correctamente');
          this.router.navigate(['/home']);
        })
        .catch(error => {
          this.messages = [{ severity: 'error', summary: 'Error', detail: 'Usuario o contraseña inválidos' }];
          console.error('Login error', error);
          setTimeout(() => {
            this.messages = [];
          }, 5000);
        });
    } else {
      console.error('Formulario inválido. Por favor, revisa los campos.');
      this.messages = [{ severity: 'warn', summary: 'Formulario inválido', detail: 'Por favor, revisa los campos.' }];

      setTimeout(() => {
        this.messages = [];
      }, 5000);
    }
  }






}





