import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { HttpClientModule} from '@angular/common/http' 
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DBService } from './service/DBservice';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CreatePostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DBService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
