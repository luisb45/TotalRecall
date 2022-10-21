/*
/////////////////////////////////////////////////
// STRINGS 
/////////////////////////////////////////////////
let firstVariable = "Hello World";
firstVariable = 25; 

let secondVariable = firstVariable;
secondVariable = 'Yo' ;
//value of firstVariable is 25;

let yourName = 'Luis bustos';
let greeting = ("Hello, my name is " + yourName); 
console.log(greeting);



/////////////////////////////////////////////////
//BOOLEANS
/////////////////////////////////////////////////
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 !== '48');



/////////////////////////////////////////////////
//the Farm
/////////////////////////////////////////////////
let animal = "pig";
if (animal === "cow") {
    console.log('moooo');
} else {
    console.log("Hey! You're not a cow.");
};



/////////////////////////////////////////////////
//Driver's Ed
/////////////////////////////////////////////////
let personsAge = 12;
if (personsAge >= 16){
    console.log('Here are the keys!');
} else {
    console.log("Sorry, you're too young.");
};



/////////////////////////////////////////////////
//LOOPS
/////////////////////////////////////////////////
//A - The Basics
for(let i = 0; i <= 10; i++) {
    console.log(i);
};

let loop2 = "";
for(let i = 10; i <= 400; i++) {
    loop2 += i + " ";
};
console.log(loop2);

let loop3 = "";
for(let i = 12; i <= 4000; i++) {
    if ( i % 3 == 0){
        loop3 += i + " ";
    }
};
console.log(loop3);



/////////////////////////////////////////////////
//B - Get Even 
/////////////////////////////////////////////////
for(let i = 1; i <= 100; i++){
    if ( i % 2 == 0){
       console.log( i + ' <-- is a even number '); 
    } else {
        console.log(i);
    }
};



/////////////////////////////////////////////////
//Give Me 5
/////////////////////////////////////////////////
for(let i = 1; i <= 100; i++){
    if((i % 3 == 0) && (i % 5 == 0)) {
        console.log('I found a ' + i + ". High five!" + ' Three is a crowd')
    }else if (i % 5 == 0){
        console.log('I found a ' + i + ". High five!");
    } else if( i % 3 == 0){
        console.log('I found a ' + i + '. Three is a crowd');
    } else {
        console.log(i);
    }
};



/////////////////////////////////////////////////
//Savings Account
/////////////////////////////////////////////////
let bank_account = 0;
for(let i = 1; i <= 100; i++){
    bank_account += i * 2;
}
console.log(bank_account);



////////////////////////////////////////////////////////////////////
//ARRAYS & CONTROL FLOW
///////////////////////////////////////////////////////////////////
//Easy Does It
const quotes = ["quote 1", "quote 2", "quote 3"];



/////////////////////////////////////////////////
//Accessing elements
/////////////////////////////////////////////////
const randomThings = [1, 10, "Hello", true]
//1 
randomThings[0];
//2 
randomThings[2] = 'World';
//3
console.log(randomThings);



/////////////////////////////////////////////////
//Change values
/////////////////////////////////////////////////
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
//1
ourClass[2];
//2
ourClass[4] = 'Octocat';
//3
ourClass.push('Cloud City');
console.log(ourClass);



/////////////////////////////////////////////////
//Mix It Up
/////////////////////////////////////////////////
const myArray = [5, 10, 500, 20]
//1
myArray.push('Aegon', 'String');
//2
myArray.shift();
//3
myArray.unshift('Bob Marley');
//4
myArray.pop();
//5
myArray.reverse();
console.log(myArray);
//Mutate is the act of changing the properties of a value.
//Just the order of the array was changed.



/////////////////////////////////////////////////
//Biggie Smalls
/////////////////////////////////////////////////
let num = 253;
if(num < 100) {
    console.log("little number");
} else {
    console.log('big number')
};



//////////////////////////////////////////////////
//Monkey in the Middle
//////////////////////////////////////////////////
let mm = 7;
if (mm < 5) {
    console.log('little number');
} else if(mm > 10) {
    console.log('big number');
}else {
    console.log('monkey');
};



///////////////////////////////////////////////////
//Whats in your closet
///////////////////////////////////////////////////
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

console.log('Kristyn is rocking that ' + kristynsCloset[2] + ' today!');
kristynsCloset.splice(6, 0, 'raybans');
kristynsCloset[5] = 'Stained knit hat';
console.log(kristynsCloset);

//Toms Closet//
const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

thomsCloset[1][2] = 'Footie Pajamas';
let thomsShirt = thomsCloset[0][0];
let thomsPants = thomsCloset[1][2];
let thomsAccessories = thomsCloset[2][2];
console.log('Thom is looking fierce in a ' + thomsShirt + ', ' + thomsPants + ' and ' + thomsAccessories + '!');



/////////////////////////////////////////////////////////////////
//Functions
/////////////////////////////////////////////////////////////////

//B
function printCool(name) {
    console.log(name + ' is cool.');
}
printCool('Luis');

//C
const calculateCube = (num) => { return num * num * num };
console.log(calculateCube(5));

//D
const isVowel = (v) => {
    v = v.toLowerCase();
    if (v === 'a' || v === 'e' || v === 'i' || v === 'o' || v === 'u'){
        return true;
    } else {
        return false;
    }
}
console.log(isVowel('o'));
console.log(isVowel('f'));
console.log(isVowel('A'));

//E
const getTwoLengths = (p1, p2) => {
    return [p1.length, p2.length]
}
console.log(getTwoLengths('yo', 'Hippopopalous'));


//F               
const getMultipleLengths = ([...args]) => {
    for(let i = 0; i < args.length; i++){
        console.log(args[i].length);
    }
}
getMultipleLengths(['yo', 'avatar', 'windows', 'ice']);

//G
const maxOfThree = (n1, n2, n3) => {
    if (n1 >= n2 && n1 >= n3) {
        return n1
    } if(n2 >= n1 && n2 >= n3) {
        return n2
    } else {
        return n3
    }
};
console.log(maxOfThree(8, 8, 3));

//H           //IDK//
function printLongestWord(long) {
    let longestWord = 0;
    for(let i = 0; i < long.length; i++) {
        if(long[i].length > longestWord){
            longestWord = long[i].length;
        }
    }
    console.log(longestWord);
};
printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]);



//////////////////////////////////////////////////////
//Objects
//////////////////////////////////////////////////////
//A
let user = {
    name: 'billy',
    email: 'billy@email.com',
    age: 32,
    purchased: [],
    friend: {
        name: 'ed',
        age: '45',
        location: 'india',
        purchased: [],
    }
};
//B
user.email = 'legend27@email.com'
user.age++
//C
user.location = 'poland';
//D
user.purchased.push('carbohydrates', 'peace of mind', 'Merino jodhpurs');
console.log(user.purchased[2]);
//E
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push('The One Ring', 'A latte');
console.log(user.friend.purchased[1]);
//F
for(let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i]);
};

for(let i = 0; i < user.friend.purchased.length; i++) {
    console.log(user.friend.purchased[i]);
};
//G
// const updateUser = () => {
//     user.age++,
//     user.name = user.name.toUpperCase();
// };
// updateUser();
console.log(user);

function oldAndLoud(person) {
    person.age++,
    person.name = person.name.toUpperCase();
};
oldAndLoud(user);

*/