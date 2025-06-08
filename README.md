#code-challenge-1
## Learning goals
- Learn how to implement control flow and logic
- Practice basic arithmetic operations
- Learn how to organize your code using functions
- Learn how to use conditionals
- Handle divide-by-zero and invalid input gracefully.

## Project setup
- Fork and clone the repository into the local environment.
- In the terminal,type this 'code .' command to open Visual Studio Code. 
- In the terminal or VS code, create the following folders to get started:chaiCalculator
        bodaFareCalculator
        mobileMoneyEstimator
- Inside chaiCalculator, create chai.js  or a JavaScript file and an index.html file.
- Inside bodaFareCalculator, create fare.js or a JavaScript file and an index.html file
- Inside mobileMoneyEstimator, create fee.js or a JavaScript file and an index.html file.
- Link all JavaScript files to the HTML files using *script.src* link at the bottom between ./body and ./html in the HTML structure.

### Working on the project
## chaiCalculator

We are given water as 200 ml, milk 50 ml, tea leaves 1 tablespoon, and optional sugar of 2 tablespoons. We then calculate the required amount of each ingredient based on the number of cups.

## Task
1. Write a function named calculateChaiIngredients that enables the user to enter the number of chai cups they want to make.

2. This function takes the numberOfCups as an argument 

3.It also calculates the amount of each ingredient in one cup of chai

4. Finally, the results are printed to the console in a clear and readable format.

This should bring a result as such;
user prompt: How many chai cups would you like?
user: Just 2
console output: The following should make 2 cups of chai;
                    water:400ml
                    milk:100ml
                    tealeaves:2 tablespoons
                    sugar:4

## bodaFareCalculator
The challenge is to create a simple estimate for a boda boda ride given: Base Fare-Ksh 50(constant to every ride)
       A charge of Ksh 15 per kilometer travelled

## Task
1. Create a function called calculateBodaFare that prompts the user to enter the distance of the trip in kilometers.

2. Takes the distanceInKm as an argument.

3.Calculates the estimated fare usingthe formula-totalFare = baseFare + (distanceInKm * chargePerKm)

4. Prints the result to the console in a user-friendly format.

Example:
user prompt: Where are we going na ni kilometer ngapi?
user: Kliometer 15
Console output: The total distance is 15 km. So the total fare is Ksh 275.
        Kupanda pikipiki = 50 
        Mpaka huko =225

Sawa,let's go.

## mobileMoneyEstimator

This challenge creates a simplified estimator for transaction fees.
A simplified fee structure: the basic transaction fee is 1.5% of the transaction amount. However, there's a minimum fee of 10, and if the 1.5% of the amount is less than 10, the fee charged is 1,0 and the maximum transaction fee is 70and if the 1.5% is more than 70, then the fee charged is 70.

## Task
1 . Write a function named estimateTransactionFee that prompts the user to enter the amount of money they wish to send.

2. Takes the amountToSend as an argument.

3. Calculates the transaction fee based on the 1.5% rule, ensuring it adheres to the minimum and maximum fees, respectively.
    (You will need conditional logic, that I,s if-else,if-else, or Math.min() and Math.max()).

4.Calculates the total amount that will be debited(amount to send + transaction fee).

5. Print to the console.

Example:
User prompt: How much money would you like to send?
user:500
console output: Calculated transaction fee is 7.5 but due to minimum of 10, total amount to be debited is 510

Send money securely



