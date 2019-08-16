import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaitapInteractionComponent } from './baitap-interaction.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ProductItemComponent } from './product-item/product-item.component';



@NgModule({
  declarations: [BaitapInteractionComponent, ListItemComponent, ProductItemComponent],
  exports: [BaitapInteractionComponent, ListItemComponent, ProductItemComponent],
  imports: [
    CommonModule
  ]
})
export class BaitapInteractionModule { }
