import { Component } from '@angular/core';
import {Question} from "./question/question.component";
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  questions: Question[];
  current: Question;
  index: number;

  constructor(private http: Http) {
    this.index = 0;
  }

  async ngOnInit() {
    const res = await this.http.get("/api/question").toPromise();
    this.questions = res.json();
    this.index = 0;
    this.current = this.questions[this.index];
  }

  prev() {
    if(this.index==0) {
      return;
    }

    --this.index;
    this.current = this.questions[this.index];
  }

  next() {
    if(this.index==this.questions.length-1) {
      return;
    }

    ++this.index;
    this.current = this.questions[this.index];
  }
}
