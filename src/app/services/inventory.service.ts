import { Injectable } from '@angular/core';
import {Inventory} from "../interfaces/inventory";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }

  getItems(): Inventory[] {
    return [
      {
        itemId: 1,
        type: "boat",
        subType: "pontoon",
        brand: "SeaDoo",
        model: "Switch",
        year: "2022",
        length: 16,
        weight: 2500,
        pricePerHour: 100,
        pricePerDay: 400,
        peopleCapacity: 7,
        image: "assets/images/sea-doo-switch-16.webp"
      },
      {
        itemId: 2,
        type: "boat",
        subType: "pontoon",
        brand: "SeaDoo",
        model: "Switch",
        year: "2022",
        length: 19,
        weight: 3000,
        pricePerHour: 130,
        pricePerDay: 500,
        peopleCapacity: 9,
        image: "assets/images/sea-doo-switch-16.webp"
      },
      {
        itemId: 3,
        type: "boat",
        subType: "jetboat",
        brand: "Yamaha",
        model: "AR190",
        year: "2022",
        length: 19.5,
        weight: 2441,
        pricePerHour: 130,
        pricePerDay: 500,
        peopleCapacity: 8,
        image: "assets/images/yamaha-ar190.webp"
      },
      {
        itemId: 4,
        type: "boat",
        subType: "wakesurf",
        brand: "Malibu",
        model: "Wakesetter",
        year: "2012",
        length: 22,
        weight: 3500,
        pricePerHour: 150,
        pricePerDay: 550,
        peopleCapacity: 10,
        image: "assets/images/kakesetter.jpg"
      },
      {
        itemId: 5,
        type: "boat",
        subType: "skiboat",
        brand: "Tige",
        model: "Ski",
        year: "2015",
        length: 21,
        weight: 3400,
        pricePerHour: 130,
        pricePerDay: 500,
        peopleCapacity: 8,
        image: "assets/images/tige-rzr-lead.jpg"
      },
      {
        itemId: 6,
        type: "boat",
        subType: "bowrider",
        brand: "Sea Ray",
        model: "240",
        year: "2017",
        length: 24,
        weight: 4100,
        pricePerHour: 140,
        pricePerDay: 520,
        peopleCapacity: 12,
        image: "assets/images/Sea-Ray-250-560px.jpg"
      },
      {
        itemId: 7,
        type: "boat",
        subType: "cuddy cabin",
        brand: "Sea Ray",
        model: "260",
        year: "2014",
        length: 26,
        weight: 5100,
        pricePerHour: 170,
        pricePerDay: 600,
        peopleCapacity: 12,
        image: "assets/images/sea-ray-cuddy-cabin.jpg"
      },
      {
        itemId: 8,
        type: "atv",
        subType: "razor",
        brand: "Polaris",
        model: "RZR",
        year: "2022",
        length: 16,
        weight: 2500,
        pricePerHour: 100,
        pricePerDay: 400,
        peopleCapacity: 7,
        image: "assets/images/polaris-rzr.png"
      },
      {
        itemId: 9,
        type: "atv",
        subType: "4-wheeller",
        brand: "Polaris",
        model: "sportsman",
        year: "2022",
        length: 19,
        weight: 3000,
        pricePerHour: 130,
        pricePerDay: 500,
        peopleCapacity: 9,
        image: "assets/images/polaris-4-wheeller.webp"
      },
      {
        itemId: 10,
        type: "atv",
        subType: "off-road-car",
        brand: "Jeep",
        model: "Wrangler",
        year: "2022",
        length: 19.5,
        weight: 2441,
        pricePerHour: 130,
        pricePerDay: 500,
        peopleCapacity: 8,
        image: "assets/images/lifted-jeep.jpg"
      },
      {
        itemId: 11,
        type: "atv",
        subType: "dirt-bike",
        brand: "Suzuki",
        model: "sport",
        year: "2012",
        length: 22,
        weight: 3500,
        pricePerHour: 150,
        pricePerDay: 550,
        peopleCapacity: 10,
        image: "assets/images/suzuki-dirt-bike.jpg"
      },
      {
        itemId: 12,
        type: "atv",
        subType: "utv",
        brand: "Polaris",
        model: "utv",
        year: "2015",
        length: 21,
        weight: 3400,
        pricePerHour: 130,
        pricePerDay: 500,
        peopleCapacity: 8,
        image: "assets/images/utv.jpg"
      },
      {
        itemId: 13,
        type: "rv",
        subType: "class-b",
        brand: "Dodge",
        model: "240",
        year: "2017",
        length: 24,
        weight: 4100,
        pricePerHour: 140,
        pricePerDay: 520,
        peopleCapacity: 12,
        image: "assets/images/rv-class-b.webp"
      },
      {
        itemId: 14,
        type: "rv",
        subType: "trailer",
        brand: "Venture",
        model: "260",
        year: "2014",
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
