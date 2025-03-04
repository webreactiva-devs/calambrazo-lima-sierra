import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Product, ProductItemCart } from '../../shared/interfaces/product.interface';
import { map } from 'rxjs';
import { loadStripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly _http = inject(HttpClient)
  private readonly _url = environment.serverURL

  onProcessToPay(products: Product[]): any{
    return this._http.post(`${this._url}/checkout`, {items: products})
    .pipe(
      map(async (res: any) => {
        const stripe = await loadStripe(environment.stripeAPIKey)
        stripe?.redirectToCheckout({
          sessionId: res.id
        })
      })
    ).subscribe({
      error: (err) => console.log(err)
    })
  }
}
