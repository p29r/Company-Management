import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { ClientForm } from './pages/client/client-form/client-form';
import { ClientList } from './pages/client/client-list/client-list';
import { EmployeeForm } from './pages/employee/employee-form/employee-form';
import { EmployeeList } from './pages/employee/employee-list/employee-list';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
        
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'',
        component:Layout,
        //canActivate:[authGuard],
        children:[
            {
                path:'client-form',
                component:ClientForm
            },
            {
                path:'client-list',
                component:ClientList
            }, {
                path:'employee-form',
                component:EmployeeForm
            },
            {
                path:'employee-list',
                component:EmployeeList
            }
        ]
    }
];
