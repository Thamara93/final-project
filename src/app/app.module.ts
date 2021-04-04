import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { GeneralInformationPageComponent } from './general-information-page/general-information-page.component';
import { MostVisitedHotelsComponent } from './general-information-page/most-visited-hotels/most-visited-hotels.component';
import { MostVisitedPlacesComponent } from './general-information-page/most-visited-places/most-visited-places.component';
import { NewsComponent } from './general-information-page/news/news.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './general-information-page/sign-in/sign-in.component';
import { RegistrationComponent } from './general-information-page/sign-in/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HotelsInformationComponent } from './hotels-information/hotels-information.component';
import { BookingComponent } from './booking/booking.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneralInformationPageComponent,
    MostVisitedHotelsComponent,
    MostVisitedPlacesComponent,
    NewsComponent,
    FooterComponent,
    SignInComponent,
    RegistrationComponent,
    HomeComponent,
    SearchComponent,
    HotelsInformationComponent,
    BookingComponent,
    BookingHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
