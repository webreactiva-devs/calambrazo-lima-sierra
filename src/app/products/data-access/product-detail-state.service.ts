import { inject, Injectable } from "@angular/core";
import { Product } from "../../shared/interfaces/product.interface";
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductsService } from './products.service';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Observable, of, Subject } from "rxjs";

interface State {
  product: Product | null;
  status: "loading" | "error" | "success";
}

@Injectable()
export class ProductDetailStateService {
  private productsService = inject(ProductsService);

  private initialState: State = {
    product: null,
    status: 'loading' as const,
  };

  state = signalSlice({
    initialState: this.initialState,
    actionSources:{
      getbyId: (_state, $: Observable<string>) =>
        $.pipe(
          switchMap((id) => this.productsService.getProductById(id)),
          map((data)=> ({ product: data, status: 'success' as const }))
        )
    }
  });
}
