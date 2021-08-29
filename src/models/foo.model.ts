import { FoodHelper } from '../helpers'
export class FoodModel {
  constructor (private readonly foodHelper: FoodHelper) {
  }

  getName (): string {
    return this.foodHelper.name
  }

  getDescription (): string {
    return this.foodHelper.description
  }

  getPrice (): number {
    return this.foodHelper.price
  }

  getFood (): any {
    return Object.assign(this, this.foodHelper)
  }
}
