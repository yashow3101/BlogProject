import { Component, Injectable } from '@angular/core';
import { DBService } from '../service/DBservice';
// import { DataStorageService } from '../DataStorage.service';

@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  title: string='';
  titleError: string='';
  description: string='';
  descriptionError: string='';
  
  constructor( private DBservice: DBService) {}

  onCreatePost(title: string, description: string) {

    const newBlog = {id: Date.now() , title: title , description: description , createdAt: Date.now(), updatedAt: Date.now()};
   this.DBservice.pushData(newBlog);

  }

  savePost(){
    if (this.title === ""){
      this.titleError = "Please enter a title for the blog";
    }

    if(this.description === ""){
      this.descriptionError = "Please enter a description for the blog";
    }

    if(this.titleError || this.descriptionError){
      return;
    }
  }

}




    // constructor( private DataStorageServie: DataStorageService) {}
    // this.DataStorageServie.storeBlogs();
  //}