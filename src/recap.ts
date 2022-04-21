const myName = 'Edmir';
const myAge = 19;

const suma = (a: number, b: number) => {
  return a + b;
};
suma(1, 6);

class Persona {
  //If we declare the variables (private or public) at the constructor, we should not declare them at the beginning
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `My name is ${this.name}, ${this.age}`;
  }
}

const Edmir = new Persona(myAge, myName);
