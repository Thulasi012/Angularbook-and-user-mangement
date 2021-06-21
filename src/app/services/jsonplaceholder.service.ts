import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Book } from '../book';
import { Signup } from '../signup';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class JSONplaceholderService {
  bookName: any;

  constructor( private http:HttpClient) { }
  subject = new Subject<void>();
  subjectcast=this.subject.asObservable();
  getAllbooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books');
  }
  getAlluser(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/user');
  }
  getbookbyname(bookName:any): Observable<any>{
    console.log("i am in service",bookName);
    //let params1=new HttpParams().set('bookname',bookName);
    let params1="?q="+bookName;
    let book=params1;
    console.log("param",params1)
    //console.log( "bookservice",this.http.get("http://localhost:3000/books?q="+bookName))  ;
     return this.http.get("http://localhost:3000/books?q"+book)
    }
    saveuser(user):Observable<any> {
      //var user:User;
     let users=this.subject.next(user);
     console.log( "using subject",users);
    
     
      //user={userId:userid ,userName:username,email:emailid ,bookname:bookname };
      return this.http.post<any>("http://localhost:3000/user", user)
      
    }
    updateuser(id:number,user:any): Observable<Object> {
    
      return this.http.put<any>(" http://localhost:3000/user/"+id,user);
      
    
  }
}
