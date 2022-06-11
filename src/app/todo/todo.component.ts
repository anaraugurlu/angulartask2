import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { ToDoItem } from '../todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  displayAll: boolean = true;
  constructor() {}
  desc = null;
  act = null;

  message = 'no message';
  style = 'color:green';
  model = new Model();

  getName() {
    return this.model.name;
  }

  addItem(value: string) {

    if (value != '') {
      this.model.items.push(new ToDoItem(1, value, false));
      this.message = '';
      value = '';
    }
  }
  getItems() {
    if (this.displayAll) {
      return this.model.items;
    }
    return this.model.items.filter((item) => item.action == false);
  }
  Update(input: any, input2: any) {
    for (let i = 0; i < this.getItems().length; i++) {
      if (this.getItems()[i].description == this.desc) {
        this.getItems()[i].description = input.value;
        input.value = null;
        if (input2.value == 'Yes') {
          this.getItems()[i].action = true;
          input2.value = null;
        } 
        else if (input2.value == 'true') {
          this.getItems()[i].action = true;
          input2.value = null;
        } 
        else if (input2.value == 'No') {
          this.getItems()[i].action == false;
          input2.value = null;
        }
        else if(input2.value=='false'){
          this.getItems()[i].action == false;
          input2.value = null;
        }

         else {
          input2.value = null;
        }
      }
    }
  }
  ChangeColor(tbody: any, style: any, item: any) {
    this.desc = item.description;
    if (item.action) {
      this.act = 'Yes';
    } else if (!item.action) {
      this.act = 'No';
    }

    for (let i = 0; i < tbody.children.length; i++) {
      let element = tbody.children[i];
      element.style.backgroundColor = 'white';
    }
    style.backgroundColor = 'springgreen';
  }

  ChangeAction(tf: any) {
    if (tf.innerHTML == 'Yes') {
      tf.innerHTML = 'No';
    } else {
      tf.innerHTML = 'Yes';
    }
  }





}
