import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndscreenComponent } from './endscreen/endscreen.component';
import { GameComponent } from './game/game.component';
import { StartscreenComponent } from './startscreen/startscreen.component';

const routes: Routes = [
  { path: '', component: StartscreenComponent },
  { path: 'game/:id', component: GameComponent },
  { path: '', component: EndscreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
