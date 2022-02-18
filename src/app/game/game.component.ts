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

  game: Game = new Game;

  gameId: string;



  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params: any) => {
      console.log(params.id);
      this.gameId = params.id;

      this.firestore
        .collection('games')
        .doc(this.gameId)
        .valueChanges()
        .subscribe((game: any) => {
          console.log('New Game', game)
          this.game.currentPlayer = game.currentPlayer;
          this.game.stack = game.stack;
          this.game.playedCards = game.playedCards;
          this.game.players = game.players;
          this.game.pickCardAnimation = game.pickCardAnimation;
          this.game.currentCard = game.currentCard;
          this.game.playerAdded = game.playerAdded

        });
    })

  }

  newGame() {

  }

  takeCard() {
    if (!this.game.pickCardAnimation && this.game.playerAdded) {
      this.game.currentCard = this.game.stack.pop();
      this.game.pickCardAnimation = true;
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      this.updateGame();

      setTimeout(() => {
        this.game.playedCards.push(this.game.currentCard);
        this.game.pickCardAnimation = false;
        this.updateGame();
      }, 700);
    } else if (!this.game.playerAdded) {
      this.openAlert();
    }
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(DialogAddPlayerComponent, {

    });

    dialogRef.afterClosed().subscribe(name => {
      if (name && name.length > 0) {
        this.game.players.push(name);
        this.game.playerAdded = true;
        this.updateGame();
        console.log(this.game.playerAdded)
      }
    });
  }

  openAlert() {
    this.dialog.open(DialogAlertComponent);
  }

  updateGame() {
    this.firestore
      .collection('games')
      .doc(this.gameId)
      .update(this.game.toJson());
  }

}





