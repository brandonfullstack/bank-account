// Business Logic for BankAccount ---------

function BankAccount() {
  this.transactions = {};
  this.balance = {};
  this.currentId = 0;
}

BankAccount.prototype.addTransaction = function(transaction) {
  transaction.id = this.assignId();
  this.transactions[transaction.id] = transaction;
};

BankAccount.prototype.assignId = function() {
  this.current += 1;
  return this.currentId;
};

BankAccount.prototype.calculateBalance = function() {
  this.currentBalance = this.amount;
  return this.currentBalance;
} 

// Business Logic for Transactions --------

intialBalance = document.querySelector("input#intial-balance").value

function Transaction(description, amount, date) {
  this.description = description;
  this.amount = amount;
  this.date = date; 
}



Transaction.prototype.lineItem = function() {
  return this.date + " " + this.description + " " + this.amount + " " + this.balance;
};

