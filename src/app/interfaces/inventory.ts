export interface Inventory {
  id: number;
  type: string;
  subType: string;
  brand: string;
  model: string;
  year: number;
  length: number;
  weight: number;
  pricePerHour: number;
  pricePerDay: number;
  peopleCapacity: number;
  image: string;
  active: boolean;
  comment: string;
}
