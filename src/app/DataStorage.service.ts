import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./create-post/create-post.model";
import { Postservice } from "./create-post/post.service";
import { HeaderComponent } from "./header/header.component";
@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor (private http: HttpClient, private PostService: Postservice){}
 
    storeBlogs(){
        const blogs = this.PostService.getPost();
        this.http.put('https://angularproject-a1720-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json', Post)
        .subscribe(Response => {
            console.log(Response);
        });

    //showBlogs(){
        //const blogs = this.PostService.getPost();
        //this.http.get('https://angularproject-a1720-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json',)
        //.subscribe(Post =>{
           // console.log(Post)
        //});
    }
    }
