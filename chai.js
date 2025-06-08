let water = 200 // in ml
let milk = 50 // in ml
let teaLeaves = 1 // in tsp
let sugar = 2 // in tsp
let numberOfChaiCups;

function calculateChaiIngredients(numberOfChaiCups) {
    if (numberOfChaiCups <= 0) {
        return "Please enter a valid number of cups.";
    }else if (typeof numberOfChaiCups !== 'number') {
        return "Please enter a valid number.";
    }
    if (numberOfChaiCups % 1 !== 0) {
        return "Please enter a whole number of cups.";
    }
    else(numberOfChaiCups > 1) 
        if (numberOfChaiCups > 1000) {
            return "That's a lot of chai! Please enter a smaller number.";}
        return "total ingredients for " + numberOfChaiCups + " cups of chai: " +
        "water: " + (water * numberOfChaiCups) + " ml, " +
        "milk: " + (milk * numberOfChaiCups) + " ml, " +
        "teaLeaves: " + (teaLeaves * numberOfChaiCups) + " tsp, " +
        "sugar: " + (sugar * numberOfChaiCups) + " tsp";

}


function calculateChaiCups(ingredients) {
    if (!ingredients || typeof ingredients !== 'object') {
        return "Please provide a valid ingredients object.";
    }
    if (!('water' in ingredients) || !('milk' in ingredients) || !('teaLeaves' in ingredients) || !('sugar' in ingredients)) {
        return "Please provide all required ingredients: water, milk, teaLeaves, and sugar.";
    }   
    if (ingredients.water < 0 || ingredients.milk < 0 || ingredients.teaLeaves < 0 || ingredients.sugar < 0) {
        return "Please enter valid ingredient amounts.";
    }
    if (typeof ingredients.water !== 'number' || typeof ingredients.milk !== 'number' || typeof ingredients.teaLeaves !== 'number' || typeof ingredients.sugar !== 'number') {
        return "Please enter valid numbers for ingredient amounts.";
    }if (ingredients.water === 0 || ingredients.milk === 0 || ingredients.teaLeaves === 0 || ingredients.sugar === 0) {
        return "You cannot make chai with zero amounts of any ingredient.";
    }
    else {
        let cups = Math.min(
            Math.floor(ingredients.water / water),
            Math.floor(ingredients.milk / milk),
            Math.floor(ingredients.teaLeaves / teaLeaves),
            Math.floor(ingredients.sugar / sugar)
        );
        return "You can make " + cups + " cups of chai with the given ingredients.";
    }
}
