{
  //
  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`${this.name} says ${this.sound}`);
    }
  }

  const cow = new Animal("Abul", "Cow", "Hambaaaa");
  console.log(cow.makeSound());
  //
}
