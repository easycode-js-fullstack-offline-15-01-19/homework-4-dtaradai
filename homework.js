// -------------------------- Home work --------------------------
// -------------------------- Тарадай Дмитрий -----------------------
// 1.	Создайте функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение:
// 	multiply(1,2,3) = 6(1*2*3)
// 	Если нет ни одного аргумента, вернуть ноль: multiply() // 0

/**
 * @description Функция которая принимает любое количество чисел и возвращать их произведение
 * @param {number} array -
 * @returns {number}
 */
function multiply(...array) {
 	let s = 1;
	if(array.length == 0) return 0;
	for(let i = 0; i < array.length; i++) s *= array[i];
	return s;
}
console.log('(Задача 1) ' + multiply(1,2,3,4,5));


// 2. 	Создать функцию, которая принимает строку и возвращает строку-перевертыш:
// 	reverseString('test') // 'tset'/

/**
 * @description Функция которая принимает строку и возвращает строку-перевертыш
 * @param {String} str -
 * @returns {String}
 */
function reverseString(str) {
	let testStr = '';
	for (let i = str.length - 1; i >= 0; i--) {
		testStr += str[i];
	}
	return testStr
}
console.log('(Задача 2) ' + reverseString('овтсбешлов отЭ'));

// 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где 
// 	каждый символ разделен пробелом и заменен на юникод-значение символа:
// 	getCodeStringFromText('hello') // '104 101 108 108 111'

/**
 * @description Функция которая в качестве аргумента принимает строку из букв и возвращает строку, где 
 		каждый символ разделен пробелом и заменен на юникод-значение символа
 * @param {String} str -
 * @returns {String}
 */
function getCodeStringFromText(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        output += str.charCodeAt(i) + ' ';
    }
    return output.trim();
}
console.log('(Задача 3) ' + getCodeStringFromText('как оно работает, не понимаю'));

// 4	Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 
// 	и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали 
// 	то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны 
// 	как пример вы подставляете реальные числа.

/**
 * @description Функция угадай число. Она принимает число от 1-10. Генерирует рандомное число от 1-10 и сравнивает с переданным 
 		числом, если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали“
 * @param {Number} n -
 * @returns {String}
 */
function guessNumber(n) {
let numberUser = prompt('Введите число от 1 до 10', '');
	numberRandom = Math.ceil(Math.random() * 10);
	if(isNaN(numberUser) || numberUser < 1 || numberUser > 10){
		alert('Введите число от 1 до 10')
	} else	if ( +numberUser === numberRandom) {
		alert('Вы выиграли')
 	} else {
 		alert('Вы не угадали, ваше число ' + numberUser + ', а выпало число ' + numberRandom)
 	}
} 
// guessNumber();

// 5.	Создать функцию, которая принимает число n и возвращает массив, 
// 	заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

/**
 * @description Функция которая принимает число n и возвращает массив, заполненный числами от 1 до n.
 * @param {Number} n -
 * @returns {Number}
 */
function getArray(n) {
	let res = [];
	for(let i = 1; i <= n; i++)
		res.push(i);
	return res;
}
console.log('(Задача 5) ' + getArray(15));

// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]

/**
 * @description Функция которая принимает массив, а возвращает новый массив с дублированными элементами входного массива
 * @param {Number} arr - 
 * @param {String} arr -
 * @returns {Object}
 */
function arrConcat(arr) {
	if (!Array.isArray(arr)) return console.log('Передайте массив');
	let newArr = arr.concat(arr);
	return newArr;
}
let doublearr = arrConcat([1,2,3,4,5,6]);
console.log('(Задача 6) ' + doublearr);

// 7.	Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент,
// 	а возвращает массив из оставшихся значений: 
// 	changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

/**
 * @description Функция которая принимает произвольное число массивов и удаляет из каждого массива первый элемент, 
 		и возвращает массив из оставшихся значений.
 * @param {Number} 
 * @param {String} 
 * @returns {Number}
 * @returns {Object}
 */
