import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
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

  private PlayerClasses: string[] = ['forward', 'midfielder', 'defender', 'goalkeeper'];
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

  openedInput(PlayerClass: string, index: number): void {
    this.closedAllInputs();
    const matInput: HTMLElement = <HTMLElement>document.getElementById(`${PlayerClass}_${index}`);
    const playerButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById(`button_${PlayerClass}_${index}`);
    matInput.style.display = 'flex';
    playerButton.style.backgroundColor = 'red';
  }

  closedAllInputs(): void {
    this.PlayerClasses.forEach(
      (PlayerClass: string) => {
        this.inputIndex.forEach(
          (index: number) => {
            const matInput: HTMLElement = <HTMLElement>document.getElementById(`${PlayerClass}_${index}`);
            const playerButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById(`button_${PlayerClass}_${index}`);
            const input: HTMLInputElement = <HTMLInputElement>document.getElementById(`input_${PlayerClass}_${index}`);
            matInput ? matInput.style.display = 'none' : null;
            playerButton ? playerButton.style.backgroundColor = 'black' : null;
            if (input && input.validity.valid) {
              playerButton.style.backgroundColor = '#23DC3D';
            }
          }
        );
      });
  }

  compositionCheck(currentGame: Game) {
    return true;
  }
}
