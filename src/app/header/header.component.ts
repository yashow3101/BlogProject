import { Component, EventEmitter } from '@angular/core';
import { DataStorageService } from '../DataStorage.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor (private router: Router){}

  onCreatePostClick(){
    this.router.navigate(['/create'])
  }

  onHomeClick(){
    this.router.navigate(['/home'])
  }
  
  onHistoryClick(){
    this.router.navigate([''])
  }
}






  // featureSelected= new EventEmitter

  // onSelect(feature: string){
  //   this.featureSelected.emit(feature);
  // }
