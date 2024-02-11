import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-model',
  template: `
    <div class="modal-overlay">
      <div class="modal">
        <input type="text" placeholder="Enter Your Name" id="name" [(ngModel)]="name" />
        <button [disabled]="!name" (click)="submitName()">Submit</button>
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay {
      z-index:99;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .modal {
      background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    min-width: 480px;
      input{
        padding: 10px;
        background-color: rgb(157 142 142 / 7%);
        border-radius: 10px;
        border: 0px;
        margin:5px;
        color:#444444;
      }
      button{
        border:0px;
        padding:10px;
        border-radius:10px;
        background-color: #683FB8 ;
        color: #ffffff;
        cursor: pointer;
        &:focus{
          outline:0px;
        }
        &:disabled{
          opacity : 0.5;
        }
      }
    }
  `],
})
export class InputModelComponent {
  name: string = '';
  @Output() emitName = new EventEmitter<string>();
  submitName() {
    this.emitName.emit(this.name);
  }
}
