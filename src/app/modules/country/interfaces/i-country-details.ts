import { IAdminRegion } from './i-admin-region';
import { IRegion } from './i-region';
export interface ICountryDetails {
  index: number;
  id: string;
  iso2Code: string;
  name: string;
  region: IRegion;
  adminRegion: IAdminRegion;
  capitalCity: string;
  longitude: string;
  latitude: string;
}
