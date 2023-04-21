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

  //get all items
  getItems(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.productUrl + '/item/all').pipe(
      catchError(this.handleError)
    );
  }

  //get item by ID
  getItem(id: number): Observable<Inventory | undefined> {
    return this.getItems()
    .pipe(
      map((items: Inventory[]) => items.find(p => p.id === id))
    ).pipe(
      catchError(this.handleError)
    );
  }

  //get items in created date range
  getItemsCreatedDateRange(createdStartDate: string, createdEndDate: string): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.productUrl + '/item/createddate/' + createdStartDate + '/' + createdEndDate).pipe(
      catchError(this.handleError)
    );
  }

  //get items in updated date range
  getItemsUpdatedDateRange(updatedStartDate: string, updatedEndDate: string): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.productUrl + '/item/updateddate/' + updatedStartDate + '/' + updatedEndDate).pipe(
      catchError(this.handleError)
    );
  }

  //get items in both date ranges
  getItemsBothRanges(createdStartDate: string, createdEndDate: string, updatedStartDate: string, updatedEndDate: string): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.productUrl + '/item/bothranges/' + createdStartDate + '/' + createdEndDate + '/' + updatedStartDate + '/' + updatedEndDate).pipe(
      catchError(this.handleError)
    );
  }

  //delete item by ID
  deleteItemById(id: number): Observable<Inventory[]> {
    return this.http.delete<Inventory[]>(this.productUrl + '/item/delete/' + id).pipe(
      catchError(this.handleError)
    );
  }

  //delete item with payload
  deleteItem(item: any): Observable<any> {
    return this.http.delete(this.productUrl + '/item/delete', item).pipe(
      catchError(this.handleError)
    );
  }

  //delete type with payload
  deleteType(type: any): Observable<any> {
    return this.http.delete(this.productUrl + '/item/type/delete', type).pipe(
      catchError(this.handleError)
    );
  }

  //delete subType with payload
  deleteSubType(subType: any): Observable<any> {
    return this.http.delete(this.productUrl + '/item/subtype/delete', subType).pipe(
      catchError(this.handleError)
    );
  }

  //delete brand with payload
  deleteBrand(brand: any): Observable<any> {
    return this.http.delete(this.productUrl + '/item/brand/delete', brand).pipe(
      catchError(this.handleError)
    );
  }

  //delete model with payload
  deleteModel(model: any): Observable<any> {
    return this.http.delete(this.productUrl + '/item/model/delete', model).pipe(
      catchError(this.handleError)
    );
  }

  //add new item with payload from reactive form
  postAddNewItemForm(inventory: Inventory): Observable<any> {
    return this.http.post(this.productUrl + '/item/add', inventory).pipe(
      catchError(this.handleError)
    );
  }

  //add new subType with payload from reactive form
  postAddNewSubTypeForm(subType: SubTypes): Observable<any> {
    return this.http.post(this.productUrl + '/item/subtype/add', subType).pipe(
      catchError(this.handleError)
    );
  }

  //add new brand with payload from reactive form
  postAddNewBrandForm(brand: Brand): Observable<any> {
    return this.http.post(this.productUrl + '/item/brand/add', brand).pipe(
      catchError(this.handleError)
    );
  }

  //add new model with payload from reactive form
  postAddNewModelForm(model: Model): Observable<any> {
    return this.http.post(this.productUrl + '/item/model/add', model).pipe(
      catchError(this.handleError)
    );
  }

  //get all types
  getTypes(): Observable<ItemType[]> {
    return this.http.get<ItemType[]>(this.productUrl + '/item/type/all').pipe(
      catchError(this.handleError)
    );
  }

  //get all subTypes
  getSubTypes(): Observable<SubTypes[]> {
    return this.http.get<SubTypes[]>(this.productUrl + '/item/subtype/all').pipe(
      catchError(this.handleError)
    );
  }

  //get all brands
  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.productUrl + '/item/brand/all').pipe(
      catchError(this.handleError)
    );
  }

  //get all models
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
