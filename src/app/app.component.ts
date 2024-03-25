import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterModule} from "./footer/footer.module";
import {HeaderModule} from "./header/header.module";
import {BodyModule} from "./body/body.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterModule, HeaderModule, BodyModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-conf-demo';
}
