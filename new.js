//Напишіть функцію, яка приймає один параметр year. 
// Якщо рік ділиться на 4 і не ділиться на 100, 
// або ділиться на 400, поверніть "Високосний рік", 
// в іншому випадку - "Звичайний рік".

// function getGradeDescription(grade){{
//   if (grade >= 90) {
//     console.log("Відмінно");
     
//   } else if (grade >= 75) {
//     console.log("Добре");
     
//   } else if (grade >= 50) {
//     console.log("Задовільно");
     
//   } else {
//     console.log("Незадовільно");
    
//   }
// }}
//!-----------------------------------------
// getGradeDescription(95); // Відмінно
// getGradeDescription(80); // Добре
// getGradeDescription(60); // Задовільно
// getGradeDescription(30); // Незадовільно


//Напишіть функцію, яка приймає два параметри: 
// hasInvitation (булевий) і isFriend (булевий). 
// Якщо у вас є запрошення або ви друг, поверніть "Ви запрошені", 
// в іншому випадку поверніть "Вхід заборонено".

// function guest(hasInvitation, isFriend){
// if(hasInvitation || isFriend){
//   console.log("We invited"); 
// }
// else{
//   console.log("No admittance")
// }
// }

// guest(false, true);
// guest(false, false);
// guest(true, false);

//!--------------------------------------

//Напишіть функцію, яка приймає один параметр year. 
// Якщо рік ділиться на 4 і не ділиться на 100, 
// або ділиться на 400, поверніть "Високосний рік", 
// в іншому випадку - "Звичайний рік".

// function yearType(year){
// if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
//   console.log("Високосний рік");
// }
// else{
//   console.log("Звичайний рік");
// }
// }
//  yearType(2004);
//  yearType(1983);
//  yearType(1959);
//  yearType(2010);
//  yearType(2016);

//!------------------------------------

//Напишіть функцію, яка приймає вік особи (age). 
// Якщо вік менший за 12, поверніть "Дитина", якщо від 12 до 18, 
// поверніть "Підліток", 
// якщо від 18 до 60, поверніть "Дорослий", 
// більше 60 - "Пенсіонер".
// function person(age){
// if(age < 12){
//   console.log("Children");
// }
// else if(age < 60){
//   console.log("Adult");
// }
// else{
//   console.log("Elder");
// }
// }

// person(10);
// person(25);
// person(99);

//!--------------------------------------------------------------

//Напишіть функцію, яка приймає два параметри: 
// time та isWeekend. 
// Якщо time менше 12 і це не вихідний день, поверніть "Ранок буднього дня", 
// якщо більше 12 і менше 18 і це вихідний, поверніть "День вихідного дня", 
// в іншому випадку поверніть "Вечір".

// function greeting(time, isWeekend){
// if(time < 12 && !isWeekend){
//   console.log("Ранок буднього дня");
// }
// else if(time < 18 && isWeekend){
//   console.log("День вихідного дня");
// }
// else{
//   console.log( "Вечір");
// }
// }

// greeting(4, false);
// greeting(11, true);
// greeting(18, false);
// greeting(23, true);

//!----------------------------------------
//Напишіть функцію, яка приймає два параметри: 
// password та confirmPassword. 
// Якщо ці два паролі однакові, 
// поверніть "Паролі збігаються", 
// якщо ні, поверніть "Паролі не збігаються".

// function register(password, confirmPassword){
// if(password === confirmPassword){
//   console.log("Паролі збігаються");
// }
// else{
//   console.log("Паролі не збігаються");
// }
// }
// register(12345, 12345);
// register('password', 'confirmPassword');
// register('password', "confirmPassword");

//!----------------------------------------------
//Напишіть функцію, яка приймає два параметри: 
// isStudent (булевий) та hasID (булевий). 
// Якщо ви студент і маєте посвідчення, поверніть "Вхід дозволено", 
// якщо ні, поверніть "Вхід заборонено".

// function getUniversity(isStudent, hasID){
// if(isStudent === true &&  hasID === true){
//   console.log("Вхід дозволено");
// }
// else{
//   console.log("Вхід заборонено");
// }
// }
// getUniversity(true, false);
// getUniversity(false, false);
// getUniversity(true, true)

//Напишіть функцію, яка приймає два параметри: 
// number та isPositive. 
// Якщо число більше 0 і isPositive дорівнює true, поверніть "Це позитивне число",
//  в іншому випадку поверніть "Це не позитивне число".(

// function num(number, isPositive){
// if(number > 0 && isPositive === true){
//   console.log("Це позитивне число");
// }
// else{
//   console.log('Це не позитивне число');
// }
// }
// num(0, true);
// num(10, true);
// num(-2, false);
// num(3.31, true);