// პირველი
let userId = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25, 
    studentstatus: "active"
};

console.log(userId.studentstatus);


// მეორე
let numbers = [ 1, 2, 4, 6, 7, 8, 9]
for (let item=0; item<numbers.length; item++ ){
    console.log(numbers[item]);
}
 
let index = 0;  
while (index < numbers.length) {
    console.log(numbers[index]);
    index++;
}

//მესამე

let names = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for(element=0; element<names.length; element++)

{if (names[element] > 5) {
    console.log(names[element]);
    }
} 


//მეოთხე

let user = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}
    if(user.age<18 && user.studentstatus =='active'){
    console.log('hello');}
    else if  (user.name == 'levani'){
    console.log('hello levani');}  
    else if (user.studentstatus =='active' || user.age<25){
        console.log("hello world") ;
    }  

    else(console.log('error')) ; 

    // მეხუთე

    let arrays = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];

    for(let x of arrays){
        if(typeof x == 'string')
        console.log(x);
    }

    //მეექვსე

    let box = [ [2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10] ];

    for (let item of box) {
            for (let positive of item) {
                console.log(positive);
                if (positive > 0) {
                    console.log(positive);
                }
            }
        }

    //მეშვიდე


    let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
    // ლუწი
    for (let b of array) {
                if (b % 2 == 0) {
                    console.log(b);
                }
            }
        // კენტი
            for (let b of array) {
                if (b % 2 == 1) {
                    console.log(b);
                }
            }



    //მერვე

    let users = [
        {username: 'giorgi', status: false},
        {username: 'levani', status: false},
        {username: 'anna', status: true}
    ]
for(item of users){
    
    if(item.status == true)
    console.log(item);
}





