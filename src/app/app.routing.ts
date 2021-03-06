import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Components
import { AppModule } from 'app/app.module';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProductoComponent } from './producto/producto.component';
import { ProveedorComponent } from './proveedor/proveedor.component';



const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cliente', component: ClienteComponent },
    { path: 'producto', component: ProductoComponent },
    { path: 'proveedor', component: ProveedorComponent },
    { path: '**', component: HomeComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(appRoutes, { enableTracing: true }) ],
    exports: [ RouterModule ]
    })
    export class AppRoutingModule {}


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
