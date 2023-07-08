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
      errorMessage += '<br />';
      if (err?.status) {
        errorMessage += `Status: ${err.status}<br />`;
      }

      if (err?.error?.message) {
        errorMessage += `Message: ${err.error.message}<br />`;
      }

      if (err?.status === 0) {
        errorMessage += `Message: Could not connect to the server<br />`;
      }

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
    return this.http.post<T>(url, data, requestOptions).pipe(
      tap((_) => {
        this.messageService.success('Successfully Created');
      }),
      catchError(this.handleError(errorMessage, fallBack))
    );
  }

  put<T>(
    url: string,
    data: any,
    fallBack: T,
    errorMessage: string
  ): Observable<T> {
    return this.http.put<T>(url, data, requestOptions).pipe(
      tap((_) => {
        this.messageService.success('Successfully Updated');
      }),
      catchError(this.handleError(errorMessage, fallBack))
    );
  }

  delete<T>(url: string, fallBack: T, errorMessage: string): Observable<T> {
    return this.http.delete<T>(url).pipe(
      tap((_) => {
        this.messageService.success('Successfully Deleted');
      }),
      catchError(this.handleError(errorMessage, fallBack))
    );
  }
}
