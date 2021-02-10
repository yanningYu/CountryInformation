import { CountryService } from './../services/country.service';
import { CountryFilterValidation } from './country-filter-validation';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.scss']
})
export class CountryFilterComponent
  extends CountryFilterValidation
  implements OnInit {

  pageTitle = 'Country Details';
  countryCode: string;

  apiErrorMessage = this.countryService.apiErrorMessage;

  @Output() clickSearch: EventEmitter<string> = new EventEmitter();
  filterForm: FormGroup;
  constructor(fb: FormBuilder, public countryService: CountryService) {
    super(fb);
    this.filterForm = this.generateValidationForm(this.countryCode);
  }

  ngOnInit() { }

  public search = () => {
    this.countryService.apiErrorMessage = undefined;
    this.clickSearch.emit(this.countryCode);
  }

  public keyDown = (event: KeyboardEvent) => {
    this.countryService.apiErrorMessage = undefined;
  }
}
