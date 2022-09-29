type Uint8 = number;

const nums: Uint8[] = [ 5, 27, 30 ];
let sum = 0;

for (const num of nums) {
    sum += num;
}

console.log(sum.toString());

