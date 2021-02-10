import { ICountryDetails } from './../interfaces/i-country-details';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  @Input() countryDetails: ICountryDetails;
  constructor() { }

  ngOnInit() {}

}
