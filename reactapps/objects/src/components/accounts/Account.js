import math from '../math';

class Account {
  constructor (accountId, accName, initBalance) {
    this.id = accountId;
    this.accountName = accName;
    this.accountBalance = initBalance;
  };

  deposit (a, b) {
    return this.accountBalance = math.sumAdd(a, b);
  }

  withdraw (a, b) {
    return this.accountBalance = math.sumSub(a, b);
  }
}

export default Account;
