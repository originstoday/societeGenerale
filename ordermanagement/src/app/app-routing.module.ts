import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';

const CustomerModule = () => import('./customers/customers.module').then(x => x.CustomerModule);

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'customers', loadChildren: CustomerModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }