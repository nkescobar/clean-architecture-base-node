import { FoodHelper } from './helpers'
import { FoodModel } from './foo.model'
describe('Class FoodModel', () => {
  it('Deberia analizar los datos de la clase', () => {
    const food = new FoodModel({
      name: 'Arroz',
      description: 'Arroz fino',
      price: 2000
    })
    expect(food.getFood()).toEqual(food)
    expect(food.getName()).toEqual('Arroz')
    expect(food.getDescription()).toEqual('Arroz fino')
    expect(food.getPrice()).toBe(2000)
  })

  it('Deberia probar el foodHelper', () => {
    const foodHelper = new FoodHelper()
    expect(foodHelper).toEqual(new FoodHelper())
  })
})
