import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CharacterSelectionService } from './character-selection';
import { SKINS } from './constants';

export class CharacterService {

  selectedCharacterSub!:any;

  selectedCharacter:any = SKINS.BIKER;
  selectedCharacterObservable = new BehaviorSubject<any>([]);

  enemyCharacter:any = SKINS.CYBORG;
  enemyCharacterObservable = new BehaviorSubject<any>([]);
  
  constructor() { 
    


  }

  getPlayerCharacter(){
    console.log('in getplayer');
    this.selectedCharacterObservable.next(this.selectedCharacter);
    return this.selectedCharacterObservable.asObservable();
  }

  setPlayerCharacter(character:any){
    this.selectedCharacter = character;
    this.selectedCharacterObservable.next(this.selectedCharacter);
  }

  getEnemyCharacter(){
    this.enemyCharacterObservable.next(this.enemyCharacter);
    return this.enemyCharacterObservable.asObservable();
  }

  setEnemyCharacter(character:any){
    this.enemyCharacter = character;
    this.enemyCharacterObservable.next(this.enemyCharacter);
  }
}
