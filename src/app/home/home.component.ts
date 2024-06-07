import {Component} from '@angular/core';
import { DBService } from '../service/DBservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  deleteID: any;

  // constructor(private DBservice: DBService){}
  ondeletePost(){
    // const blogs = {deleteID: this.deleteID}
    // this.DBservice.deleteData(blogs)
  }


  constructor(private router: Router){}

  oneditPost(id: number){
    // this.router.navigate([`/edit/${id}`])
    this.router.navigate([`/edit` , id])
  }
}
