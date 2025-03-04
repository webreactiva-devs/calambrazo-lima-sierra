import { Component, effect, inject, input } from '@angular/core';
import { ProductDetailStateService } from '../../data-access/product-detail-state.service';
import { CurrencyPipe } from '@angular/common';
import { CartStateService } from '../../../shared/data-access/cart-state.service';
import { Product } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  providers: [ProductDetailStateService],
})
export default class ProductDetailComponent {

  productDetailState = inject(ProductDetailStateService).state;

  cartState = inject(CartStateService).state;

  id = input.required<string>();

  constructor() {
    effect(() => {
      this.productDetailState.getbyId(this.id())
    })
  }
  addToCart() {
    this.cartState.add({
      product: this.productDetailState.product()!,
      quantity: 1,
    })
  }
}
