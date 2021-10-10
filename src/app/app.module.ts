import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { UserslistComponent } from './userslist/userslist.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
 AppComponent,
routingComponents,
UserslistComponent,
SigninComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  
      ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
