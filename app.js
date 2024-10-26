//conditional statements
// > , <, >= , <=, ==, ===, !=,!===

// if(2>1){
//   console.log('hello world');
// }
/*
if(true){
    console.log('condition is met');
}
    */
/*const value = 2> 1;
const value2 = false;
if(value2){
    console.log('hello world');
}
else{
    console.log('we are people')
}*/

/*const num1 =6;
const num2= 6;
const result = num1 >= num2;
if(num1 >num2){
    console.log('first number is bigger than the second');
}
else if(result){
    console.log('first number equal to second');
}
else{
    console.log('second number is bigger than first');
    
}*/
//to look for the oposite

/*
const value = false;
if(!value){
    console.log('the value is true')
} */

    //equality

   /* const num1 = 6;
    const num2 =  6;

    const value1 = num1 == num2;
   const value2 = num1 === num2;

   console.log(value1);
   console.log(value2);

   const n1 = 6;
   const n2 = '6';
   const v1 = n1 == n2;
   const v2 = n1 === n2;
   console.log(v1);
   console.log(v2);

   const c1 = 6;
   const c2 = 10;
   const r1 = c1 != c2;
   const r2 = c1 !== c2;
   console.log(r1);
   console.log(r2); */

   //logical operator

 /*  const name = 'peter';
   const age = 24;
   if(name === 'bob' || age === 24){
    console.log('hello there user');
   }
   else{
    console.log("wrong values");
   } */

    //switch
    //dice value : 1 - 6;

    const dice = 0;
    /*
    if(dice === 1){
        console.log('you got one');
    }
    if(dice === 2){
        console.log('you got two')
    }
    if(dice< 1 || dice > 6 ){
        console.log('you did not roll the dice');
    } */

        if(dice === 1){
            console.log('you got one')
        }
        else if(dice === 2){
            console.log('you got 2');
        }
        else if(dice < 1 || dice >6){
            console.log('you did no roll the dice')
        }
        else{
            console.log('try it again!');
        }
        //switch statement
        switch(dice){
            case 1:
                console.log('you got one');
            break;
            case 2:
                console.log('you got two');
                break;
            case 3:
                console.log('you got three');
                break;
            default:
                console.log('you did not roll the dice');   
        
        }
        




