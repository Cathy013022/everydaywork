// console.log('test')




// let ans3 = "";
// let ans2;
// for (i = 1; i < 10; i++) {
//     for (j = 1; j < 10; j++) {
//         let ans = i * j;
//         ans2 = i + "*" + j + "=" + ans;
//         ans3 = ans3 + " " + ans2;
//         ans2 = "";
//     }

// }
// console.log(ans3)


// let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
// arr.forEach(element => {
//     arr.forEach(item => {
//         let ans = element * item
//         // let ans = arr[9] * arr[9] = undefined * undefined
//         console.log(element + "*" + item + "=" + ans);
//     })
// });

// arr.forEach(item => {
//     arr.forEach(item2 => {
//         let ans = arr[item - 1] * arr[item2 - 1];
//         console.log(arr[item - 1] + "*" + arr[item2 - 1] + "=" + ans);
//     })
// })

// let ans = 0;
// arr.forEach(item => {
//     ans = ans + item;

// })
// console.log(ans);


// var VIPTotal = 200;
// var hamburgerPrice = 50;
// var friesPrice = 30;
// var isVIP;

// isVIP = ((2 * hamburgerPrice) + (2 * friesPrice)) >= VIPTotal ? 'true' : 'false';

// console.log("Bob的 VIP 條件為" + isVIP)




// class Friend {
//     name;
//     height;
//     constructor(name, height) {
//         this.name = name;
//         this.height = height;
//     }
//     hello() {
//         console.log(`哈嚕～我是${this.name}，身高${this.height}`);
//     }
// }

// const QQ = new Friend('映萱', '152');
// const BB = new Friend('阿華', '186');
// QQ.hello();
// BB.hello(); 

// let arr=[5,8,1];


class Student {
    name;
    scorea;
    scoreb;
    constructor(name, scorea, scoreb) {
        this.name = name;
        this.scorea = scorea;
        this.scoreb = scoreb;
    }
}
let arr = []
for (let i = 1; i < 31; i++) {
    const student = new Student(`S-${i}`, Math.floor(Math.random() * 100), Math.floor(Math.random() * 100))
    arr.push(student);
}

console.log(arr)