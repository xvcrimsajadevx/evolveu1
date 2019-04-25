import math from './math';

class Account {
  constructor (accName, initBalance) {
    this.accountName = accName;
    this.balance = initBalance;
  };

  deposit (a, b) {
    return this.balance = math.sumAdd(a, b);
  }

  withdraw (a, b) {
    return this.balance = math.sumSub(a, b);
  }
}

export default Account;
