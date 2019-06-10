const filteredAccounts = (accounts, searchfield) => (accounts.filter(accounts => {
  return accounts.accountName.toLowerCase().includes(searchfield.toLowerCase());
}))

const sortAccounts = (sorter, accounts) => {
  let sortedAccounts = []

  if (sorter === "low") {
    sortedAccounts = accounts.sort(function(a, b){return a.accountBalance - b.accountBalance});
  }
  else if (sorter === "high") {
    sortedAccounts = accounts.sort(function(a, b){return b.accountBalance - a.accountBalance});
  }
  else if (sorter === "alpha") {
    sortedAccounts = accounts.sort(function(a, b){
      var x = a.accountName.toLowerCase();
      var y = b.accountName.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;})
  }
  else {
    sortedAccounts = accounts;
  }
  return sortedAccounts;
}

export default { sortAccounts, filteredAccounts };
