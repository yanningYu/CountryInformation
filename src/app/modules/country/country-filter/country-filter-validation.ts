import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { BasicValidation } from './../../../helpers/basic-validation';

export class CountryFilterValidation extends BasicValidation{
  countryCodeInvalidationMessage: string;

  private countryCodeValidationMessages = {
    required: 'Please enter your 2 or 3 letters country code.',
    minlength: 'Country code must be at least 2 letters long.',
    maxlength: 'Country code must be at most 3 letters long.',
    pattern: 'Country code must be  2 or 3 letters.'
  };

  constructor(public fb: FormBuilder) {
    super();
  }

  public generateValidationForm = (countryCode: string): FormGroup => {
    const formGroup = this.fb.group
    ({
      countryCode:  [countryCode, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(3),
        Validators.pattern(this.LetterOnlyPattern)]],
    });

    const countryCodeControl = formGroup.get('countryCode');
    countryCodeControl.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      this.countryCodeInvalidationMessage =
        this.getInvalidationMessage(
          countryCodeControl,
          this.countryCodeValidationMessages);
    });

    return formGroup;
  }
}
