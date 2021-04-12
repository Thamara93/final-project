import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
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
import { AdminComponent } from './admin/admin.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from "@angular/fire/firestore";


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
    BookingHistoryComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
