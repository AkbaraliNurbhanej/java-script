// console.log("before conditonal");
// let random = Math.random();
// if( random < 0.5){
//     console.log("your number is less than 0.5!!!");
//     console.log(random);
    
// }
// if( random > 0.5){
//     console.log("your number is greater than 0.5!!!");
//     console.log(random);
    
// }



// const age=66;

// if(age <= 5){
//     console.log("you are a baby.");
// }
// else if(age <= 10){
//     console.log("you are a child");
// }
// else if (age <= 65){
//     console.log("you are a joniyar");    
// }
// else if(age > 65){
//     console.log("you are is 65+");
    
// }


// const passWord= prompt("Enter your password")
// if(passWord.length>=6){
//     console.log("your password in long");
    
// }else {
//     console.log("your passWord in shot plese your password is 6+");
    
// }

// if(passWord.indexOf(' ') === -1){
//     console.log("Good Job! nota space!");
// }
// else{
//     console.log("your password in to a set ! can not a space use!");
    
// }

// const passWord= prompt("Enter your password")
// if(passWord.length>=6 && passWord.indexOf(' ') === -1){
//     console.log("your password in long");
    
// }else { 
//     console.log("your passWord in shot plese your password is 6+");
    
// }

// if(passWord.indexOf(' ') === -1){
//     console.log("Good Job! nota space!");
// }
// else{
//     console.log("your password in to a set ! can not a space use!");
    
// }


// const day = 2 ;

// switch (day){
//     case 1:
//     console.log("Monday")
//     break;
    
//     case 2:
//     console.log("Tuesday")
//     break;

//     case 3:
//     console.log("Wednesday");
//     break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5: 
//     console.log("Friday");
//     break;

//     case 6:
//         console.log("satrday");
//         break;

//     case 7:
//         console.log("sunday");
//         break;
//     default:
//         console.log("it's not a day")
// }


// for (let i=1; i<=4; i++){
//     console.log(`i is : ${i}`)
//     for(let j=1; j< 4; j++){
//         console.log(`      j=is ${j}`)
//     }
// }


// let maximum =parseInt(prompt("Enter the maximum number!"))
// if (!maximum){
//     maximum = parseInt(prompt("Enter a valid number!"));
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1;
// //  

// let guess = parseInt(prompt("Enter your first guess!"));
// let attempts=1;
// while (guess !== targetNum) {
//     attempts++; 
//     if(guess > targetNum){
//         guess = parseInt( prompt("Too high! Enter a new guess:")); 
//     }
//     else{
//         guess = parseInt( prompt("Too low! Enter a new guess:"));
//     }
// }
        
// console.log(`you got it ! it took you ${attempts} guesses`);


// let input = ("what would you like to do ?")
// while (input !== 'quit' && input !== 'q') {
    
// }
// console.log("OK, QUIT THE App!");

// for(let i = 1; i < 4; i++){
//     console.log(`i is: ${i}`)

//     for(let j = 1; j <= 3; j++){
//     console.log(`     j is : ${j} `);

//     for(let l = 1; l <= 3; l++){
//         console.log(`               l is: ${l}`);
//         }
//     }     
// }

// let totalEggs = 0
// function collectEggs() {
//     totalEggs = 6;
    
// }
// console.log(totalEggs);

// collectEggs();
// console.log(totalEggs);
// const mystery = makeMysteryFunc()

// function makeMysteryFunc(){
//     const rand = Math.random();
//     if(rand > 0.5){
//         return function(){
//             console.log("congrats, i am a good function");
//             console.log("you win a million dollars!!");
//         }
//     }
//     else{
//         return function(){
//             alert("you have been infected by a computer virus!")
//             alert("you have been infected by a computer virus!")
//             alert("you have been infected by a computer virus!")
//             alert("you have been infected by a computer virus!")
//         }
//     }
// }


// function makeBetweenFunc(min,max){
//     return function (num){
//         return num >= min && num <=max ;
//     }
// }


// const muMath = {
//     PI : 3.14 ,
//     square : function (num){
//         return
//     }
// }

//this is a this methods!!!!!!

// const cat ={
//     name: 'blue steele',
//     color:'grey',
//     breed:'scottish fold',
//     meow(){
//         console.log("meow meow meow");
//     }
// }


// useing to try and catch

// try {
//     hello.toUpperCase()
// }catch{
//     console.log("ERROR!!!!!");
// }


// function yell(msg){
//     try{
//     console.log(msg.toUpperCase().repeat(3));
// }catch(e){
//     console.log("please pass a not valid!!!");
    
// }
// }


// forEach !!!!!

// const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// number.forEach(function (el){
//     if(el % 2 === 0){
//     console.log(el)
//     }
// })

const movies = [
    {
        title:'amadeus',
        score:99
    },
    {
        title:'stand by me ',
        score:98,
    },
    {
        title:'parasite',
        score:95
    }
]

movies.forEach(function(movie){
    console.log(`${movie.title} ${movie.score}/100`);
})