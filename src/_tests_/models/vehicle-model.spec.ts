import { VehicleHelper } from '../..//helpers'
import { VechicleModel } from '../../models'

describe('Class VehicleModel', () => {
  it('Deberia analizar los datos de la clase', () => {
    const vehicleMdel = new VechicleModel({
      name: 'Nissan',
      model: 'DXT',
      year: 2020,
      price: 1500,
      inventory: true
    })
    expect(vehicleMdel.getName()).toEqual('Nissan')
    expect(vehicleMdel.getModel()).toEqual('DXT')
    expect(vehicleMdel.getYear()).toBe(2020)
    expect(vehicleMdel.getPrice()).toBe(1500)
    expect(vehicleMdel.getInventory()).toBeTruthy()
  })

  it('Deberia probar el VehicleHelper', () => {
    const vehicleHelper = new VehicleHelper()
    expect(vehicleHelper).toEqual(new VehicleHelper())
  })
})
