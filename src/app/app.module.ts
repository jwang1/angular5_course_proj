import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './feature/shopping-list/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './feature/shopping-list/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './feature/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './feature/recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './feature/recipe-book/recipe-detail/recipe-detail.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { ArticleComponent } from './article/article.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    FooterComponent,
    AsideComponent,
    ArticleComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
