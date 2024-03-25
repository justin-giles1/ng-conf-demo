import {Component, computed, Signal, signal, WritableSignal} from "@angular/core";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {
  public number: WritableSignal<number> = signal(0);
  public isOdd: Signal<boolean> = computed(() => this.number() % 2 === 1);

  incrementNumber(): void {
    this.number.set(this.number() + 1);
  }
}
