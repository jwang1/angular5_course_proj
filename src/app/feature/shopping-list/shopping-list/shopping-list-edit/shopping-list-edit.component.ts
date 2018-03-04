import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../../../model/ingredient/ingredient.model';
import {ShoppingService} from '../shopping.service';

@Component({
  selector: 'app-shoping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  ingredientBeingUpdated: Ingredient = null;

  @ViewChild('nm')
  nameElem: ElementRef;

  @ViewChild('amt')
  amountElem: ElementRef;

  constructor(private shoppingSrv: ShoppingService) { }

  ngOnInit() {
    this.shoppingSrv.ingredientSelected.subscribe(i => this.ingredientBeingUpdated = i);

    if (this.ingredientBeingUpdated !== null) {
      this.nameElem.nativeElement.value = this.ingredientBeingUpdated.name;
      this.amountElem.nativeElement.value = this.ingredientBeingUpdated.amount;
    }
  }

  onAddOrUpdate() {
    if (this.nameElem.nativeElement.value !== '' && this.amountElem.nativeElement.value !== '') {
      this.shoppingSrv.addOrUpdateIngredient(new Ingredient(this.nameElem.nativeElement.value, this.amountElem.nativeElement.value));
    } else {
      alert('please enter ingredient name and amount.');
    }
  }

}
