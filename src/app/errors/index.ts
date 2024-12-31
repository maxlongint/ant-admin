import { Routes } from '@angular/router';

const routes: Routes = [
    { path: '404', loadComponent: () => import('./not-found/not-found.component') },
    { path: '401', loadComponent: () => import('./access-denied/access-denied.component') },
];

export default routes;
