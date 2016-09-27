import { Component } from '@angular/core';
 

 
@Component({
 
  selector: 'my-app',

   template: `
 
<div class="parent">
 
    <h1>Author : {{name}}</h1>
 
       <child-component (notify)="onNotify($event);" [title]='childTitle'></child-component>
 
</div>
 
  ` 
})
 
export class AppComponent {
 
name = "sergii"
 childTitle:string = 'This text is passed to child';

 onNotify(message:string):void {
    alert(message);
  }
}