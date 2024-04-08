angular.module('todoApp', [])
    .controller('TodoListController', function () {
        var todoList = this;


        todoList.todos = [
            new Todo('123', true),
            new Todo('456', true),
            new Todo('789', true),
            new Todo('xxx', true)
        ];

        todoList.todos2 = new TodoList([
            new Todo('123', true),
            new Todo('456', true),
            new Todo('789', true),
            new Todo('xxx', true)
        ])

        console.log(todoList.todos)
        console.log(todoList.todos2)
        console.log(todoList.todos2.remaining())
        console.log(todoList.todos2.xxx)

        todoList.remaining = function () {
            let count = 0;
            todoList.todos.forEach(item => {

                count += item.done ? 0 : 1;

            })
            return count;
        }


        todoList.addTodo = function () {
            todoList.todos.push(new Todo(todoList.todoText));

            todoList.todoText = "";
        };

        todoList.archive = function () {
            let old = todoList.todos;
            todoList.todos = [];
            // if (old.todos.done == false) {
            //     todoList.todos.push(this.todos);
            // }
            // else {
            //     todoList.todos = [];
            // }
        }

    }

    );

class Todo {
    text;
    done;

    constructor(text, done) {
        this.text = text;
        this.done = !!done;
    }

}

class TodoList {
    constructor(raw) {
        this.raw = raw.map(item => new Todo(item))
    }

    remaining() {
        // let count = 0;
        // this.raw.forEach(item => {

        //     count += item.done ? 0 : 1;

        // })
        return this.raw.filter(item => !item.done).length
        // return count;
    }

    get xxx() {
        return this.raw.filter(item => !item.done).length
    }

}

