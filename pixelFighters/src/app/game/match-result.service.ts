import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


export class MatchResultService {

  static survivor:string = '';
  survivorObservable = new Subject<any>();
  constructor() { 


  }

  getSurvivor(){
    this.survivorObservable.next(MatchResultService.survivor);
    return this.survivorObservable.asObservable();

  }

  setSurvivor(winner:string){
    console.log(`-winner: ${winner}`);
    MatchResultService.survivor = winner;
    this.survivorObservable.next(MatchResultService.survivor);
  }

}
