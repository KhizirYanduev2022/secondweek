// задание 1
const userAge = 20;

let text = "ты пацан" 
if(userAge < 35){
  console.log(text)
}


//задание 2
const isAdmin = false;
if(isAdmin == false){
    console.log('доступ запрещен')
}
/* 
  напиши ниже условие, которое выведет в консоль текст "доступ запрещен", 
  если значение константы isAdmin ложно
*/
// тут твой код


//задание 3
const password = "sherlock";
const realPassword = "holmes";

/* 
   напиши ниже условие, которое выведет в консоль текст "правильный пароль" 
   только в том случае, если значения констант password и realPassword совпадают.
*/   
if(password === realPassword){
    console.log('правильный пароль')
}


// задание 4
const myAge = "20";

/*
  напиши ниже условие, которое выведет в консоль текст "возраст указан верно" 
  только в том случае, если ТИПОМ переменной myAge является number.
  Тебе понадобится оператор typeof: https://learn.javascript.ru/types#type-typeof
*/
if(typeof myAge == 'string'){
    console.log('возраст указан верно')
}

// задание 5
const x = 2.7;
const y = -6;
/*
  напиши ниже условие, которое выведет в консоль "икс меньше игрик" только 
  в том случае, если значение переменной x меньше, чем значение переменной y
*/
if(x<y){
    console.log("икс меньше игрик")
}