for (let a = 1; a < 20; a++) {
    if (a % 3 == 0 && a % 5 == 0) {
        // console.log('feedbuzz');    
    }
    else {
        //   console.log(a % 3==0 ? 'feed': a);
    }
}
for (var i = 1; i <= 20; i++) {
    var result = "";
    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += "Buzz";
    if (result.length === 0) result = i;
    // console.log(result);
}
for (i = 0; i < 20;)
    console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
