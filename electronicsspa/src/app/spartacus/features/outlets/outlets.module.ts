import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemooutletComponent } from './demooutlet/demooutlet.component';
import { OutletRefModule } from '@spartacus/storefront';
import { UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { ProductviewComponent } from './productview/productview.component';
import { CustomcarouselComponent } from './customcarousel/customcarousel.component';
import { CustomlinkComponent } from './customlink/customlink.component';
import { CustomtopheaderComponent } from './customtopheader/customtopheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [DemooutletComponent, ProductviewComponent, CustomcarouselComponent, CustomlinkComponent, CustomtopheaderComponent],
  imports: [CommonModule, OutletRefModule, UrlModule, RouterModule, BrowserAnimationsModule],
  exports: [DemooutletComponent, ProductviewComponent, CustomcarouselComponent, CustomlinkComponent,CustomtopheaderComponent]
})
export class OutletsModule { }
