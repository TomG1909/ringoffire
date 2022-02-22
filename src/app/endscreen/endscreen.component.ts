import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-endscreen',
  templateUrl: './endscreen.component.html',
  styleUrls: ['./endscreen.component.scss']
})
export class EndscreenComponent implements OnInit {

  constructor(private router: Router, private firestore: AngularFirestore) { }

  ngOnInit(): void {

  }
  restartGame() {
    //Restart Game

    let game = new Game();



    this.firestore
      .collection('games')
      .add(game.toJson())
      .then((gameinfo) => {

        this.router.navigateByUrl('/game/' + gameinfo.id);

      })



  }


}
