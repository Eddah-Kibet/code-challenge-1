const bodaFare = 50
let bodaFarePerKm = 15
let distanceInKm;
let totalFare = bodaFare + (distanceInKm * bodaFarePerKm);

function calculateBodaFare(distanceInKm) {
    if (distanceInKm <= 0) {
        return "Please enter a valid distance.";
    } else if (typeof distanceInKm !== 'number') {
        return "Please enter a valid number.";
    }
    if (distanceInKm % 1 !== 0) {
        return "Please enter a whole number for distance.";
    } else if (distanceInKm > 200) {
        return "That's a long distance! Please enter a shorter distance.";
    }else (distanceInKm > 0)
        return "This distance will require " + totalFare + " to travel that distance"

}

function calculateDistance(totalFare) {
    if (totalFare <= 0) {
        return "Please enter a valid fare.";
    } else if (typeof totalFare !== 'number') {
        return "Please enter a valid number.";
    }
    if (totalFare % 1 !== 0) {
        return "Please enter a whole number for fare.";
    } else if (totalFare < bodaFare) {
        return "The fare must be at least the boda fare of " + bodaFare + ".";
    }

    let distance = (totalFare - bodaFare) / bodaFarePerKm;
    return "You can travel " + distance + " km with a fare of " + totalFare + ".";
}
