import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Game } from '../models/game/game';

@Component({
  selector: 'app-guess-composition',
  templateUrl: './guess-composition.component.html',
  styleUrls: ['./guess-composition.component.scss']
})
export class GuessCompositionComponent {

  @Output('onSubmit')
  public onSubmit: EventEmitter<any> = new EventEmitter();

  public forwards: FormArray = new FormArray([
    new FormControl(),
    new FormControl()
  ]);

  public midfielders: FormArray = new FormArray([
    new FormControl(),
    new FormControl(),
    new FormControl(),
    new FormControl()
  ]);

  public defenders: FormArray = new FormArray([
    new FormControl(),
    new FormControl(),
    new FormControl(),
    new FormControl()
  ]);

  public compositionForm: FormGroup = new FormGroup({
    forwards: this.forwards,
    midfielders: this.midfielders,
    defenders: this.defenders,
    goalkeeper: new FormControl('')
  });

  private inputClasses: string[] = ['forward', 'midfielder', 'defender', 'goalkeeper'];
  private inputIndex: number[] = Array.from({ length: this.defenders.length }, (v, i) => i);

  getForwards(index: number): FormControl {
    return this.forwards.controls[index] as FormControl;
  }

  getMidfielders(index: number): FormControl {
    return this.midfielders.controls[index] as FormControl;
  }

  getDefenders(index: number): FormControl {
    return this.defenders.controls[index] as FormControl;
  }

  openedInput(inputClass: string, index: number): void {
    this.closedAllInputs();
    const input = <HTMLInputElement>document.getElementById(`${inputClass}_${index}`);
    const button = <HTMLButtonElement>document.getElementById(`button_${inputClass}_${index}`);
    input.style.display = 'flex';
    button.style.display = 'none';
  }

  closedAllInputs(): void {
    this.inputClasses.forEach(
      (inputClass: string) => {
        this.inputIndex.forEach(
          (index: number) => {
            const input = <HTMLInputElement>document.getElementById(`${inputClass}_${index}`);
            const button = <HTMLButtonElement>document.getElementById(`button_${inputClass}_${index}`);
            input ? input.style.display = 'none' : null;
            button ? button.style.display = 'flex' : null;
          }
        );
      });
  }

  compositionCheck(currentGame: Game) {
    return true;
  }
}
