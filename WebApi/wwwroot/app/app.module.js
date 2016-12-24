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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_routes_1 = require("./app.routes");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./welcome/welcome.component");
var players_component_1 = require("./players/players.component");
var modal_component_1 = require("./modal/modal.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            welcome_component_1.WelcomeComponent,
            players_component_1.PlayersComponent,
            modal_component_1.ModalComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            app_routes_1.routing
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUF5QztBQUN6Qyw4REFBMEQ7QUFDMUQsd0NBQStDO0FBQy9DLDJDQUF1QztBQUN2QyxzQ0FBMkM7QUFDM0MsaURBQStDO0FBQy9DLGlFQUErRDtBQUMvRCxpRUFBK0Q7QUFDL0QsMkRBQXlEO0FBbUJ6RCxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLFNBQVM7SUFqQnJCLGVBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLDRCQUFZO1lBQ1osb0NBQWdCO1lBQ2hCLG9DQUFnQjtZQUNoQixnQ0FBYztTQUNqQjtRQUNELE9BQU8sRUFBRTtZQUNMLGdDQUFhO1lBQ2IsaUJBQVU7WUFDVixtQkFBVztZQUNYLG9CQUFPO1NBQ1Y7UUFDRCxTQUFTLEVBQUUsRUFDVjtRQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7S0FDNUIsQ0FBQzs7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgIGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyByb3V0aW5nIH0gZnJvbSBcIi4vYXBwLnJvdXRlc1wiO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBXZWxjb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGxheWVycy9wbGF5ZXJzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL21vZGFsL21vZGFsLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBXZWxjb21lQ29tcG9uZW50LFxyXG4gICAgICAgIFBsYXllcnNDb21wb25lbnQsXHJcbiAgICAgICAgTW9kYWxDb21wb25lbnQsXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgSHR0cE1vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICByb3V0aW5nXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICBdLFxyXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH0iXX0=
