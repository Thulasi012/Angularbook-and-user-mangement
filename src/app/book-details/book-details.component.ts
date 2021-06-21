import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
import { JSONplaceholderService } from '../services/jsonplaceholder.service';
import { debounce } from 'rxjs/operators';
import {  interval } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  show:boolean ;
  books: Book[] = [];
  content: Book[];
  param1: any;
  
  myControl: any;
  autoCompleteList: any;
label="book";
  filtered: any;
  data1: any;
  book:Book[];
  searchbook: string;
  bo: (bookName: any) => any;
  filteredData: Book[];
  
  receivedChildMessage: string;
  constructor(private bookservice:JSONplaceholderService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    //getting search from url
    this.route.queryParams.subscribe(params => {
      this.data1=params
      this.searchedBook(this.data1);
      console.log("bookname from url",params);
    });
       
       //get AllbookData
    this.bookservice.getAllbooks().subscribe((data:Book[])=>{
      this.books=data;
     console.log("getAllbooks",this.books);
     this.book=this.books;
     console.log("bookname from service",this.book);

     this.bookservice.getbookbyname(this.data1).subscribe((data:Book[])=>{
       this.filtered=data;
        //this.filtered=this.filtered.filter(s=>s.data1.toLowerCase().indexOf(this.data1.toLowerCase())>=0)
this.filteredData=this.filtered.pipe(debounce(() => interval(500)))
       console.log("from search to method",this.data1);
       console.log("filteredbybook name",this.filteredData);
     })
     
    //  if(this.data1==this.book.map(this.bo=this.book.bookName)){
    //   console.log("searchedbook",this.bookName)
      
      
    // }
    // this.search(this.data1);
     //Firletring databased on search
     
   //  this.book=this.bookservice.bookName;
     //this.books=this.books.filter(s=>s.data1.toLowerCase().indexOf(this.data1.toLowerCase())>=0)
     //this.content=this.content.filter(s=>s.bookName===this.data1)
     //console.log("searchedbook",this.content);
     //this.searchbook(this.book);
    
  });
 
}
searchedBook(bookName:string) {
  console.log("searchedbook method",bookName)
  if(bookName!=null||bookName==""){
      this.searchbook=bookName;
        this.book=this.book.filter(s=> s.bookName.toLowerCase().indexOf(bookName.toLowerCase())>=0);
     console.log(this.book);
     
  }
  if(this.book.length==0)
     {
       this.show=true;
     }
     else{
      this.show=false;
     }
    
  }
  

    
  
     
 
 
}
  


// search(bookName:string){
//   if(bookName==this.bookservice.bookName){
//         console.log("searchedbook",bookName)
        
        
//       }
      
  
//  if(bookName!=null||bookName==""){
//      this.searchbook=bookName;
//     this.book=this.book.map(s=>{return s.bookName.toLowerCase().indexOf(bookName.toLowerCase())>=0})
//  console.log(this.book);

//   }

// searchbook(book){
//   if(this.book==this.data1){
//     console.log(this.bookservice.bookName)
//     return this.bookservice.bookName;
//   }
 

  
// (onClick)="functioncall()"






