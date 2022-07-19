import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-dialog-add-player',
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})


export class DialogAddPlayerComponent implements OnInit {
  allPictures = ['girl_pink.png', 'girl.png', 'man_v.png', 'man.png', 'music.png', 'ninja.png', 'people.png', 'punk.png', 'woman_bl.png', 'woman.png'];
  game: Game = new Game;
  gameId: string;

  randomImage = this.allPictures[Math.floor(Math.random() * this.allPictures.length)];

  @Input() type: 'submit';

  @HostListener('document:keydown.enter')
  onEnter() {
    // function  dialogRef.afterClosed().subscribe....
  }
  name: string = '';
  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) { }

  ngOnInit(): void {
  }
  onNoClick() {
    this.dialogRef.close();

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



