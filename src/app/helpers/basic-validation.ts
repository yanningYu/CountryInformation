import { AbstractControl } from '@angular/forms';

export abstract class BasicValidation {

  public get LetterOnlyPattern(): string {
    return '^[a-zA-Z]*$';
  }

  public getInvalidationMessage = (c: AbstractControl, validationMessages: { [key: string]: string }): string => {
    let message: string;
    if ((c.touched || c.dirty) && c.errors) {
      message = Object.keys(c.errors)
        .map(key => validationMessages[key])[0];
    }

    return message;
  }
}
