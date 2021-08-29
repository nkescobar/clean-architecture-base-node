import { FoodModel } from '../models'
describe('Class FoodModel', () => {
  it('Deberia analizar los datos de la clase', () => {
    const food = new FoodModel('Arroz', 'Arroz fino', 2000)
    expect(food.getName()).toEqual('Arroz')
    expect(food.getDescription()).toEqual('Arroz fino')
    expect(food.getPrice()).toBe(2000)
  })
})
