import { HttpRequestInterface, HttpResponseInterface } from '../../interfaces'
export class RegisterVehicle {
  handle (httpRequest: HttpRequestInterface): HttpResponseInterface {
    const requiredProperties = ['name', 'model', 'year']
    for (const props of requiredProperties) {
      if (!httpRequest.body[props]) {
        return {
          statusCode: 400,
          body: new Error(`error in the ${props}`)
        }
      }
    }

    return {
      statusCode: 200,
      body: null
    }
  }
}
