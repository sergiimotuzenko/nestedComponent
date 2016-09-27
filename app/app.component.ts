import { Component } from '@angular/core';
 
@Component({
 
selector: 'my-app',
 
         styles : [`
 
                     .parent {
 
                                 background : #c7c7c7;
 
                                 color : #000;
 
                                 padding: 20px;
 
                     }
 
         `],
 
template: `
 
                     <div class="parent">
 
                                 <h1>{{name}}</h1>
 
                     </div>
 
         `
 
})
 
export class AppComponent {
 
         name = "Parent Component"
 
}