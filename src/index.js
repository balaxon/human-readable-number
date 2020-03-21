module.exports = function toReadable (number) {
    const zero_nine = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const ten_nineteen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const twenty_ninety = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let numToString = [];
    if(number === 0){
        return zero_nine[0];
    }
    if(number>=100){
        numToString.push(zero_nine[Math.floor(number / 100)]);
        numToString.push("hundred");
        number = number % 100;
    }
    if(number>=20){
        numToString.push(twenty_ninety[Math.floor(number / 10)-2]);
        number = number % 10;
    }
    if(number>=10){
        numToString.push(ten_nineteen[(number % 10)]);
        number = 0;
    }
    if(number > 0){
        numToString.push(zero_nine[number]);
    }
    return numToString.join(' ');
}
