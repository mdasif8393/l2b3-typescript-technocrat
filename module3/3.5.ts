{
  // access modifier
  class BankAccount {
    readonly id: number;
    name: string;
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    addDeposit(amount: number) {
      this._balance += this._balance + amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    text() {
      this._balance;
    }
  }

  const goribManush = new BankAccount(11, "Asif", 1000);
  goribManush.addDeposit(300);
  const myBalance = goribManush.getBalance();
  console.log(myBalance);

  //
}
