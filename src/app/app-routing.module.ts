import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'create', component: CreatePostComponent},
  {path: 'edit/:id', component: EditPostComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
