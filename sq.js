angular.module('todoApp', [])
    .controller('TodoListController', function () {
        var todoList = this;

        let arr = []
        for (let i = 1; i < 31; i++) {
            const student = new Student(`S-${i}`, i * 2, i * 3)
            arr.push(student);
        }

        todoList.students = arr;

        console.log(todoList)

    });


class Student {
    name;
    scorea;
    scoreb;
    constructor(name, scorea, scoreb) {
        this.name = name;
        this.scorea = scorea;
        this.scoreb = scoreb;
        this.isGood = scorea >= 60 && scoreb >= 60
    }
}