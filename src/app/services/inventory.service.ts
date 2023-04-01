import { Injectable } from '@angular/core';
import {Inventory} from "../interfaces/inventory";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  //productUrl = 'api/units/units.json'
  productUrl = 'http://localhost:8080/item/all'

  constructor(private http: HttpClient) { }

  getItems(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.productUrl).pipe(
      //tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getItem(id: number): Observable<Inventory | undefined> {
    return this.getItems()
    .pipe(
      map((items: Inventory[]) => items.find(p => p.id === id))
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

  getItemsOld(): Inventory[] {
    return [
      {
        id: 1,
        type: "boat",
        subType: "pontoon",
        brand: "SeaDoo",
        model: "Switch",
        year: 2022,
        length: 16,
        weight: 2500,
        pricePerHour: 100,
        pricePerDay: 400,
        peopleCapacity: 7,
        image: "assets/images/sea-doo-switch-16.webp"
      },
      {
        id: 2,
        type: "boat",
        subType: "pontoon",
        brand: "SeaDoo",
        model: "Switch",
        year: 2022,
        length: 19,
        weight: 3000,
        pricePerHour: 130,
        pricePerDay: 500,
        peopleCapacity: 9,
        image: "assets/images/sea-doo-switch-16.webp"
      },
      {
        id: 3,
        type: "boat",
        subType: "jetboat",
        brand: "Yamaha",
        model: "AR190",
        year: 2022,
        length: 19.5,
        weight: 2441,
        pricePerHour: 130,
        pricePerDay: 500,
        peopleCapacity: 8,
        image: "assets/images/yamaha-ar190.webp"
      },
      {
        id: 4,
        type: "boat",
        subType: "wakesurf",
        brand: "Malibu",
        model: "Wakesetter",
        year: 2012,
        length: 22,
        weight: 3500,
        pricePerHour: 150,
        pricePerDay: 550,
        peopleCapacity: 10,
        image: "assets/images/kakesetter.jpg"
      },
      {
        id: 5,
        type: "boat",
        subType: "skiboat",
        brand: "Tige",
        model: "Ski",
        year: 2015,
        length: 21,
        weight: 3400,
        pricePerHour: 130,
        pricePerDay: 500,
        peopleCapacity: 8,
        image: "assets/images/tige-rzr-lead.jpg"
      },
      {
        id: 6,
        type: "boat",
        subType: "bowrider",
        brand: "Sea Ray",
        model: "240",
        year: 2017,
        length: 24,
        weight: 4100,
        pricePerHour: 140,
        pricePerDay: 520,
        peopleCapacity: 12,
        image: "assets/images/Sea-Ray-250-560px.jpg"
      },
      {
        id: 7,
        type: "boat",
        subType: "cuddy cabin",
        brand: "Sea Ray",
        model: "260",
        year: 2014,
        length: 26,
        weight: 5100,
        pricePerHour: 170,
        pricePerDay: 600,
        peopleCapacity: 12,
        image: "assets/images/sea-ray-cuddy-cabin.jpg"
      },
      {
        id: 8,
        type: "atv",
        subType: "razor",
        brand: "Polaris",
        model: "RZR",
        year: 2022,
        length: 16,
        weight: 2500,
        pricePerHour: 100,
        pricePerDay: 400,
        peopleCapacity: 7,
        image: "assets/images/polaris-rzr.png"
      },
      {
        id: 9,
        type: "atv",
        subType: "4-wheeller",
        brand: "Polaris",
        model: "sportsman",
        year: 2022,
        length: 19,
        weight: 3000,
        pricePerHour: 130,
        pricePerDay: 500,
        peopleCapacity: 9,
        image: "assets/images/polaris-4-wheeller.webp"
      },
      {
        id: 10,
        type: "atv",
        subType: "off-road-car",
        brand: "Jeep",
        model: "Wrangler",
        year: 2022,
        length: 19.5,
        weight: 2441,
        pricePerHour: 130,
        pricePerDay: 500,
        peopleCapacity: 8,
        image: "assets/images/lifted-jeep.jpg"
      },
      {
        id: 11,
        type: "atv",
        subType: "dirt-bike",
        brand: "Suzuki",
        model: "sport",
        year: 2012,
        length: 22,
        weight: 3500,
        pricePerHour: 150,
        pricePerDay: 550,
        peopleCapacity: 10,
        image: "assets/images/suzuki-dirt-bike.jpg"
      },
      {
        id: 12,
        type: "atv",
        subType: "utv",
        brand: "Polaris",
        model: "utv",
        year: 2015,
        length: 21,
        weight: 3400,
        pricePerHour: 130,
        pricePerDay: 500,
        peopleCapacity: 8,
        image: "assets/images/utv.jpg"
      },
      {
        id: 13,
        type: "rv",
        subType: "class-b",
        brand: "Dodge",
        model: "240",
        year: 2017,
        length: 24,
        weight: 4100,
        pricePerHour: 140,
        pricePerDay: 520,
        peopleCapacity: 12,
        image: "assets/images/rv-class-b.webp"
      },
      {
        id: 14,
        type: "rv",
        subType: "trailer",
        brand: "Venture",
        model: "260",
        year: 2014,
        length: 26,
        weight: 5100,
        pricePerHour: 170,
        pricePerDay: 600,
        peopleCapacity: 12,
        image: "assets/images/rv-trailer.jpg"
      }
    ]
  }

}
