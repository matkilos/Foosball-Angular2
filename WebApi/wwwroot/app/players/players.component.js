"use strict";
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
var player_service_1 = require("./player.service");
var modal_component_1 = require("../modal/modal.component");
var PlayersComponent = (function () {
    function PlayersComponent(playerService) {
        this.playerService = playerService;
    }
    PlayersComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.clearModelForAddingPlayer();
                        return [4 /*yield*/, this.refreshPlayersList()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayersComponent.prototype.addPlayer = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.playerService.addPlayer(this.addPlayerModel)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.refreshPlayersList()];
                    case 2:
                        _a.sent();
                        this.addPlayerModal.hide();
                        this.clearModelForAddingPlayer();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayersComponent.prototype.removePlayer = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.operationStatusModal.show();
                        return [4 /*yield*/, this.playerService.removePlayer(id)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.refreshPlayersList()];
                    case 2:
                        _a.sent();
                        this.operationStatusModal.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayersComponent.prototype.refreshPlayersList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.playerService.getPlayers()];
                    case 1:
                        _a.playersList = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayersComponent.prototype.clearModelForAddingPlayer = function () {
        this.addPlayerModel = new player_1.Player();
    };
    return PlayersComponent;
}());
__decorate([
    core_1.ViewChild("addPlayerModal"),
    __metadata("design:type", typeof (_a = typeof modal_component_1.ModalComponent !== "undefined" && modal_component_1.ModalComponent) === "function" && _a || Object)
], PlayersComponent.prototype, "addPlayerModal", void 0);
__decorate([
    core_1.ViewChild("operationStatusModal"),
    __metadata("design:type", typeof (_b = typeof modal_component_1.ModalComponent !== "undefined" && modal_component_1.ModalComponent) === "function" && _b || Object)
], PlayersComponent.prototype, "operationStatusModal", void 0);
PlayersComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "players",
        templateUrl: "players.component.html",
        providers: [player_service_1.PlayerService]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof player_service_1.PlayerService !== "undefined" && player_service_1.PlayerService) === "function" && _c || Object])
], PlayersComponent);
exports.PlayersComponent = PlayersComponent;
var _a, _b, _c;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcnMvcGxheWVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTZEO0FBQzdELG1DQUFrQztBQUNsQyxtREFBaUQ7QUFDakQsNERBQTBEO0FBUTFELElBQWEsZ0JBQWdCO0lBU3pCLDBCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUNoRCxDQUFDO0lBRUssbUNBQVEsR0FBZDs7Ozs7d0JBQ0ksSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7d0JBQ2pDLE1BQU0sZUFBQSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBQTs7d0JBQS9CLFVBQWdDOzs7OztLQUNuQztJQUVLLG9DQUFTLEdBQWY7Ozs7NEJBQ0ksTUFBTSxlQUFBLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBQTs7d0JBQXZELFVBQXdEO3dCQUN4RCxNQUFNLGVBQUEsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUE7O3dCQUEvQixVQUFnQzt3QkFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7Ozs7O0tBQ3BDO0lBRUssdUNBQVksR0FBbEIsVUFBbUIsRUFBVTs7Ozs7d0JBQ3pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDakMsTUFBTSxlQUFBLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFBOzt3QkFBekMsVUFBMEM7d0JBQzFDLE1BQU0sZUFBQSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBQTs7d0JBQS9CLFVBQWdDO3dCQUNoQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7O0tBQ3BDO0lBRWEsNkNBQWtCLEdBQWhDOzs7Ozs7d0JBQ0ksS0FBQSxJQUFJLENBQUE7d0JBQWUsTUFBTSxlQUFBLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEVBQUE7O3dCQUF4RCxHQUFLLFdBQVcsWUFBd0MsQ0FBQzs7Ozs7S0FDNUQ7SUFFTyxvREFBeUIsR0FBakM7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtBQXBDRztJQURDLGdCQUFTLENBQUMsZ0JBQWdCLENBQUM7a0RBQ0gsZ0NBQWMsb0JBQWQsZ0NBQWM7d0RBQUM7QUFFeEM7SUFEQyxnQkFBUyxDQUFDLHNCQUFzQixDQUFDO2tEQUNILGdDQUFjLG9CQUFkLGdDQUFjOzhEQUFDO0FBSnJDLGdCQUFnQjtJQU41QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztLQUM3QixDQUFDO3lEQVVxQyw4QkFBYSxvQkFBYiw4QkFBYTtHQVR2QyxnQkFBZ0IsQ0FzQzVCO0FBdENZLDRDQUFnQiIsImZpbGUiOiJwbGF5ZXJzL3BsYXllcnMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIi4vcGxheWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vbW9kYWwvbW9kYWwuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJwbGF5ZXJzXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwbGF5ZXJzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6IFtQbGF5ZXJTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGxheWVyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBAVmlld0NoaWxkKFwiYWRkUGxheWVyTW9kYWxcIilcclxuICAgIHJlYWRvbmx5IGFkZFBsYXllck1vZGFsOiBNb2RhbENvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJvcGVyYXRpb25TdGF0dXNNb2RhbFwiKVxyXG4gICAgcmVhZG9ubHkgb3BlcmF0aW9uU3RhdHVzTW9kYWw6IE1vZGFsQ29tcG9uZW50O1xyXG5cclxuICAgIHBsYXllcnNMaXN0OiBQbGF5ZXJbXTtcclxuICAgIGFkZFBsYXllck1vZGVsOiBQbGF5ZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhck1vZGVsRm9yQWRkaW5nUGxheWVyKCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZWZyZXNoUGxheWVyc0xpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhZGRQbGF5ZXIoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJTZXJ2aWNlLmFkZFBsYXllcih0aGlzLmFkZFBsYXllck1vZGVsKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnJlZnJlc2hQbGF5ZXJzTGlzdCgpO1xyXG4gICAgICAgIHRoaXMuYWRkUGxheWVyTW9kYWwuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJNb2RlbEZvckFkZGluZ1BsYXllcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJlbW92ZVBsYXllcihpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5vcGVyYXRpb25TdGF0dXNNb2RhbC5zaG93KCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5wbGF5ZXJTZXJ2aWNlLnJlbW92ZVBsYXllcihpZCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZWZyZXNoUGxheWVyc0xpc3QoKTtcclxuICAgICAgICB0aGlzLm9wZXJhdGlvblN0YXR1c01vZGFsLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHJlZnJlc2hQbGF5ZXJzTGlzdCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllcnNMaXN0ID0gYXdhaXQgdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsZWFyTW9kZWxGb3JBZGRpbmdQbGF5ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRQbGF5ZXJNb2RlbCA9IG5ldyBQbGF5ZXIoKTtcclxuICAgIH1cclxufSJdfQ==
