//File : app/child.components.ts
 
import { Component, EventEmitter } from '@angular/core';
 
@Component({ 
selector: 'child-component', 
         styles : [`
 
                     .child {
 
                                 background : #aaa;
 
                                 padding: 10px;
 
                     }
 
         `],
 
template: `
 
                     <div class="child">
 
                                 <h2>{{name}}</h2>
                                <h2>{{title}}</h2>
                                <span (click)='onClick()'>Click me please!</span>  
                     </div>
 
         `
 ,inputs:['title']
 ,outputs:['notify']
 
})
 
export class ChildComponent {

    notify = new EventEmitter<string>();
         //let title:string= "";
         name = "Child Component"
 

 onClick() {
    this.notify.emit('Click from nested component');
  }
}