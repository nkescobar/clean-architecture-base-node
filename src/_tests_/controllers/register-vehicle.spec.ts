import { MissingFormalParameter } from '../../errors'
import { RegisterVehicle } from '../../controllers'

describe('Controller RegisterVehicle', () => {
  test('is the name does not exist return 400', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        //  name: 'Nissan',
        model: 'Dxt',
        year: 2020
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParameter('name'))
  })

  test('is the model does not exist return 400', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Nissan',
        // model: 'Dxt',
        year: 2020
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParameter('model'))
  })

  test('is the year does not exist return 400', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'Dxt'
        // year: 2020
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParameter('year'))
  })

  test('is the model correct does return 200', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'Dxt',
        year: 2020
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual(null)
  })
})
