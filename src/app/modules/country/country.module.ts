import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryFilterComponent } from './country-filter/country-filter.component';
import { CountryRoutingModule } from './country-routing.module';
import { SharedModule } from './../shared/shared.module';
import { CountryService } from './services/country.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CountryRoutingModule
  ],
  declarations: [
    CountryComponent,
    CountryFilterComponent,
    CountryListComponent,
    CountryDetailsComponent
  ],
  providers: [CountryService]
})
export class CountryModule { }
