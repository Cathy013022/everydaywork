let student1 = {
    name: 'A',
    a: 100,
    b: 100,
    c: 100
}

let student2 = {
    name: 'B',
    a: 10,
    b: 10,
    c: 10
}

// class Student {
//     name;
//     a;
//     b;
//     c;

//     constructor(name, a, b, c) {
//         this.name = name;
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
// }

// student1 = new Student('A', 100, 100, 100)
// student2 = new Student('B', 10, 10, 10)

class Student {
    name;
    a;
    b;
    c;

    constructor(raw) {
        this.name = raw.name;
        this.a = raw.a;
        this.b = raw.b;
        this.c = raw.c;
    }
}

student1 = new Student({ name: 'A', a: 100, b: 100, c: 100 })
student2 = new Student({ name: 'B', a: 10, b: 10, c: 10 })
student3 = new Student({ name: 'C', a: 50, b: 50, c: 50 })


const students = [student1, student2, student3];

const answer = students
    .filter((item) => item.a >= 40)
    .map(item => item.name)
    .join('')

console.log(answer)