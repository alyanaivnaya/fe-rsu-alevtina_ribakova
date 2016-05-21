// //Task1
// var now = new Date();
// var options = {
//   weekday: 'long',
//   hour: 'numeric',
//   minute: 'numeric'
// };
// document.write("Today is: " + now.toLocaleString("en-US", options));

// //Task2
// var now = new Date();
// now = now.toString();
// document.write(now);

// //Task3
// var now = new Date();
// var year = [];
// for (var i=2014;i<=2050;i++) {
// 	now = new Date(i, 0, 1);
// 	if (now.getDay() == 6) {
// 		year.push(i);
// 	}
// }
// document.write(year);

// //Task4
// var now = new Date();
// var newYear = new Date(2017, 0, 1);
// var daysLeft = (newYear-now)/86400000;
// document.write(daysLeft.toFixed(0) + " days left");

// //Task5
// function is_array(a) {
// 	return(a.constructor === Array);
// }
// document.write(is_array('qwe'));
// document.write(is_array([1,2,4,0]));

// //Task6
// function clone (arr) {
// 	var b = arr.slice(0);
// 	return b;
// }
// var a = [1,2,3];
// var b = clone(a);
// document.write(b);

// //Task7
// function frequent(arr) {
// 	var x = 0;
// 	var count = 1;
//     for(var i = 1; i < arr.length; i++)
//     {
//         if (arr[x] == arr[i])
//             count++;
//         else count--;
//         if(!count) x = i, count = 1;
//     }
//     return arr[x];
// }
// var arr = [1,2,1,2,1];
// var b = frequent(arr);
// document.write(b);
// Task8

// function inverse (a) {
// 	var newStr = '';
// 	for (var i = 0; i < a.length; i++) {
// 		if (a.substr(i,1) > a.substr(i,1).toUpperCase()) {
// 			newStr += a.substr(i,1).toUpperCase();
// 		}
// 		else {
// 			newStr += a.substr(i,1).toLowerCase();
// 		}
// 	}
// 	return newStr;
// }

// var str = 'мАША вАСЯ кОЛЯ пЕТЯ';
// var newStr = inverse(str);
// document.write(newStr);

// Task9

// function delDuplicate(arr) {
// 	arr.sort(caseIgnoredSort);
// 	function caseIgnoredSort(a,b) {
// 		if (a.toLowerCase() > b.toLowerCase()) return 1;
// 		else return -1;		
// 	}
// 	for (var i = arr.length-1; i > 0; i--) {
// 		if (arr[i].toLowerCase() == arr[i-1].toLowerCase()) {
// 			arr.splice(i,1);
// 		}		
// 	}
// 	return arr;
// }
// var arr=['audi','toyota','Audi','Nissan','TOYOTA','BMW'];
// delDuplicate(arr);
// document.write(arr);

// Task10

// var arr = [1,2,3,4,5,6];
// arr.sort(function() { return 0.5 - Math.random() });
// document.write(arr);

// Task11

// function remove(arr) {
//     for (var i = arr.length-1; i > 0; i--) {
// 		if ((arr[i] === null) || (arr[i] == undefined) || (arr[i] === 0) || (arr[i] === false) ||
//         (isNaN(arr[i] && (typeof arr[i]) != 'undefined' && (typeof arr[i]) != 'object' &&
//         (typeof arr[i]) != 'boolean' && (typeof arr[i]) != 'number' && (typeof arr[i]) != 'string' &&
//         (typeof arr[i]) != 'object' && (typeof arr[i]) != 'function'))) {
// 			arr.splice(i,1);
// 		}		
// 	}
// 	return arr;
// }
// var a = 'djdj'*5;
// var b;
// var arr = [1, 'qwe', null, 0, 5, 'sksksk', false, b, undefined, 3, a, 7];
// remove(arr);
// document.write(arr);

// Task12

// function sortByTitle(a) {
//     a.sort (function(x,y) { return (parseInt (x ["title"]) - parseInt (y ["title"]))});
// }
// var library = [ 
// { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
// { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
// { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
// ];
// sortByTitle(library);
// for (var i = 0; i < library.length; i++) {
//     document.write('author: \'', library[i].author, '\', title: \'', library[i].title, '\', libraryID: \'',
//     library[i].libraryID, '\'', '<br />')
// }

// Task13

