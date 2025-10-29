// const add = require("./math")

// console.log(add(10 , 20))

const fs = require("fs")


// fs.writeFile("text.txt","Hello world", (err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("File was created successfully");
        
//     }
// })


// fs.readFile("text.txt", "utf-8" ,( err, data)=>{
//     if(data){
//         console.log(data);
        
//     }else{
//         console.log(err);
        
//     }
// })


// fs.appendFile("text.txt", " from file system" ,(err)=>{
//     if(err){
//         console.log(err);
        
//     }else {
//         console.log("data was appended");
        
//     }
// })


// fs.unlink("text", (err)=>{
//     if(err){
//         console.log(err);
        
//     }else {
//         console.log("file deleted successfully");
        
//     }
// })


// fs.mkdir("Chacha", (err)=>{
//     if(err){
//         console.log(err);
        
//     }else {
//         console.log("folder created successfully");
        
//     }
// })

// fs.readdir("Chacha", (err, data)=>{
//     if(err){
//         console.log(err);
        
//     }else {
//         console.log(data);
        
//     }
// })


fs.rmdir("Chacha",{recursive : true}, (err)=>{
    if(err){
        console.log(err);
        
    }else {
        console.log("folder deleted successfully");
        
    }
})