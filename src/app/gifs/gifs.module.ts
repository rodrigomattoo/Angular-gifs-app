import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent //No lo exportamos por que solo va a ser utilizado dentro del modulo
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent// Lo exportamos para que se pueda utilizar fuera del modulo
  ]
})
export class GifsModule { }
