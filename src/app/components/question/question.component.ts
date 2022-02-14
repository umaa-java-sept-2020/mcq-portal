import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  min: number = 99;
  sec: number = 60;
  btn: number[] = [];
  interval: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.min >= 0) {
        this.min--;
      }

    }, 60000);
    setInterval(() => {
      if (this.sec > 0) {
        this.sec--;
      }
      else
        this.sec = 59;
    }, 1000)

    for (let i = 1; i <= 100; i++) {
      this.btn.push(i);
    }
    console.log(this.btn);


  }
  questions = [
    {
      "questionId": "1",
      "questionDescription": "Number of primitive data types in Java are?",
      "answerLabel": "8",
      "optionLabel": [
        {
          "optionDescription": "6"
        },
        {
          "optionDescription": "7",
        },
        {
          "optionDescription": "8",
        },
        {
          "optionDescription": "9",
        }
      ]
    },
    {
      "questionId": "2",
      "questionDescription": "What is the size of float and double in java?",
      "answerLabel": "32 and 64",
      "optionLabel": [
        {
          "optionDescription": "32 and 64"
        },
        {
          "optionDescription": "32 and 32"
        },
        {
          "optionDescription": "64 and 64"
        },
        {
          "optionDescription": "64 and 32"
        },
      ]
    },
    {
      "questionId": "3",
      "questionDescription": "Automatic type conversion is possible in which of the possible cases?",
      "answerLabel": "Int to long",
      "optionLabel": [
        {
          "optionDescription": "Byte to int"
        },
        {
          "optionDescription": "Int to long"
        },
        {
          "optionDescription": "Long to int"
        },
        {
          "optionDescription": "short to int"
        },
      ]
    },
    {
      "questionId": "4",
      "questionDescription": "When an array is passed to a method, what does the method receive?",
      "answerLabel": "The reference of the array",
      "optionLabel": [
        {
          "optionDescription": "The reference of the array"
        },
        {
          "optionDescription": "A copy of the array"
        },
        {
          "optionDescription": "Length of the array"
        },
        {
          "optionDescription": "Copy of the element"
        },

      ]
    }
    //   {
    //     "examinationId":"",
    //     "questions":[
    //         {
    //             "questionId":"",
    //             "questionDescription":"",
    //             "answerLabel":"",
    //             "optionLabel":[
    //                 {
    //                     "optionLabel":"",
    //                     "optionDescription":""
    //                 }
    //             ]
    //         }
    //     ]
    // }
  ]
  display: any = this.questions[0];
  a: any = this.display.optionLabel[0].optionDescription;
  b: any = this.display.optionLabel[1].optionDescription;
  c: any = this.display.optionLabel[2].optionDescription;
  d: any = this.display.optionLabel[3].optionDescription;
  onClickButton(button: number) {
    this.display = this.questions[button - 1];
    this.a = this.display.optionLabel[0].optionDescription;
    this.b = this.display.optionLabel[1].optionDescription;
    this.c = this.display.optionLabel[2].optionDescription;
    this.d = this.display.optionLabel[3].optionDescription;
    console.log("a :",this.a," b : ",this.b ," c : ",this.c," d: ", this.d);

  }
  onSubmit(){

  }


}
