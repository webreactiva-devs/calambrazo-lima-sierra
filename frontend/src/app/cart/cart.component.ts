import { Component, inject } from '@angular/core';
import { CartItemComponent } from './ui/cart-item/cart-item.component';
import { CartStateService } from '../shared/data-access/cart-state.service';
import { ProductItemCart } from '../shared/interfaces/product.interface';
import { CurrencyPipe } from '@angular/common';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CurrencyPipe],
  templateUrl: './cart.component.html',
  styles: ``
})
export default class CartComponent {
  state = inject(CartStateService).state;

  private readonly _checkoutSvc = inject (CartService)

  onRemove(id: number){
    this.state.remove(id);
  }

  onIncrease(product: ProductItemCart){
    this.state.update({
      product: product.product,
      quantity: product.quantity + 1,
    });
  }

  onDecrease(product: ProductItemCart){
    this.state.update({
      ...product,
      quantity: product.quantity - 1,
    });
  }

  onProcessToPay() {
    const products = this.state.products().map(item => item.product);
    this._checkoutSvc.onProcessToPay(products);
    console.log("pagar");
  }


}
