import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) }, { path: 'about', loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) }, { path: 'services', loadChildren: () => import('./features/services/services.module').then(m => m.ServicesModule) }, { path: 'portfolio', loadChildren: () => import('./features/portfolio/portfolio.module').then(m => m.PortfolioModule) }, { path: 'testimonials', loadChildren: () => import('./features/testimonials/testimonials.module').then(m => m.TestimonialsModule) }, { path: 'contact', loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
