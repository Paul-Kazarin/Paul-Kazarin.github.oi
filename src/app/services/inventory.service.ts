import { Injectable } from '@angular/core';
import {Inventory} from "../interfaces/inventory";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  productUrl = 'http://localhost:4200'

  constructor(private http: HttpClient) { }

  getItems(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.productUrl + '/item/all').pipe(
      catchError(this.handleError)
    );
  }

  getItem(id: number): Observable<Inventory | undefined> {
    return this.getItems()
    .pipe(
      map((items: Inventory[]) => items.find(p => p.id === id))
    );
  }

  deleteItem(id: number): Observable<Inventory[]> {
    return this.http.delete<Inventory[]>(this.productUrl + '/item/delete/' + id).pipe(
      catchError(this.handleError)
    );
  }

  postAddNewItemForm(inventory: Inventory): Observable<any> {
    return this.http.post(this.productUrl + '/item/add', inventory);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }

}
