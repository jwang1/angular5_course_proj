import {Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from '../../../../model/ingredient/ingredient.model';

@Component({
  selector: 'app-shoping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Input('allIngredients')
  ingredients: Ingredient[];

  @ViewChild('nm')
  nameElem: ElementRef;

  @ViewChild('amt')
  amountElem: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    this.ingredients.push(new Ingredient(this.nameElem.nativeElement.value, this.amountElem.nativeElement.value));
  }
}
