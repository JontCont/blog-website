import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtensionsModule } from './extensions/extensions.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './home/posts/posts.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { EditorsComponent } from './home/editors/editors.component';

@NgModule({
  declarations: [AppComponent, PostsComponent, HomeComponent, EditorsComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ExtensionsModule,
    HttpClientModule,
    FormsModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
    }),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
