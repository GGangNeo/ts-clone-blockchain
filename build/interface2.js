"use strict";
/**
 * Compare abstaraction and inerface
 */
var interface2;
(function (interface2) {
    class abstarctUser {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        getName() {
            return `This is ${this.name}.`;
        }
    }
    class A extends abstarctUser {
        sayHi(name) {
            return `Hi ${this.name}.`;
        }
        getInfo() {
            return `Name : ${this.name} Age : ${this.age}`;
        }
        getAge() {
            return this.age;
        }
    }
    const c = new A('Kim', 20);
    const d = new A('Kim', 30);
    class B {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHi(name) {
            return `Hi ${this.name}.`;
        }
        getInfo() {
            return `Name : ${this.name} Age : ${this.age}`;
        }
    }
    const e = new B('kim3', 30);
    const f = new B('kim3', 30);
    class Kim1 {
        constructor(name) {
            this.name = name;
        }
    }
    const k1 = new Kim1('Kim');
    class Kim2 {
        constructor(name) {
            this.name = name;
        }
    }
    const k2 = new Kim2('Kim');
    /*
     * interface as a type, parameters and return not use new
     */
    function makeUser(user) {
        return {
            name: user.name,
            age: user.age,
            sayHi: user.sayHi,
            getInfo: user.getInfo,
        };
    }
    const aUser = makeUser({
        name: 'k',
        age: 1,
        sayHi: (name) => `Hi ${name}`,
        getInfo: () => 'info',
    });
})(interface2 || (interface2 = {}));
