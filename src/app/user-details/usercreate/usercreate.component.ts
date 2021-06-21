import { Component, Input, OnInit } from '@angular/core';
import { JSONplaceholderService } from 'src/app/services/jsonplaceholder.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.css']
})
export class UsercreateComponent implements OnInit {
  @Input()users: User;
  user: User[] = [];
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

      }
      

      
      
    },
  };
  constructor(private userservice:JSONplaceholderService) { }

  ngOnInit(): void {
    this.userservice.getAlluser().subscribe((data:User[])=>{
      this.user=data;
      console.log(this.user);
    
  });
  }

}
