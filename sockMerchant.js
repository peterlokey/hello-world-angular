function sockMerchant(n, ar) {
    var countMap = new Map();
    ar.forEach(function (element) {
        if (countMap.has(element)) {
            var prev = Number(countMap.get(element));
            countMap.set(element, prev + 1);
        }
        else {
            countMap.set(element, 1);
        }
    });

    var pairs = 0;
    countMap.forEach(function (val) {
        console.log(val + ": " + Math.floor(val / 2));
        pairs += Math.floor(Number(val / 2));
    });
    return pairs;
}
sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]);
