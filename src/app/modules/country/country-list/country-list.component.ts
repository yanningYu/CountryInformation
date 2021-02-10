import { CountryDetailsComponent } from './../country-details/country-details.component';
import { ICountryDetails } from './../interfaces/i-country-details';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  @Input() countries: ICountryDetails[];
  constructor() { }

  ngOnInit() {}

}
