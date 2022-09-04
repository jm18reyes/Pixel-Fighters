import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';
import config2 from './config2';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  phaserGame!: Phaser.Game;
  constructor() {
    
  }

  ngOnInit(): void {

    this.phaserGame = new Phaser.Game(config2);

    
  }

}
