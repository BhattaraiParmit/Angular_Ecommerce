import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as component from './components';
import {RoutesPublic, RoutesSecure} from './routes'
import { AuthGuard } from './guards';

const routes: Routes = [
  {path: '', component: component.LayoutMainComponent, children: RoutesPublic},
  {path: '', component: component.LayoutMainComponent, children: RoutesSecure, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
