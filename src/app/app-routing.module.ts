import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { BookingComponent } from './booking/booking.component';
import { MostVisitedHotelsComponent } from './general-information-page/most-visited-hotels/most-visited-hotels.component';
import { MostVisitedPlacesComponent } from './general-information-page/most-visited-places/most-visited-places.component';
import { NewsComponent } from './general-information-page/news/news.component';
import { RegistrationComponent } from './general-information-page/sign-in/registration/registration.component';
import { SignInComponent } from './general-information-page/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { HotelsInformationComponent } from './hotels-information/hotels-information.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app-home',
    pathMatch: 'full'
  },
  {
    path: 'app-most-visited-hotels',
    component: MostVisitedHotelsComponent 
  },
  {
    path: 'app-most-visited-places',
    component: MostVisitedPlacesComponent
  },
  {
    path: 'app-news',
    component: NewsComponent
  },
  {
    path: 'app-sign-in',
    component: SignInComponent
  },
  {
    path: 'app-registration',
    component: RegistrationComponent
  },
  {
    path: 'app-home',
    component: HomeComponent
  },
  {
    path: 'app-search',
    component: SearchComponent
  },
  {
    path: 'app-hotels-information',
    component: HotelsInformationComponent
  },
  {
    path: 'app-booking-history',
    component: BookingHistoryComponent
  },
  {
    path: 'app-booking',
    component: BookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
