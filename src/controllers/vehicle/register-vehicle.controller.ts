import { HttpRequestInterface, HttpResponseInterface } from '../../interfaces'
export class RegisterVehicle {
  handle (httpRequest: HttpRequestInterface): HttpResponseInterface {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('error in the name')
      }
    }
    if (!httpRequest.body.model) {
      return {
        statusCode: 400,
        body: new Error('error in the model')
      }
    }

    return {
      statusCode: 200,
      body: null
    }
  }
}
