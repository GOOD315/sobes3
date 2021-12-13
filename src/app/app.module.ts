import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { Globals } from './globals';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { MenubarModule } from 'primeng/menubar';
import { AllCoursesService } from './services/all-courses.service';
import { DropdownModule } from 'primeng/dropdown';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MyCoursesComponent } from './user-courses/my-courses.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { UserProgramComponent } from './user-program/user-program.component';
import { UserProgramService } from './services/user-program.service';

@NgModule({
  declarations: [
    AppComponent,
    AllCoursesComponent,
    MainmenuComponent,
    LoginComponent,
    MainComponent,
    MyCoursesComponent,
    UserProgramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataViewModule,
    FormsModule,
    MenubarModule,
    DropdownModule,
    HttpClientModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    CalendarModule,
    RadioButtonModule,
    InputTextModule,
    MessageModule,
    MessagesModule,
    ReactiveFormsModule,
    InputTextareaModule
  ],
  providers: [Globals, AllCoursesService, UserProgramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
