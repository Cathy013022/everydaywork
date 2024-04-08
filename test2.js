// console.log('test')




let ans3 = "";
let ans2;
for (i = 1; i < 10; i++) {
    for (j = 1; j < 10; j++) {
        let ans = i * j;
        ans2 = i + "*" + j + "=" + ans;
        ans3 = ans3 + " " + ans2;
        ans2 = "";
    }

}
console.log(ans3)


let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
// arr.forEach(element => {
//     arr.forEach(item => {
//         let ans = element * item
//         // let ans = arr[9] * arr[9] = undefined * undefined
//         console.log(element + "*" + item + "=" + ans);
//     })
// });



