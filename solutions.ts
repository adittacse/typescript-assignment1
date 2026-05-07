// problem - 1

const filterEvenNumbers = (numbers: number[]): number[] => {
    return numbers.filter((num) => num % 2 === 0);
}

filterEvenNumbers([1, 2, 3, 4, 5, 6])



// problem 2

const reverseString = (text: string): string => {
    return text.split("").reverse().join("");
}

reverseString("typescript");



// problem 3

type StringOrNumber = string | number;

const checkType = (data: StringOrNumber): string => {
    if (typeof data === "string") {
        return "String";
    } else if (typeof data === "number") {
        return "Number";
    } else {
        return "Other type";
    }
}

checkType("Hello");
checkType(42);



// problem - 4

const getProperty = <T extends object, K extends keyof T>(obj: T, key: K): any => {
    // if (typeof obj === "object" && obj !== null && key in obj) {
    if (key in obj) {
        return obj[key];
    }
}

const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");



// problem - 5

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus = (book: Book): object => {
    return { ...book, isRead: true };
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);



// problem - 6
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}


const student = new Student("Alice", 20, "A");
student.getDetails();



// problem - 7

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
    return arr1.filter((num) => arr2.includes(num));
}

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);