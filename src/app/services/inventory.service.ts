import { Injectable } from '@angular/core';
import {Inventory} from "../interfaces/inventory";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {SubTypes} from "../interfaces/subTypes";
import {ItemType} from "../interfaces/itemType";
import {Brand} from "../interfaces/brand";
import {Model} from "../interfaces/model";

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

  getItemsCreatedDateRange(createdStartDate: string, createdEndDate: string): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.productUrl + '/item/createddate/' + createdStartDate + '/' + createdEndDate);
  }

  getItemsUpdatedDateRange(updatedStartDate: string, updatedEndDate: string): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.productUrl + '/item/updateddate/' + updatedStartDate + '/' + updatedEndDate);
  }

  getItemsBothRanges(createdStartDate: string, createdEndDate: string, updatedStartDate: string, updatedEndDate: string): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.productUrl + '/item/bothranges/' + createdStartDate + '/' + createdEndDate + '/' + updatedStartDate + '/' + updatedEndDate);
  }

  deleteItemById(id: number): Observable<Inventory[]> {
    return this.http.delete<Inventory[]>(this.productUrl + '/item/delete/' + id);
  }

  deleteItem(item: any): Observable<any> {
    return this.http.delete(this.productUrl + '/item/delete', item);
  }

  postAddNewItemForm(inventory: Inventory): Observable<any> {
    return this.http.post(this.productUrl + '/item/add', inventory);
  }

  postAddNewSubTypeForm(subType: SubTypes): Observable<any> {
    return this.http.post(this.productUrl + '/item/subtype/add', subType);
  }

  postAddNewBrandForm(brand: Brand): Observable<any> {
    return this.http.post(this.productUrl + '/item/brand/add', brand);
  }

  postAddNewModelForm(model: Model): Observable<any> {
    return this.http.post(this.productUrl + '/item/model/add', model);
  }

  getTypes(): Observable<ItemType[]> {
    return this.http.get<ItemType[]>(this.productUrl + '/item/type/all').pipe(
      catchError(this.handleError)
    );
  }

  getSubTypes(): Observable<SubTypes[]> {
    return this.http.get<SubTypes[]>(this.productUrl + '/item/subtype/all').pipe(
      catchError(this.handleError)
    );
  }

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.productUrl + '/item/brand/all').pipe(
      catchError(this.handleError)
    );
  }

  getModels(): Observable<Model[]> {
    return this.http.get<Model[]>(this.productUrl + '/item/model/all').pipe(
      catchError(this.handleError)
    );
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
