import { IErrorMessage } from './i-error-message';
export interface IReturnedResult<T> {
  isInvalid: boolean;
  result: T;
  error: IErrorMessage;
}
