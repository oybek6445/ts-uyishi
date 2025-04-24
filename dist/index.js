"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const perf_hooks_1 = require("perf_hooks");
class Users {
    constructor(name, age, isStudent) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
}
function twoNumbers(a, b) {
    return a + b;
}
console.log(twoNumbers(5, 5));
function matn() {
    console.log('Matn');
}
matn();
class UserId {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
const colors = 'qizil';
const neverFunction = () => {
    throw new Error('hato');
};
const a = 'a';
console.log(typeof a);
class Car {
    constructor(name, age, key) {
        this.name = name,
            this.age = age,
            this.key = key;
    }
}
class Circle {
    constructor(drawText) {
        this.drawText = drawText;
    }
    draw() {
        return this.drawText;
    }
}
class Hayvon {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Maymun extends Hayvon {
    constructor(name, age) {
        super(name, age);
    }
    sayHi() {
        console.log(`nigga`);
    }
}
function identity(value) {
    return value;
}
console.log(identity("Salom"));
console.log(identity(42));
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
const partialUser = {
    email: "user@example.com"
};
const contactInfo = {
    name: "Ali",
    email: "ali@example.com"
};
var MathUtils;
(function (MathUtils) {
    function add(a, b) {
        return a + b;
    }
    MathUtils.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathUtils.subtract = subtract;
})(MathUtils || (MathUtils = {}));
console.log(MathUtils.add(5, 3));
console.log(MathUtils.subtract(5, 3));
const readonlyNumbers = [1, 2, 3];
// readonlyNumbers.push(4); // Xatolik beradi
// readonlyNumbers[0] = 10; // Xatolik beradi
function Log(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${propertyKey} with`, args);
        return originalMethod.apply(this, args);
    };
}
class MyService {
    greet(name) {
        return `Hello, ${name}`;
    }
}
__decorate([
    Log,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MyService.prototype, "greet", null);
const service = new MyService();
service.greet("Ali");
function processValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * value;
    }
    else if (value instanceof Date) {
        return value.toISOString();
    }
}
console.log(processValue("salom"));
console.log(processValue(5));
console.log(processValue(new Date()));
const userResponse = {
    data: {
        name: "Ali",
        email: "ali@example.com"
    },
    success: true
};
function Timer(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const start = perf_hooks_1.performance.now();
        const result = originalMethod.apply(this, args);
        const end = perf_hooks_1.performance.now();
        console.log(`${propertyKey} took ${(end - start).toFixed(2)} ms`);
        return result;
    };
}
class MathService {
    calculate() {
        let sum = 0;
        for (let i = 0; i < 1e6; i++) {
            sum += i;
        }
        return sum;
    }
}
__decorate([
    Timer,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], MathService.prototype, "calculate", null);
const ms = new MathService();
ms.calculate();
