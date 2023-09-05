import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>La meilleur promo = {{ bestPromo }}</h1>`,
  styles: []
})
export class AppComponent {
  bestPromo: string = 'PE6'
}
