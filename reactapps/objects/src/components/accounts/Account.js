import math from '../math';

class Account {
  constructor (accountId, accName, initBalance) {
    this.id = accountId;
    this.accountName = accName;
    this.accountBalance = initBalance;
  };

  deposit (a, b) {
    return this.balance = math.sumAdd(a, b);
  }

  withdraw (a, b) {
    return this.balance = math.sumSub(a, b);
  }
}

export default Account;
