/*Задание 1

Перепишите код с использованием тернарного оператора

let country = 'Sweden';
let access;
if (country == 'Sweden') {
access = true;
} else{
access = false;
}*/

let country = prompt('Ваша страна');

let message = (country === 'Sweeden') ? true :
(country != 'Sweeden') ? false : false;

alert (message)



/*Задание 2

Создать переменную и записать в нее число, например 10.

10 раз увеличить значение этой переменной на 1. Результат (1 шт.) вывести в консоль.*/

for (let number = 5; number < 16; number++) {
    alert (number);
}


/*Задание 3

Увеличивая счетчик цикла на 2, нужно 5 раз:
- запрашивать у пользователя ввод числа
- проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"*/

for (number = 0; number < 5; number = number + 2) {
    let userNumber = +prompt ('Введите число');

let result = (userNumber === 10) ? 'Равно 10' :
(userNumber != 10) ? 'Не равно 10' : 'Не равно 10';

alert (result);
}



/*Задание 4

Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
* Задавать количество чисел, которые нужно вывести, при помощи функции prompt.*/

let userNumber = +prompt ('Введите число');

for (let i = 0; i < userNumber; i++) {
    if (i ** 2 < 99) {
        console.log (i **2)
    }else {
      console.log ('Неверное значение');
      break;
      }
    }



/*Задание 5



Напишите программу, которая выводит в консоль числа от 1 до 100.
При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», 
а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, 
то программа должна выводить слово «FizzBuzz»*/

for (number = 1; number <= 100; number++) {

    if ((number % 3 === 0) && (number % 5 !=0)) {
        console.log ('Fizz');
    } else if ((number % 5 === 0) && (number % 3 !=0)) {
        console.log ('Buzz');
    } else if ((number % 3 != 0) && (number % 5 != 0)) {
        console.log (number);
    } else if ((number % 3 == 0) && (number % 5 == 0)) {
        console.log ('FizzBuzz');
    }
    }



/*Задание 6

Перепишите код, заменив цикл for на while, без изменения поведения цикла.

for (let i = 0; i < 3; i++) {
alert( `number ${i}!` );
}*/


let i = 0
while (i < 3) {
    alert (`number ${i}!`);
    i++;
}


/*Задание 7

Переписать задание 4 в виде функции. 
Т.е. описать функцию, которая выводит квадраты чисел из заданного диапазона 
(диапазон будет попадать в функцию как аргументы).*/


function power (number) {
    for (let i = 0; i <= 100; i++) {
    if (i < number) {
        console.log (i**2)
    }
}
}

let userNumber = +prompt ('Введите число');

power (userNumber);


/*Задание 8

Написать функцию, котрая возвращает строку - случайный цвет в формате rgb. Это будет строка вида "rgb(10,55,250)"

Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне 
min - max. Вот эта функция (просто скопируйте, она уже готова):
function getRandomInteger(min, max) {
return Math.floor(Math.random() * (max - min)) + min;*/


function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomRGB () {

    alert (`rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)})`)
}

randomRGB () 



/*Задание 9

Написать функцию, которая принимает целое число n.   

Внутри функции запустить цикл от 1 до n с шагом 0.5. На каждой итерации цикла выводить в консоль 
текущее число (i) и информацию о том, целое ли оно.

Такая функция не будет ничего возвращать, она просто выводит информацию в консоль.*/


function numbers (myNumber) {
    for (let i = 0; i <= myNumber; i += 0.5) {
        if (Number.isInteger(i)) {
            console.log (i + ' integer');
        } else {
            console.log (i + ' decimal');
        }
    }
}

numbers(10)