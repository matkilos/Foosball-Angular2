"use strict";
var router_1 = require("@angular/router");
var welcome_component_1 = require("./welcome/welcome.component");
var players_component_1 = require("./players/players.component");
var appRoutes = [
    { path: "", redirectTo: "welcome", pathMatch: "full" },
    { path: "welcome", component: welcome_component_1.WelcomeComponent },
    { path: "players", component: players_component_1.PlayersComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBDQUF1RDtBQUV2RCxpRUFBK0Q7QUFDL0QsaUVBQStEO0FBRS9ELElBQU0sU0FBUyxHQUFXO0lBQ3RCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDdEQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtJQUNoRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO0NBQ25ELENBQUM7QUFFVyxRQUFBLE9BQU8sR0FBRyxxQkFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBXZWxjb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGxheWVycy9wbGF5ZXJzLmNvbXBvbmVudFwiOyBcclxuXHJcbmNvbnN0IGFwcFJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIndlbGNvbWVcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxyXG4gICAgeyBwYXRoOiBcIndlbGNvbWVcIiwgY29tcG9uZW50OiBXZWxjb21lQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwicGxheWVyc1wiLCBjb21wb25lbnQ6IFBsYXllcnNDb21wb25lbnQgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRpbmcgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpOyJdfQ==