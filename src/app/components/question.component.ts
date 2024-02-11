import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question, Option } from '../models/Question';


@Component({
  selector: 'question',
  template: `
     <div class="question">
      <div class="text">
        {{ question.question }}
      </div>
      <div class="options">
        <div   [class.hoverable]="forWhat !== 'answer'"  [class.correct]="isCorrect(option)" [class.wrong]="isWrong(option)" [class.selected]="isAttempted(option)" (click)="selectOption(question, option.id)"  *ngFor="let option of question.options;let i=index" class="option">
          <div *ngIf="option.image" class="option-image-container">
            <img  [src]="option.image" alt="{{ option.name }}" alt="">
          </div>
          <h4 class="option-text">{{ option.name }}</h4>
        </div>
      </div>
    </div>
  `,
  styles: [`
      .question{
          margin-bottom:20px;
          padding: 18px;
          border-radius: 10px;
          color: white;
          background-color: #19102F;
          .text{
              font-size: 1.5rem;
          }
          .options{
              margin-top: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;
              .option{
                display: flex;
                cursor: pointer;
                border: #19102F 8px solid;
                font-size: 1rem;
                padding: 10px;
                border-radius: 4px;
                color: #322f35;
                margin: 10px;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                &.hoverable:hover {
                   border: #683FB8 8px solid;
                }
                &.selected{
                      border: #683FB8 8px solid;
                  }
                &.correct {
                   border: #4CAF50 8px solid; /* Green border for correct answers */
                }
                &.wrong {
                   border: #F44336 8px solid; /* Red border for wrong answers */
                }

                  .option-text{
                    padding: 8px;
                    background-color: #683FB8;
                    color: #fff;
                    font-weight: 700;
                    border-radius: 10px;
                  }
                  .option-image-container{
                    width: 120px;
                    height: 120px;
                    margin-bottom: 10px;
                    img{
                      width: 100%;
                      height: 100%;
                      border-radius: 10px;
                    }
                  }

              }
          }
      }
  `]
})
export class QuestionComponent {
  @Input() forWhat! : "creation" | "attempt" | "answer";
  @Input() question! :Question;
  selectOption(question:Question, optionId:number){
    if(this.forWhat=="answer"){
      return;
    }
    if(this.forWhat=="creation"){
      question.answerOption = optionId;
    }else{
      question.selectedOption = optionId;
    }
  }

  isAttempted(option:Option){
    if(this.forWhat=="creation"){
        return option.id == this.question.answerOption;
    }
    else if(this.forWhat=="attempt"){
       return option.id == this.question.selectedOption;
    }
    else{
      return option.id == this.question.answerOption;
    }
  }
  isCorrect(option: Option): boolean {
   if(this.forWhat=="answer"){
    return ((option.id == this.question.answerOption) && (option.id == this.question.selectedOption));
   }
   return false;
  }

  isWrong(option: Option): boolean {
    if(this.forWhat=="answer"){
      return ((option.id != this.question.answerOption) && (option.id == this.question.selectedOption));
     }
     return false;
  }
}
