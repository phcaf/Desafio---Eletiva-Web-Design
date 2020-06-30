import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ToastComponent } from './Toast/Toast.component';



@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      CarouselComponent,
      ToastComponent

   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
