import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component
({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit
{
  recipes: Recipe[] =
    [
      new Recipe('Pizza', 'Yummy pizza :)', 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Giorgio%27s_Pizzeria_Cheese_Pizza_Slice_%2836869909556%29.jpg'),
      new Recipe('Pizza', 'Yummy pizza :)', 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Giorgio%27s_Pizzeria_Cheese_Pizza_Slice_%2836869909556%29.jpg')
    ];

  constructor()
  {

  }

  ngOnInit(): void
  {

  }
}
