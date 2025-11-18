function formatValue(
  input: string | number | boolean
): string | number | boolean {
  if (typeof input === "string") {
    const upperCase = input.toUpperCase();
    return upperCase;
  } else if (typeof input === "number") {
    const multiply = input * 10;
    return multiply;
  } else if (typeof input === "boolean") {
    const boolValue = input == true ? false : true;
    return boolValue;
  }
}



function getLength(input: string | number[]): number {
  if (typeof input === "string") {
    let count = 0;
    for (let char of input) {
      count++;
    }
    return count;
  } else if (Array.isArray(input)) {
    let count = 0;
    for (let char of input) {
      count++;
    }
    return count;
  }
}



class Person{
      name: string;
      age: number;

      constructor(name: string, age: number){
          this.name = name;
          this.age = age;
      }
      getDetails(): string{
         return `'Name: ${this.name}, Age: ${this.age}'`;
      }
}




function filterByRating(
  books: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return books.filter((book) => book.rating >= 4.0);
}



function filterActiveUsers(
  users: {
    id: number,
    name: string,
    email: string,
    isActive: boolean
  }[]
): {
  id: number,
  name: string,
  email: string,
  isActive: boolean
}[] {
  return users.filter((user) => user.isActive === true);
}




interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(books: Book): Book {
  console.log(
    `Title: ${books.title}, Author: ${books.author}, Published: ${
      books.publishedYear
    }, Available: ${books.isAvailable ? "Yes" : "No"}`
  );
}




function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
  const newArr = [];
  newArr.push(...arr1);
  arr2.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
}





function calculateTotalPrice(
  products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
): number {
  if (products.length === 0) {
    return 0;
  } else {
    const newPrice = products.reduce((total, product) => {
      const discount = product.discount ? product.discount : 0;
      const discountPrice = product.price - (product.price * discount) / 100;
      return total + discountPrice * product.quantity;
    }, 0);
    return newPrice;
  }
}
