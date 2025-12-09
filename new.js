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
// getGradeDescription(95); // Відмінно
// getGradeDescription(80); // Добре
// getGradeDescription(60); // Задовільно
// getGradeDescription(30); // Незадовільно

//!----------------------------------------------------
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

// Напишіть функцію, яка приймає вік особи (age). 
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
//!----------------------------------------------------
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
//!-------------------------------------------------------
//Напишіть функцію, яка приймає два параметри: temperature та isSunny. 
// Якщо температура більше 20 і це сонячний день, поверніть "Час для прогулянки", 
// в іншому випадку поверніть "Залишимося вдома".

// function weather(temperature, isSunny){
// if(temperature >20 && isSunny){
//     console.log("Час для прогулянки"); 
// }
// else{
//     console.log("Залишимося вдома");  
// }
// }
// weather(18, true);
// weather(22, true);
// weather(-5, false);

//!-----------------------------------------------------------------
//Напишіть функцію, яка приймає два параметри: weight та height. 
// Якщо вага більше 100 кг і зріст менше 150 см, 
// поверніть "Перевищено допустимий ліміт", в іншому випадку поверніть "У межах норми".
// function healthy(weight, height){
// if(weight > 100 && height < 150){
//     console.log("Перевищено допустимий ліміт");
// }
// else{
//     console.log("У межах норми"); 
// }
// }
// healthy(100, 100);
// healthy(110, 140);
// healthy(90, 155);

//!------------------------------------------------------------------
//Напишіть функцію, яка приймає три параметри: age, isStudent (булевий), 
// і isSeniorCitizen (булевий). Якщо вік менший за 18 або є студентом, 
// або якщо старший за 65 і є пенсіонером, поверніть "Знижка на квиток", 
// в іншому випадку поверніть "Повна вартість квитка".

// function  valueTicket(age, isStudent, isSeniorCitizen){
// if(age < 18 || isStudent || (age > 65 && isSeniorCitizen)){
//     console.log("Знижка на квиток");
// }
// else{
//     console.log("Повна вартість квитка"); 
// }
// }
// valueTicket(17, true, false);
// valueTicket(42, false, false);
// valueTicket(66, false, true);
//!--------------------------------------------------------------------
//Напишіть функцію, яка приймає три параметри: 
// temperature, isRaining, і hasUmbrella (булевий). 
// Якщо температура більше 25 і йде дощ, і у вас є парасоля, 
// поверніть "Візьміть парасолю та одягніться легше", 
// якщо немає парасолі, поверніть "Залишайтеся вдома", 
// в іншому випадку поверніть "Виходьте на прогулянку".

// function walking(temperature, isRaining, hasUmbrella){
//     if(temperature > 25 && isRaining && hasUmbrella){
// console.log("Візьміть парасолю та одягніться легше");
//     } 
//     else{
//         console.log("Залишайтеся вдома");
        
//     }
// }
// walking(26, true, true);
// walking(25, true, true);
// walking(0, false, true);
//!---------------------------------------------------------------------

//Напишіть функцію, яка приймає два параметри: password і confirmPassword. 
// Якщо password містить як мінімум одну цифру і збігається з confirmPassword, 
// поверніть "Пароль прийнято", в іншому випадку поверніть "Пароль не відповідає вимогам".
// function userPassword(password, confirmPassword){
//     let i;
//     let num;
//    for(i = 0; i < password.length; i++){
//     num = password[i];
// if(num >= 0 && password === confirmPassword){
// console.log("Пароль прийнято");
// }
// else{
//    console.log("Пароль не відповідає вимогам"); 
// }
// }}
// userPassword("sdfsdf", "sdfsdf");
// userPassword("12453a", "12453a");
// userPassword("ffff0#", "ffff");
//!-----------------------------------
//Напишіть функцію, яка приймає три параметри: 
// currentDay, hasMeeting (булевий), і isHoliday. 
// Якщо сьогодні понеділок, середа або п'ятниця, і у вас є зустріч, і це не свято, поверніть "Є зустріч", 
// в іншому випадку поверніть "Немає зустрічі".
// function hasMeetUp(currentDay, hasMeeting, isHoliday){
// if((currentDay === 'Monday' || 
//     currentDay ==='Wednesday'|| 
//     currentDay === 'Friday') 
//     && hasMeeting && !isHoliday){
//     console.log("Є зустріч");  
// }
// else{
//     console.log("Немає зустрічі");  
// }
// }
// hasMeetUp('Monday', true, true);
// hasMeetUp('Wednesday', true, false);
// hasMeetUp('Sunday', true, false);
//!-----------------------------------------
//Напишіть функцію, яка приймає три параметри: 
// itemPrice, isDiscounted (булевий), і discountAmount. 
// Якщо ціна товару більше 1000, і він знижений на 10% або більше, поверніть "Скидка доступна", 
// в іншому випадку поверніть "Скидка не доступна".

// function discount(itemPrice, isDiscounted, discountAmount){
//    if(itemPrice > 1000 &&  isDiscounted && discountAmount >= 0.1){
//     console.log("Скидка доступна");
//    }
//    else{
//     console.log("Скидка не доступна");
//    }
// }
// discount(1100, true, 0.1);
// discount(1100, true, 0.05);
// discount(1000, true, 0.1);
// discount(1100, false);
//!------------------------------------------------
//Напишіть функцію, яка приймає один параметр dayOfWeek. 
// Використовуючи switch, 
// поверніть "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота" або "Неділя" 
// залежно від введеного числа (1 - Понеділок, 2 - Вівторок, і т.д.). 
// Якщо введене число не в діапазоні від 1 до 7, поверніть "Невідомий день".
// function dayWeek(dayOfWeek){
// switch(dayOfWeek){
//     case 1:
//         console.log("Понеділок");
//         break;
//     case 2:
//         console.log("Вівторок");
//         break;
//     case 3:
//         console.log("Середа");
//         break;
//     case 4:
//         console.log("Четвер");
//         break;
//     case 5:
//         console.log("П'ятниця");
//         break;
//     case 6:
//         console.log("Субота");
//         break;
//     case 7:
//         console.log("Неділя");
//         break;
// default:
//     console.log("Невідомий день")
// }}

// let i;
// for(i = 1; i <= 8; i++){
// dayWeek(i);
// }
// function dayWeek(dayOfWeek){
//     if (dayOfWeek > 7 || dayOfWeek < 1) {
//     return; // ← нічого не буде показано
// }
// switch(dayOfWeek){
//     case 1:
//         alert("Понеділок");
//         break;
//     case 2:
//         alert("Вівторок");
//         break;
//     case 3:
//         alert("Середа");
//         break;
//     case 4:
//         alert("Четвер");
//         break;
//     case 5:
//         alert("П'ятниця");
//         break;
//     case 6:
//         alert("Субота");
//         break;
//     case 7:
//         alert("Неділя");
//         break;
// default:
//         console.log("Невідомий день");  
// }
// }
// let i = Number(prompt('Enter day of week'));
// dayWeek(i);

