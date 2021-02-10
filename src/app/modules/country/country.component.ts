import { CountryService } from './services/country.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  pageTitle = 'Country Enquiry';
  result$ = this.countryService.countryDetails$;
  constructor(private countryService: CountryService) { }

  ngOnInit() {}

  onSearch = (filter: string) => {
    this.countryService.countryCode = filter;
  }
}
