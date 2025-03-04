import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "../header/header.component";

@Component({
  standalone: true,
  selector: "app-layout",
  imports:[RouterModule, HeaderComponent],
  template: `
    <app-header />,

  <router-outlet />` ,
})
export default class LayoutComponent {

}
