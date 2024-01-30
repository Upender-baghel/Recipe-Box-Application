import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeAppComponent } from './recipe-app/recipe-app.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/recipeApp'},
  {path:'recipeApp', component:RecipeAppComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
