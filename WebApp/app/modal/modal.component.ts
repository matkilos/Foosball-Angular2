import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "modal",
    templateUrl: "modal.component.html"
})
export class ModalComponent {
  private visible = false;

  @Input()
  simple = false;

  public show(): void {
    this.visible = true;
  }

  public hide(): void {
    this.visible = false;
  }
}