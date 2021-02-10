import { IReturnedResult } from './../interfaces/i-returned-result';
import { environment } from './../../../../environments/environment';
import { ICountryDetails } from './../interfaces/i-country-details';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, filter, switchMap, shareReplay } from 'rxjs/operators';

@Injectable()
export class CountryService {

  private _countryCode  = '';
  public get countryCode(): string {
    return this._countryCode;
  }
  public set countryCode(countryCode: string) {
    this._countryCode = countryCode;
    this.filterSubject.next(this._countryCode);
  }

  public apiErrorMessage: string;
  constructor(private http: HttpClient) { }

  private filterSubject = new BehaviorSubject<string>('');
  private filter$ = this.filterSubject as Observable<string>;


  countryDetails$ = this.filter$.pipe(
    filter(countryCode => Boolean(countryCode)),
    switchMap(countryCode => this.http.get<IReturnedResult<ICountryDetails[]>>(`http://api.worldbank.org/v2/country/${countryCode}?format=json`).pipe(
      tap(data => {
        if (!environment.production) {
          console.log('Get Country Details', JSON.stringify(data));
        }
      }),
      map((data: any) => {
        const result: IReturnedResult<ICountryDetails[]> = {} as IReturnedResult<ICountryDetails[]>;
        if (!data[0].message) {
          const tempValue = data[1] as any[];
          const countryDetailsArray: ICountryDetails[] = [];

          tempValue.forEach((countryDetails, index) => {
            countryDetailsArray.push(
              {
                index,
                ...countryDetails,
                adminRegion: countryDetails.adminregion
              } as ICountryDetails
            );
          });

          result.result = countryDetailsArray;
          return result;
        }

        result.isInvalid = true;
        result.error = data[0].message[0];
        this.apiErrorMessage = result.error.value;
        return result;
      })
    )), shareReplay());
}
