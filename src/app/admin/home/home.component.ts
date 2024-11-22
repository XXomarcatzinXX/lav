import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { AuthService } from '../../services/auth/auth.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, SidebarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  sidebarVisible: boolean = false;

  constructor(private auth: AuthService, private router: Router) {
  }
  ngOnInit(): void {

  }
  logout(): any {
    console.log('hola mundo')
    this.auth.logout().then(() => {
      this.router.navigate(['/'])

    }).catch(error => {
      console.error('Error al cerrar la sesión')
    })
  }

}
