// Business Logic for BankAccount ---------

function BankAccount() {
  this.transactions = {};
  this.balance = 0;
  this.currentId = 0;
}

BankAccount.prototype.addTransaction = function(transaction) {
  transaction.id = this.assignId();
  this.transactions[transaction.id] = transaction;
  this.balance += transaction.amount;
};

BankAccount.prototype.assignId = function() {
  this.current += 1;
  return this.currentId;
}; 

// Business Logic for Transactions --------

function Transaction(description, amount, date) {
  this.description = description;
  this.amount = amount;
  this.date = date;
}

Transaction.prototype.lineItem = function() {
  return this.date + " " + this.description + " " + this.amount + " " + this.balance;
};

// User Interface Logic --------------------

