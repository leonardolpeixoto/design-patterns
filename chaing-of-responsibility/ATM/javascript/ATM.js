"use strict"

const MoneyStack = require("./MoneyStack");

class ATM {
  constructor() {
    const stack100 = new MoneyStack(100),
          stack50 = new MoneyStack(50),
          stack20 = new MoneyStack(20),
          stack10 = new MoneyStack(10),
          stack5 = new MoneyStack(5),
          stack2 = new MoneyStack(2);
    
    stack100.setNextStack(stack50);
    stack50.setNextStack(stack20);
    stack20.setNextStack(stack10);
    stack10.setNextStack(stack5);
    stack5.setNextStack(stack2);

    this.moneyStack = stack100;
  }

  withDraw(amount) {
    this.moneyStack.withDraw(amount);
  }
}

module.exports = ATM;