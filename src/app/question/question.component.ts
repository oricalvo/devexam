import {Component, Input, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() question: Question;

  constructor(private http: Http) {
  }

  hasHTMLAnswer(index) {
    return this.question.answersHTML && this.question.answersHTML[index];
  }

  getAnswerLetter(index) {
    return String.fromCharCode('A'.charCodeAt(0) + index);
  }
}

export interface Question {
  title: string;
  code: string;
  answers: string[];
  answersHTML: string[];
}
