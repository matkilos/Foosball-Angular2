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
var ModalComponent = (function () {
    function ModalComponent() {
        this.visible = false;
        this.simple = false;
    }
    ModalComponent.prototype.show = function () {
        this.visible = true;
    };
    ModalComponent.prototype.hide = function () {
        this.visible = false;
    };
    return ModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "simple", void 0);
ModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "modal",
        templateUrl: "modal.component.html"
    }),
    __metadata("design:paramtypes", [])
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQWlEO0FBT2pELElBQWEsY0FBYztJQUwzQjtRQU1VLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHeEIsV0FBTSxHQUFHLEtBQUssQ0FBQztJQVNqQixDQUFDO0lBUFEsNkJBQUksR0FBWDtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFTSw2QkFBSSxHQUFYO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFUQztJQURDLFlBQUssRUFBRTs7OENBQ087QUFKSixjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLHNCQUFzQjtLQUN0QyxDQUFDOztHQUNXLGNBQWMsQ0FhMUI7QUFiWSx3Q0FBYyIsImZpbGUiOiJtb2RhbC9tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcIm1vZGFsXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJtb2RhbC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSB2aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2ltcGxlID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzaG93KCk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaWRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgfVxyXG59Il19
