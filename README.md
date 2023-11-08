# figures

Работа Дубина Дмитрия Олеговича

Для компиляции перейдите в корень библиотеки и введите

npm install

tsc -b

После этого можно подключить в существующий проект командой

npm link ../figures

npx ts-node index.ts

import { Circle, Point, Polygon, Rectangular, Triangle } from "figures";

const example= async() => {
const obj1 = new Point(1, 2);
const obj2 = new Point(2, 3);
console.log(obj1.toString());
console.log(obj2.toString());
console.log(obj1.distanceCalc(obj2));
console.log(obj2.distanceCalc(obj1));

const obj3 = new Circle(new Point(-1, -2), 10);
console.log(obj3.toString());
await obj3.perimetrCalc().then((res) => console.log(res));
await obj3.areaCalc().then((res) => console.log(res));

const obj4 = new Polygon([
new Point(-1, -2),
new Point(1, -1),
new Point(3, 3),
new Point(4, -1),
new Point(-1, -5),
]);
console.log(obj4.toString());
await obj4.perimetrCalc().then((res) => console.log(res));
await obj4.areaCalc().then((res) => console.log(res));

const obj5 = new Rectangular([
new Point(0, 0),
new Point(0, 5),
new Point(5, 5),
new Point(5, 0),
]);
console.log(obj5.toString());
await obj5.perimetrCalc().then((res) => console.log(res));
await obj5.areaCalc().then((res) => console.log(res));

const obj6 = new Triangle([
new Point(0, 0),
new Point(5, 22),
new Point(11, -1),
]);
console.log(obj6.toString());
await obj6.perimetrCalc().then((res) => console.log(res));
await obj6.areaCalc().then((res) => console.log(res));
}

console.log("example...");
example();
