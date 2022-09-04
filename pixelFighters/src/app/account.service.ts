import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError, Observable, throwError } from 'rxjs';
import { IAccount } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  private accountUrl = 'assets/accounts.json';

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<IAccount[]>{
    return this.http.get<IAccount[]>(this.accountUrl).pipe(
      tap( data=> console.log(data)),
      catchError(this.handleError)
    );
  }

  private handleError(err:HttpErrorResponse){
    let errorMsg = '';
    if(err.error instanceof ErrorEvent){
      errorMsg = `An error occured ${err.error.message}`;
    } else{
      errorMsg = `Server return code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMsg);
    return throwError(()=>{
      new Error(errorMsg);
    })
  }


}
