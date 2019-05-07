export var accounts= [];
var accountId = 0;
var accountStartingBalance = 0.00;


console.log ("id " + accounts.id + "name " + accounts.accountName +  "balance " + accounts.accountBalance);


function createAccount() { 
console.log (document.getElementById("getName").value);
accountId++;
accounts.id = accountId;
accounts.accountName = document.getElementById("getName").value
accounts.accountBalance = accountStartingBalance;
console.log ("id:" + accounts.id + " name: " + accounts.accountName +  " balance: " + accounts.accountBalance);

};

// export const accounts = [
//   {
//     id: 1,
//     accountName: "Checking Account",
//     accountBalance: 820,
//   },
//   {
//     id: 2,
//     accountName: "Savings Account",
//     accountBalance: 500,
//   },
//   {
//     id: 3,
//     accountName: "Beer Fund",
//     accountBalance: 30,
//   },
//   {
//     id: 4,
//     accountName: "New Account",
//     accountBalance: 2056,
//   },
//   {
//     id: 5,
//     accountName: "This Account",
//     accountBalance: 1670,
//   },
//   {
//     id: 6,
//     accountName: "Another Fund",
//     accountBalance: 85,
//   },
// ];