function changeCollection() {
	let handler = arguments[arguments.length - 1];
	for (let i = 0; i < arguments.length - 1; i++) {
		let array = arguments[i];
		handler(array);
	}
}
function deleteFunc(array) {
	array.shift();
}
let one = [1,2,3];
	two = ['a', 'b', 'c'];
changeCollection(one, two, deleteFunc)
console.log(one, two);

// 8. 	Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. 
// 	Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
// funcGetUsers(users, “gender”, “male”); // [{name:“Denis”, age: “29”, gender: “male”} , {name:“Ivan”, age: “20”, gender: “male”}]

let users = [
	{	
		name:'Denis',
		age: 29,
		gender: 'male'
	},
	{	
		name: 'Ivan',
		age: 20,
		gender: 'male'
	},
	{	
		name:'Anna',
		age: 23,
		gender: 'female'
	}
];
/**
 * @description Функция которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. 
// 	Проверяtn что все аргументы переданы. Возвращать новый массив с пользователями соответсвующиv указанным параметрам.
 * @param {object} users -
 * @param {String} valueKey - 
 * @param {String} valueKey - 
 * @returns {object} users -
 */
function filterSuitableUsers(users, valueKey, value) {
	return users.filter(user => user[valueKey] === value );
}
function getSuitableUsers(users, valueKey, value) {
	if (!Array.isArray(users)) return console.log('Передайте массив');
	const suitableUsers = [];
	for (let i = 0; i < users.length; i++) {
		if(users[i][valueKey] === value){
			suitableUsers.push(users[i]);
		};
	}
	return suitableUsers;
}
console.log(getSuitableUsers(users, "age", 29));

// -------------Функции высшего порядка. Задачи.----------------------------------------


// 1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// Первая функция возвращает строку “New value: ” и результат обработки:

// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются


// Подсказка: secondFunc должна быть представлена функцией, которая принимает
// один аргумент (каждый элемент массива) и возвращает результат его обработки

const personIdValues = ["my", "name", "is", "Trinity"];
const personDatas = [{age: 45, name: "Jhon"}, {age: 20, name: "Aaron"}];
const numbers = [1, 2, 434, 121, 1, 12, 2];
const arrString = ['abc', '123'];

/**
 * @description Функция принимает массив и колбэк и возвращает строку “New value: ” и результат обработки.
 * @param {String} array -
 * @param {String} collback - 
 * @returns {String}
 */
function generateNewValueFromArray(array, collback) {
    if (!Array.isArray(array)) {
    	return console.log('Передайте массив');
	}
	console.log("New value: " +  collback(array));
}
/**
 * @description Функция обрабатывает каждый элемент массива, удаляет пробелы и переписывает первый символ слова с большой буквы.
 * @param {String} array -
 * @returns {String}
 */
function capitalize(array){
    return array.map(
    	function (s){
        	return s[0].toUpperCase() + s.slice(1);
        }
        ).join("");
}
/**
 * @description  Функция обрабатывает каждый элемент массива, и умножает все элементы на 10.
 * @param {String} array -
 * @returns {String}
 */
function multiple(array){
	return array.map(value =>value * 10).join(", ");
}
/**
 * @description Функция обрабатывает каждый элемент массива, и возвращает проверенный резулбтат.
 * @param {String} array -
 * @returns {String}
 */
function createPersonData(array){
	return array.map(value =>value.name + " is " + value.age).join(", ");
} 
/**
 * @description Функция обрабатывает каждый элемент массива, и возвращает среверсированную строку.
 * @param {String} array -
 * @returns {String}
 */
function rewerseString(array){
	return array.map(
		function reverseStr(str) {
			return str.split("").reverse().join("");
		})
}

let arrNeme = generateNewValueFromArray(personIdValues, capitalize);
	arrNumbers = generateNewValueFromArray(numbers, multiple);
	arrObj = generateNewValueFromArray(personDatas, createPersonData);
	stringRewerse = generateNewValueFromArray(arrString, rewerseString);



