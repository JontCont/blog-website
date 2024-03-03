import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './home/posts/posts.component';
import { HomeComponent } from './home/home.component';
import { EditorsComponent } from './home/editors/editors.component';
import { ExtensionsModule } from './extensions/extensions.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts/post/:article', component: PostsComponent },
  { path: 'posts/edit', component: EditorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
