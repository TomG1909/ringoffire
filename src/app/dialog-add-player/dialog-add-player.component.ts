import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-dialog-add-player',
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})


export class DialogAddPlayerComponent implements OnInit {

  @Input() type: 'submit';


  name: string = '';
  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) { }

  @HostListener('window:keyup.Enter', ['$event'])
  onEnter(event: KeyboardEvent): void {
    this.close()
  }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close(true);

  }


  /*
    handleSubmit(e) {
      e.preventDefault();
  
  
  
    }
  
    handleKeyUp(e) {
      if (e.keyCode === 13) {
        this.handleSubmit(e);
      }
  */
}



