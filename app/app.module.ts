import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/star.component';

import { ProductFilterPipe } from './products/product-filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ProductFilterPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
