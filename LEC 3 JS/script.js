


// function parent() {
//     let age = 40
//     let name = "Dev"

//     function child() {
//         console.log(name);
        
//     }

//     return child
    
// }


// let returnFun = parent()
// returnFun()


let person = {
    age : 20,
    name : "Abhi",
    address : {
        city : "Dhaulpur",
        state : "Rajasthan",
        pin : 8792134
    },
    fun () {
       console.log(this);
        
    }
}


console.log(this);

person.fun()
// let newObj = {...person}

// newObj.name = "Dev"
// newObj.address.city = "Jaipur"


// console.log(person); // ====> Abhi
// console.log(newObj); // ====> Dev



let arr = [10,20,30,40,50]



// console.log(arr.slice(0,2));
arr.splice(0,3)

console.log(arr);


// console.log(arr[0]);

// let newArr = [...arr]

// newArr.push(60)
// console.log(arr);
// console.log(newArr);


// function sum(...nums) {
//     console.log(nums);
    
// }

// sum(10,20,35,40,50)