// function merge(arr1, arr2) {
//     var arr3 = arr1.concat(arr2);
//     arr3.sort();	
// 	for (var i = arr3.length-1; i > 0; i--) {
// 		if (arr3[i] == arr3[i-1]) {
// 			arr3.splice(i,1);
// 		}		
// 	}
//     return arr3;
// }

// var arr1 = [1,2,3,3,2,1];
// var arr2 = [4,5,4,6];
// var a = merge(arr1, arr2);
// document.write(a);

// Task14

// function delSpecific(arr,a) {
//     for (var i = arr.length-1; i > 0; i--) {
// 		if (arr[i] == a) {
// 			arr.splice(i,1);
// 		}		
// 	}
//     return arr;
// }
// var arr = [1,2,5,3,5,6,2];
// var a = 2;
// delSpecific(arr,a);
// document.write(arr);

// Task15

// function getRandom(arr) {
//     return arr[Math.floor(Math.random() * (arr.length))];
// }
// var arr = ['Lucy', 'Helen', 'Mark', 'Jacob', 'Angela'];
// document.write(getRandom(arr));

// Task16

// function moveElem(arr,index,pos) {
//     arr.splice(pos,0,arr.splice(index,1));
// }
// var arr = [1,2,3,4,5,6];
// var index = 2; //двигаем элемент с этим индексом
// var pos = 4; //двигаем на эту позицию
// moveElem(arr,index,pos);
// document.write(arr);

// Task17

// function dateDiff(d1,d2) {
//     var diff = (d1-d2)/86400000;
//     if (diff < 0){
//         diff = diff * -1;
//     }
//     return diff;
// }
// var date1 = new Date(2018, 0, 1);
// var date2 = new Date(2017, 0, 1);
// var diff = dateDiff(date1,date2);
// document.write(diff.toFixed(0));

// Task18

// function maxDate(arr) {
//     var max = 0;
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] > arr[max]) {
//             max = i;
//         }
//     }
//     return arr[max];
// }
// document.write(maxDate(['2015/02/01', '2015/02/02', '2015/01/03']));

// Task19

// function splitStr(a) {
//     var reg = /,\s*|\.\s*|\s*-\s*|\s*\"\s*|!\s*|\?\s*|\s/;
//     var arr = a.split(reg);
//     return arr;
// }
// var a = 'Hello, man. \"Hello\" - you said. You\'re ok! How are you?';
// document.write(splitStr(a));

// Task20

// function capitalFirst(a) {
//     a = a.charAt(0).toUpperCase() + a.substr(1);
//     return a;
// }
// var a = 'hello';
// document.write(capitalFirst(a));

// Task21

// function camelize(a) {
//     var b = '';
//     for (var i = 0; i < a.length; i++) {
// 		if (a.substr(i,1) == ' ' || a.substr(i,1) == '-') {
// 		}
//         else if (a.substr(i-1,1) == ' ' || a.substr(i-1,1) == '-') {
//             b = b + a.charAt(i).toUpperCase();
//         }
//         else {
//             b += a.substr(i,1);
//         }
// 	}
//     return b;
// }
// document.write(camelize("Java Script"));
// document.write(camelize("java-script"));
// document.write(camelize("Java Script Exercises"));

// Task22

// function highestValue(arr) {
//     var max = 0;
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] > arr[max]) {
//             max = i;
//         }
//     }
//     return arr[max];
// }
// var arr = [3,2,6,0,1,'qwe'];
// document.write(highestValue(arr));

// Task23

// function lowestValue(arr) {
//     var min = 0;
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] < arr[min]) {
//             min = i;
//         }
//     }
//     return arr[min];
// }
// var arr = [3,2,6,0,1,'qwe'];
// document.write(lowestValue(arr));

// Task24

// function isNumeric(a) {
//     if (typeof a == 'number') {
//         return 'numeric';
//     }
//     else return 'not numeric';
// }
// document.write(isNumeric(1));
// document.write(isNumeric('qwe'));

// Task25

// function arrSum(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// var arr = [1,2,3,4,5];
// document.write(arrSum(arr));

// Task26

// function objLength(a) {
//     return Object.keys(a).length;
// }
// var a = { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254};
// document.write(objLength(a));

// Task27

// function objPropList(a) {
//     for(var key in a){
//         document.write(key + ': ' + a[key] + '<br />');
//     }
// }
// var a = { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254};
// objPropList(a);