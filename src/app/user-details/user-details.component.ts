import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { Book } from '../book';
import { JSONplaceholderService } from '../services/jsonplaceholder.service';
import { User } from '../user';
import { UsercreateComponent } from './usercreate/usercreate.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User[] = [];
  us:User[]=[];
  settings = {
    actions: {
      position: 'right',
      edit: true,
      delete: true,
      add: true,
    },
    sort: true,
    edit: { confirmSave: true },
    add:{
      confirmCreate:true
     },
    columns: {
      userId: {
        title: 'ID',

      },
      userName: {
        title: 'UserName',

      },
      email: {
        title: 'Email',
      },
      bookName: {
        title: 'BookName',

      },
      id:{
        title:"id"
      }
      

      
      
    },
  };
  commModel: any;
  
  constructor(private userservice:JSONplaceholderService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.userservice.getAlluser().subscribe((data:User[])=>{
      this.user=data;
      console.log(this.user);
    
  });
  }
  onEditConfirm(user:User=new User()){
    
    console.log("edit")
    //event.confirm.resolve(event.newData);
    //console.log("usernew",event.newData);
    this.userservice.updateuser(user.data.id,user.newData).subscribe(data => {
     
      console.log(data)

  });
    // if (window.confirm('Are you sure you want to save?')) {
    //   event.newData['name'] += ' + added in code';
    //   event.confirm.resolve(event.newData);
    // } else {
    //   event.confirm.reject();
    // }
    this.dialog.open(UsercreateComponent)
    let dialogRef = this.dialog.open(UsercreateComponent, {
       data: {}
     })
     
     dialogRef.afterClosed().subscribe(res => {
     //received data from dialog-component
     console.log(res.data)
     })
     
      
    
    

  }
  addRecord(event){
    event.confirm.resolve(event.newData);
    console.log("usernew",event.newData);
    

    
    this.userservice.saveuser(event.newData).subscribe(data => {
      this.us=data;
      let dialogRef = this.dialog.open(UsercreateComponent, {
        data: {}
      })
      
      dialogRef.afterClosed().subscribe(res => {
      //received data from dialog-component
      console.log(res.data)
      })
      console.log(this.us);
    })
    // const subject = new Subject<User>();subject.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });
    // subject.next();

    // this.dialog.open(UsercreateComponent)
    // let dialogRef = this.dialog.open(UsercreateComponent, {
    //    data: {}
    //  })
    
      // if (window.confirm('Are you sure you want to create?')) {
      //   event.confirm.resolve(); 
      // } else {
      //   event.confirm.reject();
      // }
    
    
  }
  

}




