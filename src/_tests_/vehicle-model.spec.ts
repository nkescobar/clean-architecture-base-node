import { VechicleModel } from '../models'

describe('Class VehicleModel', () => {
  it('Deberia analizar los datos de la clase', () => {
    const vehicleMdel = new VechicleModel('Nissan', 'DXT', 2020)
    expect(vehicleMdel.getName()).toEqual('Nissan')
    expect(vehicleMdel.getModel()).toEqual('DXT')
    expect(vehicleMdel.getYear()).toBe(2020)
  })
})
