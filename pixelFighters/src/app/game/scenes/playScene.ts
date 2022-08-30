import { PlayerOne } from "../characters/player";
import { EnemyPlayer } from "../characters/enemy";
import { SKINS, ANIMSKEY } from "../constants";
import { createCharacterAnimations } from "../helpers/animations";
import { loadBikerAssets, loadCyborgAssets, loadPunkAssets } from "../helpers/characterLoaders";
//import CollisionHandler, { hurtEnemy } from "../helpers/collisionHandler";
import { CharacterService } from "../character.service";
import CollisionHandler from "../helpers/collisionHandler";
import { Inject, OnInit } from "@angular/core";
import { MatchResultService } from "../match-result.service";
import { CharacterSelectionService } from "../character-selection";


export default class PlayScene extends Phaser.Scene{

  player!:any;
  playerXLocation!:number;
  enemy!:any;
  cursor!:any;

  matchResultService!:any;

  playerCharacterSub!:any;
  playerCharacter!:any;

  enemyCharacterSub!:any;
  enemyCharacter!:any;

  collisionPlayer!:any;
  collisionEnemy!:any;

  constructor() {
    super({ key: 'PlayScene' })
    console.log('halu lowie 3');
    /*
    const characterService = new CharacterService();
    this.playerCharacterSub = characterService.getPlayerCharacter().subscribe((playerCharacter:any) =>{
      
      this.playerCharacter = playerCharacter;
    });

    this.enemyCharacterSub = characterService.getEnemyCharacter().subscribe((enemyCharacter:any) =>{
      this.enemyCharacter = enemyCharacter;
    });
    */

    

    


    

    
  }




  create() {
    console.log('create method');

    const characterSelection = new CharacterSelectionService();

    this.playerCharacter = characterSelection.getCharacterSelected();

    this.enemyCharacter = characterSelection.getEnemyCharacter();

    console.log(`chosen: ${this.playerCharacter.CHARACTER}`);
   

    let background = this.add.image(0,0,SKINS.BACKGROUND);
    background.setOrigin(0,0);
    background.scale = 2;

    /*
    createCharacterAnimations(this,SKINS.BIKER);
     
    createCharacterAnimations(this,SKINS.CYBORG);
    */

    createCharacterAnimations(this,this.playerCharacter);
     
    createCharacterAnimations(this,this.enemyCharacter);

    
     
    this.enemy = new EnemyPlayer(this, this.enemyCharacter.CHARACTER, this.enemyCharacter);
    this.enemy.setScale(3);
    this.enemy.flipX = true;
    this.enemy.setOffset(20, 30);
    this.enemy.setCollideWorldBounds(true);
    this.enemy.play(this.enemyCharacter.IDLE);
   
    this.player = new PlayerOne(this,this.playerCharacter.CHARACTER, this.playerCharacter);
    this.player.setScale(3);
    this.player.setOffset(0, 30);
    this.player.setCollideWorldBounds(true);
    this.player.play(this.playerCharacter.IDLE);

    this.cursor = this.input.keyboard.createCursorKeys();

    /*
    this.physics.add.overlap(this.player,this.enemy,hurtEnemy);
    this.physics.add.overlap(this.enemy,this.player,hurtEnemy);
    */

    this.collisionPlayer = new CollisionHandler(this,this.player,this.enemy);
    this.collisionEnemy = new CollisionHandler(this,this.enemy,this.player);
    
  }

  
  override update(time: number, delta: number): void {
    this.playerXLocation= this.player.checkMovement(this.cursor);
    this.player.animationMovement();
    this.enemy.strollRandomly(this.playerXLocation, this.enemyCharacter, time);
    this.moveToEnding(this.player.isAlive(),this.enemy.isAlive());
    
  }


  moveToEnding(playerIsAlive:boolean, enemyIsAlive:boolean):void{
    this.matchResultService = new MatchResultService();
    if(playerIsAlive === false){
      console.log('enemy win');
      const enemyWinner:string = 'enemy';
      this.matchResultService.setSurvivor('enemy');
      this.scene.start('EndingScene');
    }
    else if(enemyIsAlive === false){
      console.log('player win');
      this.matchResultService.setSurvivor('player');
      this.scene.start('EndingScene');
    }
    else{
      console.log(`fight is not done ${playerIsAlive} - ${enemyIsAlive}`);
    }
    
  }
    
}
