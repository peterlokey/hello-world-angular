function sockMerchant(n, ar) {
    var countMap = new Map();
    ar.array.forEach(element => {
        if (countMap.has(element)){
            var prev = Number(countMap.get(element));
            countMap.set(element, prev+1);
            console.log("if triggered");
        } else {
            countMap.set(element, 1);
            console.log("Else triggered");
        }
    });
    
        
    console.log(countMap.get("1"));
    console.log(countMap.get("2"));
    console.log(countMap.get("3"));
    var pairs = 0;
    countMap.forEach(function(val){
        console.log(val + ": " + Math.floor(val/2));
        pairs += Number(val/2);
    })
    return pairs;
}

sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]);