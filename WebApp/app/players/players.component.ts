import { Component, ViewChild, OnInit } from "@angular/core";
import { Player } from "./player";
import { PlayerService } from "./player.service";
import { ModalComponent } from "../modal/modal.component";

@Component({
    moduleId: module.id,
    selector: "players",
    templateUrl: "players.component.html",
    providers: [PlayerService]
})
export class PlayersComponent implements OnInit {
    @ViewChild("addPlayerModal")
    readonly addPlayerModal: ModalComponent;
    @ViewChild("operationStatusModal")
    readonly operationStatusModal: ModalComponent;

    playersList: Player[];
    addPlayerModel: Player;

    constructor(private playerService: PlayerService) {
    }

    async ngOnInit() {
        this.clearModelForAddingPlayer();
        await this.refreshPlayersList();
    }

    async addPlayer() {
        await this.playerService.addPlayer(this.addPlayerModel);
        await this.refreshPlayersList();
        this.addPlayerModal.hide();
        this.clearModelForAddingPlayer();
    }

    async removePlayer(id: string) {
        this.operationStatusModal.show();
        await this.playerService.removePlayer(id);
        await this.refreshPlayersList();
        this.operationStatusModal.hide();
    }

    private async refreshPlayersList() {
        this.playersList = await this.playerService.getPlayers();
    }

    private clearModelForAddingPlayer() {
        this.addPlayerModel = new Player();
    }
}