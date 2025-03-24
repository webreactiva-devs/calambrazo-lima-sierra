import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [RouterLink]
})
export default class SuccessComponent {}
