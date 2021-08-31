import { VehicleHelper } from './helpers'
export class VechicleModel {
  constructor (private readonly vehicle: VehicleHelper) {
  }

  getName (): string {
    return this.vehicle.name
  }

  getModel (): string {
    return this.vehicle.model
  }

  getYear (): number {
    return this.vehicle.year
  }

  getPrice (): number {
    return this.vehicle.price
  }

  getInventory (): boolean {
    return this.vehicle.inventory
  }
}
