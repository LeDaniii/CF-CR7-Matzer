import { ToursComponent } from './tours/tours.component';
import { ServicesComponent } from './services/services.component';
import { CartComponent } from './cart/cart.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'tours',
    component: ToursComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
