class Employee {
  constructor (
    public _firstName:string,
    public _lastName: string,
    private _salary: number
  ) {
    this._firstName = _firstName
    this._lastName = _lastName
    this._salary = _salary
  }

  set salary(salary: number) {
    if (salary > 0) {
      this._salary = salary
    }
  }

  get salary() {
    return this._salary
  }

  giveRaise(amount: number) {
    const newSalary = this._salary + amount
    this._salary = newSalary
    return newSalary
  }
}


const e1 = new Employee('Josep', 'NC', 5000)
console.log(e1.giveRaise(1000))