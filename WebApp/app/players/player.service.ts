import { Injectable } from "@angular/core";
import { Player } from "./player";

@Injectable()
export class PlayerService {
    private static mockPlayers: Player[] = [
        new Player({id: "1", name: "Pavel Motul"}),
        new Player({id: "2", name: "Valdemar Niemir"}),
        new Player({id: "3", name: "Mateus K"}),
        new Player({id: "4", name: "Bart L"}),
    ];

    getPlayers(): Promise<Player[]> {
        return Promise.resolve(PlayerService.mockPlayers);
    }

    addPlayer(player: Player): Promise<Player> {
        const identifiers = PlayerService.mockPlayers.map(player => parseInt(player.id));
        const currentHighestId = Math.max(...identifiers);
        const createdPlayer = new Player({ ...player, id: String(currentHighestId + 1) });
        PlayerService.mockPlayers.push(createdPlayer);
        return Promise.resolve(createdPlayer);
    }

    async removePlayer(id: string): Promise<void> {
        const indexOfPlayer = PlayerService.mockPlayers.findIndex(player => player.id === id);
        if (indexOfPlayer === -1) {
            return Promise.reject("Player with given id was not found.");
        }

        await this.sleep(2); //simulate delay

        PlayerService.mockPlayers.splice(indexOfPlayer, 1);
    }

    private sleep(seconds: number): Promise<void> {
        return new Promise<void>(resolve => setTimeout(resolve, seconds * 1000));
    }
}