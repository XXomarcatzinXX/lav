import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './admin/home/home.component';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLanding = () => redirectUnauthorizedTo(['']); // Redirige al login

export const routes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLanding },
    },
];
