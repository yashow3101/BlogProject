import { Component, Injectable } from '@angular/core';
import { DBService } from '../service/DBservice';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})

export class EditPostComponent {
  updateID: any;
  updateTitle: string="";
  updateDescription: string=""
  titleError: string="";
  descriptionError: string="";
  id: number=1;
  blogid: number=1;
  editpost: void | undefined;

  constructor(private DBservice: DBService, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params
    .subscribe(
      (params: Params) => {
        this.blogid = +params['id'];
        this.editpost = this.DBservice.getData(this.id)
      }
    )
  }

  onupdatePost(){
    const blogs = {updateID: this.updateID , updateTitle: this.updateTitle , updateDescription: this.updateDescription , updateDataAT: Date.now()}
    this.DBservice.updateData(blogs.updateID , blogs.updateTitle , blogs.updateDescription , blogs.updateDataAT);
  }

savePost(){
  if(this.updateTitle === ""){
    this.titleError = "Please enter a title for the blog";
  }

  if(this.updateDescription === ""){
    this.descriptionError = "Please enter a description for the blog";
  }

  if (this.titleError || this.descriptionError){
    return;
  }
}


  // savePost(){
  //   if(this.updateTitle === ""){
  //     this.titleError = "Please enter a valid title for the blog";
  //   }

  //   if(this.updateDescription === ""){
  //     this.descriptionError = "Please enter a valid description for the blog";
  //   }

  //   if(this.titleError || this.descriptionError){
  //     return;
  //   }
  // }
}
