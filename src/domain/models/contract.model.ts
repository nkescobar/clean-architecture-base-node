import { IContractor } from '../../interfaces'
export class ContractModel {
  constructor (public contract: IContractor) {
    Object.assign(this, contract)
  }

  getId (): string {
    return this.contract.id
  }

  getDateInit (): Date {
    return this.contract.dateInit
  }

  getMonth (): number {
    return this.contract.month
  }

  getMonthlyCost (): number {
    return this.contract.monthlyCost
  }

  getExpirationDate (): Date {
    return this.contract.expirationDate
  }
}
