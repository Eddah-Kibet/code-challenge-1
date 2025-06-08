let transactionAmount = 2000000
let transactionFee = 1.5% transactionAmount; //1.5% fee
let minimumTransactionFee = 10
let maximumTransactionFee = 70

if (transactionFee <=10){
  transactionAmount = 10;
}

if (transactionFee >= 70){
    transactionAmount = 70; 
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

    
let fee = transactionAmount * (transactionFee / 100);
let totalAmountToBeDebted = transactionAmount + transactionFee
    if (totalAmountToBeDebted >= 0){
    return "The total amount to be debited is: " + totalAmountToBeDebted;
    }

