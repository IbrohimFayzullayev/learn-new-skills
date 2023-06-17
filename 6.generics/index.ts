// Generic classes
// class KeyValuePair<K> {
//   constructor(public key: K, public value: string) {}
// }

// let pair = new KeyValuePair<number>(1, "a");

// let pair2 = new KeyValuePair("2", "b");

// Generic Functions
// class ArrayUtils {
//   static wrapInArray<T>(value: T) {
//     return [value];
//   }
// }

// let numbers = ArrayUtils.wrapInArray(``);

// Generic Interfaces

// interface Result<T> {
//   data: T | null;
//   error: string | null;
// }

// function fetch<T>(url: string): Result<T> {
//   return { data: null, error: null };
// }

// interface User {
//   username: string;
// }

// interface Product {
//   title: string;
// }

// let result = fetch<Product>("url");
// result.data;

// Generic Constraints

// class Person {
//   constructor(public name: string) {}
// }

// class Costumer extends Person {}

// function echo<T extends Person>(value: T): T {
//   return value;
// }

// echo(new Costumer(""));

// Extending Generic Classes

interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // T is Product
  // keyof T => 'name' | 'price'
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Store<Product>();
store.add({ name: "a", price: 1 });
store.find("name", "a");
store.find("price", 1);
// store.find("noExitingProperty", 1);

// Pass on the generic type parametr
// class CompressibleStore<T> extends Store<T> {
//   compress() {}
// }

// Restrict the generic type parametr

// class SearchableStore<T extends { name: string }> extends Store<T> {
//   find(name: string): T | undefined {
//     return this._objects.find((obj) => obj.name === name);
//   }
// }

// Fix the generic type parametr
// class ProductStore extends Store<Product> {
//   filterByCategory(category: string): Product[] {
//     return [];
//   }
// }

// let store = new CompressibleStore<Product>();
// store.compress();
