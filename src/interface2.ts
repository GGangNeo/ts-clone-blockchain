/**
 * Compare abstaraction and inerface
 */
namespace interface2 {
  abstract class abstarctUser {
    constructor(protected name: string, protected age: number) {}
    abstract sayHi(name: string): string;
    abstract getInfo(): string;
    getName() {
      return `This is ${this.name}.`;
    }
  }

  class A extends abstarctUser {
    sayHi(name: string) {
      return `Hi ${this.name}.`;
    }
    getInfo() {
      return `Name : ${this.name} Age : ${this.age}`;
    }
    getAge() {
      return this.age;
    }
  }

  const c: abstarctUser = new A('Kim', 20);
  const d = new A('Kim', 30);

  interface InterfaceUser {
    name: string;
    age: number;
    sayHi(name: string): string;
    getInfo(): string;
  }

  class B implements InterfaceUser {
    constructor(public name: string, public age: number) {}
    sayHi(name: string) {
      return `Hi ${this.name}.`;
    }
    getInfo() {
      return `Name : ${this.name} Age : ${this.age}`;
    }
  }

  const e: InterfaceUser = new B('kim3', 30);
  const f = new B('kim3', 30);

  /**
   *   type can implements as interface
   */
  type G = {
    name: string;
  };

  interface GG {
    name: string;
  }

  class Kim1 implements G {
    constructor(public name: string) {}
  }

  const k1 = new Kim1('Kim');

  class Kim2 implements GG {
    constructor(public name: string) {}
  }

  const k2 = new Kim2('Kim');

  /*
   * interface as a type, parameters and return not use new
   */

  function makeUser(user: InterfaceUser): InterfaceUser {
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
}
