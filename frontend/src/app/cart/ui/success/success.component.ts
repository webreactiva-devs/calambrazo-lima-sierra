import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartStateService } from '../../../shared/data-access/cart-state.service';

@Component({
  selector: 'app-success',
  standalone: true,
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [RouterLink]
})
export default class SuccessComponent implements OnInit{
  private cartState = inject(CartStateService);

  ngOnInit(): void {
    if (!sessionStorage.getItem('cartCleared')) {
      this.cartState.clearCart();
      sessionStorage.setItem('cartCleared', 'true');
    }
  }
}
