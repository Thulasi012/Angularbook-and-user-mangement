import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CoreModule } from './core/core.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { UsercreateComponent } from './user-details/usercreate/usercreate.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    BookDetailsComponent,
    UserDetailsComponent,
    UsercreateComponent,
    
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MatDialogModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    UsercreateComponent
  ],
  exports: [
    MatDialogModule
  ],
  
})
export class AppModule { }
