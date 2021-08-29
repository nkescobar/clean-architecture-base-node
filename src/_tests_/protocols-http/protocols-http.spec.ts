import { InvalidArgument } from '../../errors'
import { UrlLogin } from '../../protocols'

describe('Protocols Http and Querys', () => {
  test('Url login', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login')
    expect(parsedUrl.href).toEqual('http://localhost:3000/login')
    expect(parsedUrl.port).toBe('3000')
  })

  test('Response query', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login?user=user&password=password')
    const expectAuth = {
      user: 'user',
      password: 'password'
    }
    expect(parsedUrl.query).toEqual(expectAuth)
  })

  test('Response query', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/user?user=user&password=password&name=name&lastname=lastname')
    const expectAuth = {
      user: 'user',
      password: 'password',
      name: 'name',
      lastname: 'lastname'
    }
    expect(parsedUrl.query).toEqual(expectAuth)
  })

  test('Invalid url ', () => {
    function expectError (): void {
      UrlLogin.parseUrl('')
    }
    expect(expectError).toThrowError(new InvalidArgument(''))
  })
})
