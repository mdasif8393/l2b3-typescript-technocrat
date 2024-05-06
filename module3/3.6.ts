{
  // Getter setter
  {
    // getter setter
    class BankAccount {
      readonly id: number;
      name: string;
      protected _balance: number;

      constructor(id: number, name: string, _balance: number) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
      }

      // getter
      get balance() {
        return this._balance;
      }

      set deposit(amount: number) {
        this._balance = this._balance + amount;
      }
    }

    const goribManush = new BankAccount(11, "Asif", 1000);

    const myBalance = goribManush.balance;
    console.log(myBalance);

    goribManush.deposit = 50;

    //
  }

  //
}
