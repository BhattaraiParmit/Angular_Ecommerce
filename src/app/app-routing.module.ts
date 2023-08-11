import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as component from './components';
import {RoutesPublic} from './routes'


const routes: Routes = [
  {path: '', component: component.LayoutMainComponent, children: RoutesPublic},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
