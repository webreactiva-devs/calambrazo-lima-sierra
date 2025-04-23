import { HttpClient } from "@angular/common/http"
import { inject, Injectable, isDevMode } from "@angular/core"
import { environment } from "../../../environments/environment"
import type { Product } from "../../shared/interfaces/product.interface"
import { map } from "rxjs"
import { loadStripe } from "@stripe/stripe-js"

@Injectable({
  providedIn: "root",
})
export class CartService {
  private readonly _http = inject(HttpClient)
  // Corregir la URL para producción - quitar /api si no es necesario
  private readonly _url = isDevMode() ? "http://localhost:4242" : "https://calambrazo-backend.vercel.app"

  onProcessToPay(products: Product[]): any {
    console.log("Usando servidor:", this._url)

    return this._http
      .post(`${this._url}/api/checkout`, { items: products })
      .pipe(
        map(async (res: any) => {
          const stripe = await loadStripe(environment.stripeAPIKey)
          stripe?.redirectToCheckout({
            sessionId: res.id,
          })
        }),
      )
      .subscribe({
        error: (err) => console.log(err),
      })
  }
}
