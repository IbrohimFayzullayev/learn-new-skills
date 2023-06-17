// Index Signatures

// class SeatAssignment {
//   // A1, A2, ...
//   // Mosh, John, ...
//   // Index signature property
//   [seatNumber: string]: string;
// }

// let seats = new SeatAssignment();
// seats.A1 = "Mosh";
// seats.A2 = "Hamedani";

// Static Members

// class Ride {
//   private static _activeRides: number = 0;

//   start() {
//     Ride._activeRides++;
//   }
//   stop() {
//     Ride._activeRides--;
//   }

//   static get activeRides() {
//     return Ride._activeRides;
//   }
// }

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();

// console.log(Ride.activeRides);

// 11. Inheritance

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
//   walk() {
//     console.log("Walking !");
//   }
// }

// class Student extends Person {
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }

//   takeTest() {
//     console.log("Taking a test.");
//   }
// }

// let student = new Student(1, "John", "john@gmail.com");
// student.fullName;

// 12.Method Overriding

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
//   walk() {
//     console.log("Walking !");
//   }
// }

// class Student extends Person {
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }

//   takeTest() {
//     console.log("Taking a test.");
//   }
// }

// let student = new Student(1, "John", "john@gmail.com");

// class Teacher extends Person {
//   override get fullName() {
//     return "Professor " + super.fullName;
//   }
// }

// class Principal extends Person {
//   override get fullName() {
//     return "Principal " + super.fullName;
//   }
// }

// let teacher = new Teacher("John", "Smith");

// // 13. Polyporphism
// //  Poly - Many, Morph - Form

// printNames([
//   new Student(1, "John", "Smith"),
//   new Teacher("Mosh", "Hamedani"),
//   new Principal("Mary", "Smith"),
// ]);

// function printNames(people: Person[]) {
//   for (let person of people) console.log(person.fullName);
// }

// 14. Private and Protected Members

// 15. Abstract Classes and Methods

// abstract class Shape {
//   constructor(public color: string) {}

//   abstract render(): void;
// }

// class Circle extends Shape {
//   constructor(public radius: number, color: string) {
//     super(color);
//   }

//   override render(): void {
//     console.log("Rendering a circle");
//   }
// }

// let shape = new Shape("red");
// shape.render();

// 16.Interfaces

// abstract class Calendar {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalendar extends Calendar {
  sync(): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
