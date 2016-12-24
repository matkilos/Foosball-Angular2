import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "welcome",
    templateUrl: "welcome.component.html"
})
export class WelcomeComponent {
    displayName = "Welcome to Foosball!";
    description = "Foosball is a tiny application for managing Pragmasoft Table Football League";
    features = [
        "Register a player",
        "Add result of game between 4 players",
        "View history of games",
        "View standings of each player in league"];
}