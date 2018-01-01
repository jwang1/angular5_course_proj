import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './feature/shopping-list/shopping-list/shopping-list.component';
import { ShopingListEditComponent } from './feature/shopping-list/shoping-list-edit/shoping-list-edit.component';
import { RecipeListComponent } from './feature/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './feature/recipe-book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './feature/recipe-book/recipe-detail/recipe-detail.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShopingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    FooterComponent,
    AsideComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
