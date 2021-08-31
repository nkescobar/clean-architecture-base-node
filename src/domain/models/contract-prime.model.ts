import { ContractModel } from './contract.model'
export class ContractPrime extends ContractModel {
  monthlyDiscount (): number {
    return this.contract.monthlyCost * 0.10
  }
}
