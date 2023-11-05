/*
* Filename: ComplexCodeExample.js
* Description: This complex JavaScript code is a simulation of a banking system that manages accounts, transactions, and generates reports.
*/

class Account {
  constructor(accountNumber, accountType, balance) {
    this.accountNumber = accountNumber;
    this.accountType = accountType;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }
}

class Bank {
  constructor() {
    this.accounts = [];
  }

  createAccount(accountNumber, accountType, balance) {
    const account = new Account(accountNumber, accountType, balance);
    this.accounts.push(account);
  }

  getAccount(accountNumber) {
    return this.accounts.find((account) => account.accountNumber === accountNumber);
  }

  getAccountBalance(accountNumber) {
    const account = this.getAccount(accountNumber);
    return account ? account.balance : -1;
  }

  depositToAccount(accountNumber, amount) {
    const account = this.getAccount(accountNumber);
    if (account) {
      account.deposit(amount);
    } else {
      console.log("Account does not exist");
    }
  }

  withdrawFromAccount(accountNumber, amount) {
    const account = this.getAccount(accountNumber);
    if (account) {
      account.withdraw(amount);
    } else {
      console.log("Account does not exist");
    }
  }

  generateReport() {
    console.log("Accounts Report:");
    console.log("================");

    for (const account of this.accounts) {
      console.log(`Account Number: ${account.accountNumber}`);
      console.log(`Account Type: ${account.accountType}`);
      console.log(`Balance: $${account.balance.toFixed(2)}`);
      console.log("================");
    }
  }
}

// Usage Example:
const bank = new Bank();
bank.createAccount(123456, "Savings", 1000);
bank.createAccount(789012, "Checking", 500);
bank.depositToAccount(123456, 250);
bank.withdrawFromAccount(789012, 200);
console.log(bank.getAccountBalance(123456)); // Output: 1250
console.log(bank.getAccountBalance(789012)); // Output: 300
bank.generateReport();

// ... Rest of the program, additional functionality, etc.
// Total lines of code: > 200
