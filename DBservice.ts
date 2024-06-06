import { Injectable } from "@angular/core";
import * as fs from 'fs';
import * as path from "path";

@Injectable({providedIn: 'root'})
export class DBService{


    pushData(newBlog: any,)
    {
        // const blogs= require('./db.json');
        // blogs.push(newBlog);

        const filePath = path.join('db.json');
            
        fs.readFile(filePath , (err: any, data: any) => {
            if (err) {
                throw err;
            }

        const blogs = JSON.parse(data);
        blogs.push(newBlog);
        
        fs.writeFile(
            'db.json',
            JSON.stringify(blogs), 
            err => {
                if (err) throw err;
                console.log("Done writing");
            }
        );
    })
}

    getData(){
        fs.readFile("db.json" , (err: any , data:any) => {
        if (err) throw err;

        const blogs = JSON.parse(data);
        console.log(blogs);
    });
}

    updateData(updateID: any, updateTitle: any, updateDescription: any, updatedDataAt: any){
        // const blogs = require('./db.json');

        const filePath = path.join('db.json');
            
        fs.readFile(filePath , (err: any, data: any) => {
            if (err) {
                throw err;
            }

        const blogs = JSON.parse(data);

        for(var i=0; i <blogs.length; i++){

            if(blogs[i].id === updateID){

                blogs[i].title = updateTitle;
                blogs[i].description = updateDescription;
                blogs[i].updatedAt = updatedDataAt;
            }
        }
            console.log(blogs);
            this.pushData(blogs);
        })
    }
    
    deleteData(deleteID: any){
        // const blogs = require ('./db.json');

        const filePath = path.join('db.json');
            
        fs.readFile(filePath , (err: any, data: any) => {
            if (err) {
                throw err;
            }

        const blogs = JSON.parse(data);

        for(var i=0; i <blogs.length; i++){

            if(blogs[i].id === deleteID){

            blogs.splice(i)
            }
        }
        console.log(blogs);
        this.pushData(blogs);
    })

}
}

// const fs = require("fs");

// // STEP 1: Reading JSON file 
// const users = require("./users");

// // Defining new user 
// let user =
// {
//     name: "New User",
//     age: 30,
//     language: ["PHP", "Go", "JavaScript"]
// };

// // STEP 2: Adding new data to users object 
// users.push(user);

// // STEP 3: Writing to a file 
// fs.writeFile(
//     "users.json",
//     JSON.stringify(users),
//     err => {
//         // Checking for errors 
//         if (err) throw err;

//         // Success 
//         console.log("Done writing");
//     }); 



// const fs = require("fs"); 

// // Read users.json file 
// fs.readFile("users.json", function(err, data) { 
    
//     // Check for errors 
//     if (err) throw err; 

//     // Converting to JSON 
//     const users = JSON.parse(data); 
//     console.log(users); // Print users 
// }); 
