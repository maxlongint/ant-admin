import { Routes } from '@angular/router';

const routes: Routes = [
    // 登录页面
    { path: 'login', loadComponent: () => import('./login/login.component') },
];

export default routes;
