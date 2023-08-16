import { Routes } from "@angular/router";
import * as component from "../components"
import { ValidTokenGuard } from "../guards";

export const RoutesPublic: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: component.LoginComponent, canActivate: [ValidTokenGuard]},
]