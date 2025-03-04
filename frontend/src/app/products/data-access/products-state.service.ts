import { inject, Injectable } from "@angular/core";
import { Product } from "../../shared/interfaces/product.interface";
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductsService } from './products.service';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { of, Subject } from "rxjs";

interface State {
  products: Product[];
  status: "loading" | "error" | "success";
  page: number;
}

const LIMIT = 4;

@Injectable()
export class ProductStateService {
  private productsService = inject(ProductsService);

  private initialState: State = {
    products: [],
    status: 'loading',
    page: 1,
  };

  changePage$ = new Subject<number>();

  loadProducts$ = this.productsService.getAllProducts().pipe(
    map((products) => ({
      products,
      status: 'success' as const,
    })),
    catchError(() => {
      return of({
        products: [],
        status: 'error' as const,
      });
    })
  );

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.loadProducts$,
      this.changePage$.pipe(
        map((page) => ({
          page,
          status: 'success' as const,
        }))
      ),
    ],
    selectors: (state) => ({
      totalPages: () => Math.ceil(state().products.length / LIMIT),
      paginatedProducts: () => {
        const { page, products } = state();
        const startIndex = (page - 1) * LIMIT;
        return products.slice(startIndex, startIndex + LIMIT);
      },
    }),

  });
}
