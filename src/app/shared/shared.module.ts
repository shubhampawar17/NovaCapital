import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    CardComponent
  ]
})
export class SharedModule { }
