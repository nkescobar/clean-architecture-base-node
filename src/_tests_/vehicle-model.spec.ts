import { VechicleModel } from '../models/vehicle-model.model'

describe('Clasess', () => {
  it('Class VehicleModel', () => {
    const vehicleMdel = new VechicleModel('Nissan', 'DXT', 2020)
    expect(vehicleMdel.getName()).toEqual('Nissan')
    expect(vehicleMdel.getModel()).toEqual('DXT')
    expect(vehicleMdel.getYear()).toBe(2020)
  })
})
