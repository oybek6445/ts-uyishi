import { performance } from 'perf_hooks';

interface users {
    name: string;
    age: number;
    isStudent: boolean;
}

class Users implements users {
    name: string;
    age: number;
    isStudent: boolean;

    constructor(name: string, age: number, isStudent: boolean) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
}


function twoNumbers(a:number,b:number):number{
    return a+b
}
console.log(twoNumbers(5,5))

function matn():void{
    console.log('Matn')
}
matn()

interface userId{
    readonly id: number;
    name:string;
    age:number;
}

class UserId implements userId {
    id: number;
    name: string;
    age: number;
    constructor(id: number, name:string,age:number) {
        this.id = id
        this.name = name
        this.age = age
    }
}

type ranglar = `qizil`|`yashil`|`kok`

const colors: ranglar = 'qizil'

const neverFunction = (): never => {
    throw new Error('hato');
}

type unknownType = unknown

const a: unknownType = 'a'

console.log(typeof a)

class Car {
    public name: string;
    protected age: number;
    private key: string;

    constructor(name:string, age: number, key: string) {
        this.name = name,
        this.age = age,
        this.key = key
    }

}

interface draw{
    draw(): string
}

class Circle implements draw {
    private drawText: string;

    constructor(drawText: string) {
        this.drawText = drawText;
    }

    draw(): string {
        return this.drawText;
    }
}

class Hayvon{
    name:string;
    age:number;
    constructor(name:string,age:number) {
        this.name = name
        this.age = age
    }
}

class Maymun extends Hayvon{
    constructor(name:string,age:number) {
        super(name,age)
    }
    sayHi(){
        console.log(`nigga`)
    }
}

function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Salom"));  
console.log(identity<number>(42));    

function filterEvenNumbers<T extends number>(arr: T[]): T[] {
    return arr.filter(num => num % 2 === 0);
}


console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

interface User {
    name: string;
    email: string;
    age: number;
}

const partialUser: Partial<User> = {
    email: "user@example.com"
};

interface User {
    name: string;
    email: string;
    age: number;
}

type UserContactInfo = Pick<User, "name" | "email">;

const contactInfo: UserContactInfo = {
    name: "Ali",
    email: "ali@example.com"
};

namespace MathUtils {
    export function add(a: number, b: number): number {
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }
}

console.log(MathUtils.add(5, 3));     
console.log(MathUtils.subtract(5, 3)); 

const readonlyNumbers: readonly number[] = [1, 2, 3];

// readonlyNumbers.push(4); // Xatolik beradi
// readonlyNumbers[0] = 10; // Xatolik beradi

function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey} with`, args);
        return originalMethod.apply(this, args);
    };
}

class MyService {
    @Log
    greet(name: string) {
        return `Hello, ${name}`;
    }
}


const service = new MyService();
service.greet("Ali");

function processValue(value: string | number | Date) {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * value;
    } else if (value instanceof Date) {
        return value.toISOString();
    }
}

console.log(processValue("salom"));    
console.log(processValue(5));         
console.log(processValue(new Date())); 

interface ApiResponse<T> {
    data: T;
    success: boolean;
}

const userResponse: ApiResponse<{ name: string; email: string }> = {
    data: {
        name: "Ali",
        email: "ali@example.com"
    },
    success: true
};

function Timer(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();
        console.log(`${propertyKey} took ${(end - start).toFixed(2)} ms`);
        return result;
    };
}

class MathService {
    @Timer
    calculate(): number {
        let sum = 0;
        for (let i = 0; i < 1e6; i++) {
            sum += i;
        }
        return sum;
    }
}

const ms = new MathService();
ms.calculate();




