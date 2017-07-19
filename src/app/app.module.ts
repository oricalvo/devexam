import {BrowserModule, SafeHtml} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import {SafeHtmlPipe} from "./pipes/safeHtml.pipe";
import {MdButtonModule, MdCardModule, MdCheckboxModule, MdRadioButton, MdRadioModule} from '@angular/material';
import 'hammerjs';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    SafeHtmlPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule,
    MdRadioModule,
    MdCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
