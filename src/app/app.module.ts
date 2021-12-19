import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { PricingCardComponent } from './pricing-card/pricing-card.component';

const routes: Routes = [
  {path: '' , redirectTo:'home', pathMatch:'full' },
  { path: 'pricing', component: PricingComponent },
 { path: 'features', component: FeaturesComponent },
 { path: 'home', component: HomeComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PricingComponent,
    FeaturesComponent,
    HomeComponent,
    PricingCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
