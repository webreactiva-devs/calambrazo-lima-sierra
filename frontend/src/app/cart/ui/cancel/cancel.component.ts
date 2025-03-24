import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-success',
  standalone: true,
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [RouterLink]
})
export default class CancelComponent {}
