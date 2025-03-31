import { Component, inject } from '@angular/core';
import { ProductStateService } from '../../data-access/products-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { CartStateService } from '../../../shared/data-access/cart-state.service';
import { Product } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ ProductCardComponent ],
  templateUrl: './product-list.component.html',
  providers: [ProductStateService],
})
export default class ProductListComponent {
  productsState = inject(ProductStateService);
  cartState = inject(CartStateService).state;

  changePage(direction: 'next' | 'prev') {
    const currentPage = this.productsState.state.page();
    const nextPage = direction === 'next' ? currentPage + 1 : Math.max(currentPage - 1, 1);
    this.productsState.changePage$.next(nextPage);
  }
  addToCart(product: Product) {
    this.cartState.add({
      product,
      quantity: 1,
    });
  }
}
