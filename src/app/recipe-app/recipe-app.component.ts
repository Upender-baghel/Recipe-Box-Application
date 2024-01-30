import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-app',
  templateUrl: './recipe-app.component.html',
  styleUrl: './recipe-app.component.css'
})
export class RecipeAppComponent implements OnInit {
  recipeForm!: FormGroup;
  recipes :any[] = [];
  editRecipeData = { title: '', ingredients: '', instructions: '' };
  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      ingredients: ['', Validators.required],
      instructions: ['', Validators.required]
    });
  }
  
  addRecipe() {
    if (this.recipeForm.valid) {
      this.recipes.push(this.recipeForm.value)
      this.recipeForm.reset()
    }
  }

  editRecipe(index: number) {
    // this.recipes[index].editing = true; 
    // this.recipeForm.setValue({
    //   title: this.recipes[index].title,
    //   ingredients: this.recipes[index].ingredients,
    //   instructions: this.recipes[index].instructions,
    // });
    this.recipes[index].editing = true;
    this.editRecipeData = { ...this.recipes[index] };
  }

  updateRecipe(index: number) {
    // this.recipes[index] = {
    //   ...this.recipes[index],
    //   title: this.recipeForm.value.title,
    //   ingredients: this.recipeForm.value.ingredients,
    //   instructions: this.recipeForm.value.instructions,
    // };

    // this.recipeForm.reset();
    // this.recipes[index].editing = false;
    this.recipes[index] = { ...this.editRecipeData, editing: false };
    this.editRecipeData = { title: '', ingredients: '', instructions: '' };
  }

  cancelEdit(index: number) {
    this.recipeForm.reset();
    this.recipes[index].editing = false;
  }

  
  deleteRecipe(index: number) {

    this.recipes.splice(index, 1);
    this.recipeForm.reset();
  }
  
}
