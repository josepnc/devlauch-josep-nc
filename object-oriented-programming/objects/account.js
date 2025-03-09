function Account (id, name, balance = 0) {
  this.id = id
  this.name = name
  this.balance = balance

  this.deposit = (amount) => {
    this.balance += amount
  }

  this.withdraw = (amount) => {
    if (this.balance >= amount) {
    this.balance -= amount
    return amount
    }
  
    return null
  }

  this.tranfer = (toAccount, amount) => {
    const money = this.withdraw(amount)

    if (money) {
      toAccount.deposit(money)
      return toAccount
    }
    
    return null
  }

  return this
}



const account1 = new Account(1, 'Josep', 10000)
account1.deposit(1000)
account1.withdraw(5000)

const account2 = new Account(2, 'Josue')

account1.transfer(account2, 5000)