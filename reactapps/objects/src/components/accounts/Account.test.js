import Account from './Account';

test('Testing Account class constructor', () => {
  const testAccount = new Account(1, "Test Account", 25);
  expect (testAccount.id).toBe(1);
  expect (testAccount.accountName).toBe("Test Account");
  expect (testAccount.accountBalance).toBe(25);
});


test('Testing deposit() method, which adds money to an account', () => {
  const testAccount = new Account(1, "Test Account", 25);
  expect(testAccount.deposit(testAccount.accountBalance, 20)).toBe(45);
})

test('Testing withdraw() method, which reduces money from an account', () => {
  const testAccount = new Account(1, "Test Account", 50);
  expect(testAccount.withdraw(testAccount.accountBalance, 20)).toBe(30);
})
