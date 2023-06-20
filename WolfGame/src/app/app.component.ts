import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WolfGame';
  players: Player[] = [
    { name: '', score: 0 },
    { name: '', score: 0 },
    { name: '', score: 0 },
    { name: '', score: 0 },
    { name: '', score: 0 }
  ];

  addScore(playerIndex: number): void {
    this.players[playerIndex].score++;
  }
}

interface Player {
  name: string;
  score: number;
}
