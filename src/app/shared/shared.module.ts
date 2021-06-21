import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusablebuttonComponent } from './reusablebutton/reusablebutton.component';



@NgModule({
  declarations: [
    ReusablebuttonComponent
  ],
  imports: [
    CommonModule
  ],
  
  exports:[
    ReusablebuttonComponent
  ]
})
export class SharedModule { }
