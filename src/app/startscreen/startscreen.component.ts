import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent implements OnInit {

  constructor(private router: Router, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  newGame() {
    //Start Game
    let game = new Game();

    this.firestore
      .collection('games')
      .add(game.toJson())
      .then((gameinfo) => {

        this.router.navigateByUrl('/game/' + gameinfo.id);

      })


  }

}
