class student {
    name;
    scorea;
    scoreb;
    constructor(name, scorea, scoreb) {
        this.name = name;
        this.scorea = scorea;
        this.scoreb = scoreb;
        this.isgood = scorea >= 60 && scoreb >= 60
    }
    sco() {
        const score2 = sa.filter(item => item.scorea >= 60 && item.scoreb >= 60);

    }
    // get isgood() {
    //     return this.scorea >= 60 && this.scoreb >= 60
    //     // if (this.scorea >= 60 && this.scoreb >= 60) {
    //     //     return true;
    //     // }
    //     // else {
    //     //     return false;
    //     // }
    // }

}
let studenta = new student("123", 90, 80);
let studentb = new student("456", 10, 40);
let studentc = new student("789", 60, 70);

// console.log(studenta);

let arr = [studenta, studentb, studentc];

const sa = arr.filter(item => item.scorea >= 60 && item.scoreb >= 60);
// console.log(sa[0].name);
const sa2 = arr.filter(item => item.isgood)

// console.log(sa2)

