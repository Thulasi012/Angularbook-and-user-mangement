import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm }   from '@angular/forms';

@Component({
  selector: 'app-reusablebutton',
  templateUrl: './reusablebutton.component.html',
  styleUrls: ['./reusablebutton.component.css']
})
export class ReusablebuttonComponent implements OnInit {
  @Input() label: string;
// @Output() onClick = new EventEmitter<any>();
// @Output() onSelectedOption = new EventEmitter<string>();
// @Output() inputModelChange = new EventEmitter<string>();  
@Input() bookName: string;

  @Output() messageToEmit = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  // onClickButton(event) {
  //   this.onClick.emit(event);
  // }
  // search(event){

  //   this.inputModelChange.name;
  // }
  searchedBook(message:string){
    this.messageToEmit.emit(message)
    
  }

}


