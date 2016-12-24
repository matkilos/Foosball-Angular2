import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { WelcomeComponent } from "./welcome/welcome.component";
import { PlayersComponent } from "./players/players.component"; 

const appRoutes: Routes = [
    { path: "", redirectTo: "welcome", pathMatch: "full" },
    { path: "welcome", component: WelcomeComponent },
    { path: "players", component: PlayersComponent }
];

export const routing = RouterModule.forRoot(appRoutes);