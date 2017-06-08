import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';


export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
   private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients); //this breaks up the items in the array into a list of arguments rather than an array
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}