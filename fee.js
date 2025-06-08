let amountToSend = prompt; //prompts the user to enter an amount
let amount to send = number//amount to send
let transactionFee = 1.5% transactionAmount; //1.5% fee

const totalAmountToBeDebted =transactionAmount+ transactionFee
let totalAmountToBeDebited(transactionFee){
  if (transactionFee === 10){
    transactionFee = 10;
  }else if(transactionFee <10){
    transactionFee = 10
  }
  if (transactionFee === 70){
    transactionAmount = 70; 
  }elsee if (transactionFee >70){
    transactionFee = 70
  }

function estimateTransactionFee(amount) {
    if (transactionAmount < 0) {
        throw new Error("Please try a valid amount");
    }else if (typeof transactionAmount !== 'number') {
        throw new Error("Please try a valid number");
    }
    if (transactionAmount % 1 !== 0) {
        throw new Error("Please try a whole number");
    } else if (TransactionAmount > 10000000) {
        throw new Error("That's a large amount! Please try a smaller amount.");
    }
    else (transactionAmount > 0) 
        return "The estimated transaction fee for " + amount + " is: " + (amount * (transactionFee / 100))
    }

