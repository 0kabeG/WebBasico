import { Routes } from '@angular/router';
import { Home } from './presentation/home/home';
import { About } from './presentation/about/about';
import { Notfound } from './presentation/notfound/notfound';
import { Personal } from './presentation/personal/personal';
import { Guns } from './presentation/guns/guns';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'about', component:About},
    {path:'personal', component:Personal},
    {path:'guns', component:Guns},
    {path:'**', component:Notfound},
];
