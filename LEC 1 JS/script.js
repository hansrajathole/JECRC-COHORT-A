
// let person = {
//     "first name" : "Namrata",
//     age : 20,
//     mo : 12345678543,
//     address : {
//         state : "MP",
//         city : "Bhopal",
//         pin : 444409
//     }

// }

// console.log(person.address);
// // console.log(person.first name);
// console.log(person["first name"]);

// person.age = 22
// person.gender = "female"
// console.log(person);

// delete person.mo
// person.address.city = "indore"
// console.log(person);



// Asyncronous 

console.log("hey");


// setTimeout(()=>{
//     console.log("hello");
    
// }, 2000)

const greet =  setInterval(()=>{
    console.log("hello");
    
}, 2000)

setTimeout(()=>{
    clearInterval(greet)
},5000)



