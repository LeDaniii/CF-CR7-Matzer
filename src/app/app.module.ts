import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ToursComponent } from './tours/tours.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesComponent } from './services/services.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { MatRippleModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { FooterComponent } from './footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    ToursComponent,
    GalleryComponent,
    ServicesComponent,
    FaqComponent,
    ContactUsComponent,
    HomeComponent,
    CartComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatRippleModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [MatDatepickerModule, MatNativeDateModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
