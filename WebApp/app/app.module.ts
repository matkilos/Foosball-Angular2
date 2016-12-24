import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from "@angular/forms";
import { routing } from "./app.routes";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { PlayersComponent } from "./players/players.component";
import { ModalComponent } from "./modal/modal.component";

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        PlayersComponent,
        ModalComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
    ],
    providers: [
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }