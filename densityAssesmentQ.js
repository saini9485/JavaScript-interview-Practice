questions:-1 //debuging questions 
function fibonacciSeriesPrinter( number ) {
    var fibonacciSeries = function* (number) {
     if(number <= 0)
         return "";
    if (number === 1) {
        return [1];
    } else if(number === 2) {
        return [1,1];
    } else {
        
        var values = fibonacciSeries(number-1).next().value;
        values.push(values[values.length - 1] +
        values[values.length-2]);
        yield values;
    }
 };
 return fibonacciSeries(number).next().value;
 }
 console.log(fibonacciSeriesPrinter(4))
 
 
 
 
 
 
 
 
 
 
 