import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'Chris Bohannon';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}