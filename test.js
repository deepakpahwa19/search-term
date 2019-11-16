const topFeatures = {
    name: 1,
    count: 50,
    display: 6

}


const arr = [];
for (let feature in topFeatures) {
    arr.push([feature, topFeatures[feature]]);
}
arr.sort((a, b) => b[1] - a[1]);
console.log(arr.slice(0,3));

// const sorted = Object.keys(topFeatures).sort((a, b) => topFeatures[b] - topFeatures[a]);
// console.log(sorted);
