import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Emblemas } from './emblemas/emblemas';
import { Fotos } from './fotos/fotos';
import { Mapas } from './mapas/mapas';
import { Navbar } from './navbar/navbar';


export const routes: Routes = [
    { path: '', component: Home},
    { path:'emblemas', component: Emblemas},
    { path:'home', component: Home },
    { path:'mapas', component: Mapas },
    { path:'fotos', component: Fotos },
    { path:'navbar', component: Navbar },
    { path:'**', redirectTo: '' } 
];

