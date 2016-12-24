"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var core_1 = require("@angular/core");
var player_1 = require("./player");
var PlayerService = PlayerService_1 = (function () {
    function PlayerService() {
    }
    PlayerService.prototype.getPlayers = function () {
        return Promise.resolve(PlayerService_1.mockPlayers);
    };
    PlayerService.prototype.addPlayer = function (player) {
        var identifiers = PlayerService_1.mockPlayers.map(function (player) { return parseInt(player.id); });
        var currentHighestId = Math.max.apply(Math, identifiers);
        var createdPlayer = new player_1.Player(__assign({}, player, { id: String(currentHighestId + 1) }));
        PlayerService_1.mockPlayers.push(createdPlayer);
        return Promise.resolve(createdPlayer);
    };
    PlayerService.prototype.removePlayer = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var indexOfPlayer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        indexOfPlayer = PlayerService_1.mockPlayers.findIndex(function (player) { return player.id === id; });
                        if (indexOfPlayer === -1) {
                            return [2 /*return*/, Promise.reject("Player with given id was not found.")];
                        }
                        return [4 /*yield*/, this.sleep(2)];
                    case 1:
                        _a.sent(); //simulate delay
                        PlayerService_1.mockPlayers.splice(indexOfPlayer, 1);
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerService.prototype.sleep = function (seconds) {
        return new Promise(function (resolve) { return setTimeout(resolve, seconds * 1000); });
    };
    return PlayerService;
}());
PlayerService.mockPlayers = [
    new player_1.Player({ id: "1", name: "Pavel Motul" }),
    new player_1.Player({ id: "2", name: "Valdemar Niemir" }),
    new player_1.Player({ id: "3", name: "Mateus K" }),
    new player_1.Player({ id: "4", name: "Bart L" }),
];
PlayerService = PlayerService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], PlayerService);
exports.PlayerService = PlayerService;
var PlayerService_1;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcnMvcGxheWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsbUNBQWtDO0FBR2xDLElBQWEsYUFBYTtJQUExQjtJQWtDQSxDQUFDO0lBMUJHLGtDQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxNQUFjO1FBQ3BCLElBQU0sV0FBVyxHQUFHLGVBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO1FBQ2pGLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsT0FBUixJQUFJLEVBQVEsV0FBVyxDQUFDLENBQUM7UUFDbEQsSUFBTSxhQUFhLEdBQUcsSUFBSSxlQUFNLGNBQU0sTUFBTSxJQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLElBQUcsQ0FBQztRQUNsRixlQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUssb0NBQVksR0FBbEIsVUFBbUIsRUFBVTs7Z0JBQ25CLGFBQWE7Ozs7d0NBQUcsZUFBYSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQzt3QkFDckYsRUFBRSxDQUFDLENBQUMsYUFBYSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDdkIsTUFBTSxnQkFBQyxPQUFPLENBQUMsTUFBTSxDQUFDLHFDQUFxQyxDQUFDLEVBQUM7d0JBQ2pFLENBQUM7d0JBRUQsTUFBTSxlQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUE7O3dCQUFuQixVQUFvQixDQUFDLGdCQUFnQjt3QkFFckMsZUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7OztLQUN0RDtJQUVPLDZCQUFLLEdBQWIsVUFBYyxPQUFlO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBTyxVQUFBLE9BQU8sSUFBSSxPQUFBLFVBQVUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFuQyxDQUFtQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FsQ0EsQUFrQ0MsSUFBQTtBQWpDa0IseUJBQVcsR0FBYTtJQUNuQyxJQUFJLGVBQU0sQ0FBQyxFQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBQyxDQUFDO0lBQzFDLElBQUksZUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUMsQ0FBQztJQUM5QyxJQUFJLGVBQU0sQ0FBQyxFQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQyxDQUFDO0lBQ3ZDLElBQUksZUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUM7Q0FDeEMsQ0FBQztBQU5PLGFBQWE7SUFEekIsaUJBQVUsRUFBRTs7R0FDQSxhQUFhLENBa0N6QjtBQWxDWSxzQ0FBYSIsImZpbGUiOiJwbGF5ZXJzL3BsYXllci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGxheWVyU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBtb2NrUGxheWVyczogUGxheWVyW10gPSBbXHJcbiAgICAgICAgbmV3IFBsYXllcih7aWQ6IFwiMVwiLCBuYW1lOiBcIlBhdmVsIE1vdHVsXCJ9KSxcclxuICAgICAgICBuZXcgUGxheWVyKHtpZDogXCIyXCIsIG5hbWU6IFwiVmFsZGVtYXIgTmllbWlyXCJ9KSxcclxuICAgICAgICBuZXcgUGxheWVyKHtpZDogXCIzXCIsIG5hbWU6IFwiTWF0ZXVzIEtcIn0pLFxyXG4gICAgICAgIG5ldyBQbGF5ZXIoe2lkOiBcIjRcIiwgbmFtZTogXCJCYXJ0IExcIn0pLFxyXG4gICAgXTtcclxuXHJcbiAgICBnZXRQbGF5ZXJzKCk6IFByb21pc2U8UGxheWVyW10+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFBsYXllclNlcnZpY2UubW9ja1BsYXllcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFBsYXllcihwbGF5ZXI6IFBsYXllcik6IFByb21pc2U8UGxheWVyPiB7XHJcbiAgICAgICAgY29uc3QgaWRlbnRpZmllcnMgPSBQbGF5ZXJTZXJ2aWNlLm1vY2tQbGF5ZXJzLm1hcChwbGF5ZXIgPT4gcGFyc2VJbnQocGxheWVyLmlkKSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEhpZ2hlc3RJZCA9IE1hdGgubWF4KC4uLmlkZW50aWZpZXJzKTtcclxuICAgICAgICBjb25zdCBjcmVhdGVkUGxheWVyID0gbmV3IFBsYXllcih7IC4uLnBsYXllciwgaWQ6IFN0cmluZyhjdXJyZW50SGlnaGVzdElkICsgMSkgfSk7XHJcbiAgICAgICAgUGxheWVyU2VydmljZS5tb2NrUGxheWVycy5wdXNoKGNyZWF0ZWRQbGF5ZXIpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY3JlYXRlZFBsYXllcik7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcmVtb3ZlUGxheWVyKGlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBpbmRleE9mUGxheWVyID0gUGxheWVyU2VydmljZS5tb2NrUGxheWVycy5maW5kSW5kZXgocGxheWVyID0+IHBsYXllci5pZCA9PT0gaWQpO1xyXG4gICAgICAgIGlmIChpbmRleE9mUGxheWVyID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJQbGF5ZXIgd2l0aCBnaXZlbiBpZCB3YXMgbm90IGZvdW5kLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoMik7IC8vc2ltdWxhdGUgZGVsYXlcclxuXHJcbiAgICAgICAgUGxheWVyU2VydmljZS5tb2NrUGxheWVycy5zcGxpY2UoaW5kZXhPZlBsYXllciwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzbGVlcChzZWNvbmRzOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHNlY29uZHMgKiAxMDAwKSk7XHJcbiAgICB9XHJcbn0iXX0=
