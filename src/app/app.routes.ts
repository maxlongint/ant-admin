import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'auth/login' },
    { path: 'auth', loadChildren: () => import('./auth') },
    { path: 'errors', loadChildren: () => import('./errors') },
    { path: '**', pathMatch: 'full', redirectTo: 'errors/404' },
];