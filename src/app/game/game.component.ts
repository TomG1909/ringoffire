import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { DialogAlertComponent } from '../dialog-alert/dialog-alert.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game = new Game;
  playerAdded: boolean = false;



  constructor(private router: Router, private route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params) => {
      console.log(params);
    })
    this.firestore
      .collection('games')
      .valueChanges()
      .subscribe((game) => {
        console.log('New Game', game)
      });
  }

  newGame() {
    this.game = new Game();
    //this.firestore
    //.collection('games')
    //.add(this.game.toJson());

  }

  takeCard() {
    if (!this.pickCardAnimation && this.playerAdded) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;

      console.log(this.currentCard);
      console.log(this.game);
      console.log(this.playerAdded);
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;

      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 500);
    } else if (!this.playerAdded) {
      this.openAlert();
    }
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(DialogAddPlayerComponent, {

    });

    dialogRef.afterClosed().subscribe(name => {
      if (name && name.length > 0) {
        this.game.players.push(name);
        this.playerAdded = true;
      }
    });
  }

  openAlert() {
    this.dialog.open(DialogAlertComponent);
  }

}





