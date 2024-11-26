import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { AuthService } from '../../services/auth/auth.service';
import { error } from 'console';
import { Router } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenuItem } from 'primeng/api';
import { MenuItemContent, MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, SidebarModule, BadgeModule, AvatarModule, MenuModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent implements OnInit {
  items: MenuItem[] | undefined;
  sidebarVisible: boolean = false;
  emailUser: any
  constructor(private auth: AuthService, private router: Router) {
  }
  ngOnInit() {

    //* user: omar@gmail.com | password: 123456

    this.emailUser = this.auth.getCurrentUser()?.email;
    console.log(this.emailUser)


    this.items = [
      {
        separator: true
      },
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            shortcut: '⌘+N'
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
            shortcut: '⌘+S'
          }
        ]
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            shortcut: '⌘+O',
          },
          {
            label: 'Messages',
            icon: 'pi pi-inbox',
            badge: '2'
          },
          {
            label: 'Cerrar sesion',
            icon: 'pi pi-sign-out',
            shortcut: 'shift+Q',
            command: () => this.logout()
          }
        ]
      },
      {
        separator: true
      }
    ];
  }
  logout(): any {
    console.log('hola mundo')
    this.auth.logout().then(() => {
      console.log('se cerror la sesion correctamente');
      this.router.navigate(['/'])

    }).catch(error => {
      console.error('Error al cerrar la sesión')
    })
  }

}
