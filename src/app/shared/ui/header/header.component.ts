import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartStateService } from '../../data-access/cart-state.service';
import { AuthStateService } from '../../data-access/auth.state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  cartState = inject(CartStateService).state;

  private _authState = inject(AuthStateService);
  private _router = inject(Router);

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  async logOut(){
    await this._authState.logOut();
    this._router.navigateByUrl('/auth/sign-in');
  }

}
