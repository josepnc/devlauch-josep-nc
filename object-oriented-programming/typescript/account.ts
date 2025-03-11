interface Account {
  id: number,
  name: string,
  balance: number,
  deposit: (amount: number) => void,
  withdraw: (amount: number) => number | null,
  transfer: (toAccount: Account, amount: number) => Account | null
}

const Account = function (id: number, name: string, balance: number = 0): Account {
  this.id = id
  this.name = name
  this.balance = balance

  this.deposit = (amount: number) => {
    this.balance += amount
  }

  this.withdraw = (amount: number) => {
    if (this.balance >= amount) {
    this.balance -= amount
    return amount
    }
  
    return null
  }

  this.tranfer = (toAccount: Account, amount: number) => {
    const money = this.withdraw(amount)

    if (money) {
      toAccount.deposit(money)
      return toAccount
    }
    
    return null
  }

  return this
}



const account1: Account = new (Account as any) (1, 'Josep', 10000)
account1.deposit(1000)
account1.withdraw(5000)

const account2: Account = new (Account as any) (2, 'Josue')

account1.transfer(account2, 5000)