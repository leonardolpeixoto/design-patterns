"use strict"

class MoneyStack {
  constructor(billSize) {
    this.billSize = billSize;
    this.next = null;
  }

  withDraw(amount) {
    const numOfBills = Math.floor(amount/this.billSize);

    if (numOfBills > 0) {
      this._ejectMoney(numOfBills);
      amount = amount - (this.billSize * numOfBills);
    }

    amount > 0 && this.next && this.next.withDraw(amount);
  }

  setNextStack(stack) {
    this.next = stack;
  }

  _ejectMoney(numOfBills) {
    console.log(`R$ ${numOfBills} ${this.billSize} bill(s) has/have been spit out`)
  }
}

module.exports = MoneyStack;