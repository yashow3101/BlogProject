import { Component, EventEmitter } from '@angular/core';
import { DataStorageService } from '../DataStorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  featureSelected= new EventEmitter

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

  
}
