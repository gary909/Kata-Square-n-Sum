function squareSum(numbers){
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        var sqrNum = numbers[i]**2;
        total = total + sqrNum;
    }
    return total;
}

console.log(squareSum([1,2])) // returns 5
console.log(squareSum([0, 3, 4, 5])) // returns 50