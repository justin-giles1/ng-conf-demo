import {NgModule} from "@angular/core";
import {BodyComponent} from "./body.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  exports: [BodyComponent],
  declarations: [BodyComponent],
  providers: [BodyComponent]
})
export class BodyModule {}
