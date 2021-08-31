
import { ContractModel, ContractPrime } from '.'

describe('Class ContractModel', () => {
  it('deberia crear contract 6 month', () => {
    const contract = new ContractModel({
      id: '1',
      dateInit: new Date(2019),
      month: 12,
      monthlyCost: 500,
      expirationDate: new Date(2019)
    })
    expect(contract.getId()).toBe('1')
    expect(contract.getDateInit()).toStrictEqual(new Date(2019))
    expect(contract.getMonth()).toBe(12)
    expect(contract.getMonthlyCost()).toBe(500)
    expect(contract.getExpirationDate()).toStrictEqual(new Date(2019))
  })

  it('deberia crear contract 24 month mounthyDescount', () => {
    const contractPrime = new ContractPrime({
      id: '1',
      dateInit: new Date(2019),
      month: 12,
      monthlyCost: 500,
      expirationDate: new Date(2019)
    })
    const mounthyDescount = contractPrime.getMonthlyCost() * 0.10
    expect(contractPrime.monthlyDiscount()).toBe(mounthyDescount)
  })
})
