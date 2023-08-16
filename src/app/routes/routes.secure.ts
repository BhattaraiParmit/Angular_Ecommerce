import { Routes } from "@angular/router";
import * as component from "../components"

export const RoutesSecure: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: component.LandingComponent},
]