import { Component } from '@angular/core';
import { OutletPosition } from '@spartacus/storefront';

@Component({
  selector: 'app-customlink',
  templateUrl: './customlink.component.html',
  styleUrl: './customlink.component.scss'
})
export class CustomlinkComponent {

  before: OutletPosition = OutletPosition.BEFORE;

  constructor() {}

}
