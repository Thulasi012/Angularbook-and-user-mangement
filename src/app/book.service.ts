import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
import { Signup } from './signup';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [{
    bookId: 1,
    bookName: 'Advices',
    bookDescription: "Advices of life",
   bookAuthor: 'Thulasi',
}];
signup: Signup[] = [{
  username: 'Thulasi',
    emailId: 'thulai@gmail.com',
    password: 'thu123456',
}];


  constructor(private http:HttpClient) {
    
   }
   getAllbooks(): Observable<Book[]> {
     return this.http.get<Book[]>('http://localhost:3000/books');
  //   const books = new Observable(observer => {
  //     setTimeout(() => {
  //         observer.next(this.books);
  //     }, 1000);
  // });
  // return books;
  }
// signup():Observable<Signup[]>{
//   return this.http.post<Book>('');
//  }
}
