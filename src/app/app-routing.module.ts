import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { PostlistComponent } from './postlist/postlist.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'posts',  component: PostlistComponent},
  { path: 'post/:id',  component: PostdetailComponent},
  { path: 'post-detail',  component: PostdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
