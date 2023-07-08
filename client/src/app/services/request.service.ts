import { Injectable } from '@angular/core';
import { Observable, tap, catchError, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  handleError<T>(errorMessage: string, fallBack: T) {
    return (err: any) => {
      this.messageService.error(errorMessage);
      console.error(err);
      return of(fallBack);
    };
  }

  get<T>(url: string, fallBack: T, errorMessage: string): Observable<T> {
    return this.http
      .get<T>(url)
      .pipe(catchError(this.handleError(errorMessage, fallBack)));
  }

  post<T>(
    url: string,
    data: any,
    fallBack: T,
    errorMessage: string
  ): Observable<T> {
    return this.http
      .post<T>(url, data, requestOptions)
      .pipe(catchError(this.handleError(errorMessage, fallBack)));
  }

  put<T>(
    url: string,
    data: any,
    fallBack: T,
    errorMessage: string
  ): Observable<T> {
    return this.http
      .put<T>(url, data, requestOptions)
      .pipe(catchError(this.handleError(errorMessage, fallBack)));
  }

  delete<T>(url: string, fallBack: T, errorMessage: string): Observable<T> {
    return this.http
      .delete<T>(url)
      .pipe(catchError(this.handleError(errorMessage, fallBack)));
  }
}
