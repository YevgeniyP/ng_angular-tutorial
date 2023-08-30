import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { router } from './product.router';
import { ProductComponent } from './components';
import { ProductService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(router), HttpClientModule],
  declarations: [ProductComponent],
  providers: [ProductService],
  exports: [],
})
export class ProductModule {}
