import { Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages.component'),
        children: [
            {
                path: 'home',
                loadComponent: () => import('./home/home.component'),
            },
        ],
    },
];

export default routes;
