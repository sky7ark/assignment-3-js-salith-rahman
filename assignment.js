//

//task-1
function kilometerTometer(kiloValue){
    if(kiloValue < 0){
        return "Invalid Input"; //if anyone give an invalid input
    }
    var meterValue = kiloValue * 1000; //calculation 1 kilometer = 1000 meter
    return meterValue;
}
var result1 = kilometerTometer(5);
console.log(result1);

//task-2
function budgetCalculator(watches, phones, laptops){
    if(watches < 0 || phones < 0 || laptops < 0){
        return "Invalid Input. Please use meaningful values. Ex: Three non-negative or positive values";
    }
    var watchCost = watches * 50;
    var phoneCost = phones * 100;
    var laptopCost = laptops * 500;
    var totalCost = watchCost + phoneCost + laptopCost;
    return totalCost;
}
var result2 = budgetCalculator(5,2,1);
console.log(result2);

//task-3
function hotelCost(daysSpent){
    if(daysSpent >= 0 && daysSpent <=10){
        var period1 = daysSpent * 100;
        var total = period1;
        return total;
    }
    else if(daysSpent >=11 && daysSpent <= 20){
        var remaining = daysSpent - 10;
        var period2 = remaining * 80;
        var total = 1000 + period2;
        return total;
    }
    else if(daysSpent >=21){
        var remaining = daysSpent - 20;
        var period3 = remaining * 50;
        var total = 1800 + period3;
        return total;
    }
    else{
        return "Invalid Input";
    }
}
var result3 = hotelCost(23);
console.log(result3);

//task-4
var listOfFriends = ["Salith", "Tasin", "Ratul", "Zaayan", "Sami", "Tanisha", "Safa", "Tarin"];
function megaFriend(listOfFriends){
    var compareVariable = 0;
    for(i = 0; i < listOfFriends.length; i++){
        if(listOfFriends[i].length > compareVariable){  //compare the current elememt's length with the compare variable
            var compareVariable = listOfFriends[i].length; // assign this length in Compare variable
            var largestName = listOfFriends[i]; //assign the element in the largestNumber variable
        }
    }
    return largestName;
}
var result4 = megaFriend(listOfFriends);
console.log(result4);

//Thnak you very much! :)