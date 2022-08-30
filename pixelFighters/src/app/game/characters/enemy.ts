import { Character } from "./character";

import { ANIMSKEY, SKINS } from "../constants";
import * as Phaser from 'phaser';
import config from "../config2";

export class EnemyPlayer extends Character{
  
    speed!:number;
    attacking!:boolean;
    blocking!:boolean;

    prevTime:number = 0;
    timeElapsed:number = 0;


    attackDamage:number = 5;

    count:number = 0;
    constructor(scene:any, texture:any, character:any){
      super(scene, texture, 600, 250, 950, character);

      this.speed = 60;
      this.direction = 'left';
      
      this.count = 1;
    }

    
    takeDamage(damage:number):void{
      this.hp.decrease(damage);
      this.pushBack()
      this.stop();
      this.play(this.character.HURT,true);
      
      
      
      
    }

    pushBack():void{
      
      this.setVelocityX(0);
      this.setAccelerationX(0);

      if(this.direction == 'right'){
        this.y -= 25;
        this.x -= 70;

      }else{
        this.y -= 25;
        this.x += 70;
      }
      
    }

    isAttacking():boolean{
      return this.attacking;
    }

    isBlocking():boolean{
      return this.blocking;
    }
  
    decideMovement(character:any,time:number):void{
      
      this.timeElapsed = time - this.prevTime;

      if(this.isAlive()){
        this.count +=1;

      console.log(`count: ${this.count}`);

        if(this.count % 3 == 0 && this.timeElapsed >= 500){
          this.attacking = true;
          this.blocking = false;
          
          this.prevTime = time;
          this.stop();
          this.play(character.PUNCH);
        } else if(this.count % 5 == 0){
          this.attacking = false;
          this.blocking = true;

          this.count = 0;
          this.stop();
          this.play(character.BLOCK);
        }else{
          this.attacking = false;
          this.blocking = false;
          this.stop();
        }
      }else{
        console.log('dead');
        this.stop();
      }
    }
      

    strollRandomly(enemyCoordinate: number, character:any, time:number):string{

      let direction = 'left';
      let random = Phaser.Math.Between(0,config.width);
      console.log(`${enemyCoordinate} vs ${Math.floor(this.x)}`);
      console.log(this.speed);

      
      
      

      if(this.isAlive()){
        if(Math.floor(enemyCoordinate + 30) < Math.floor(this.x)){

          direction = 'left';
          this.flipX = true;
          this.setVelocityX(-1*this.speed);
          
          this.play(character.RUN, true);
          /*
          this.scene.time.addEvent({
            
            delay: 800,
            
            callback: ()=>{
                
            },
          });
          */
          console.log('left it is');
        
  
        }else if(Math.floor(enemyCoordinate - 30) > Math.floor(this.x)){
  
          direction = 'right';
          this.setVelocityX(this.speed);
          this.flipX = false;
          this.play(character.RUN, true);
          this.prevTime = time;
          console.log('right');
          
        }
        else{
          this.setVelocityX(0);
          this.play(character.IDLE, true);
          console.log('slow enemy');
          this.decideMovement(character,time);
        }
      }
      

      return direction;
      
    }

    
  }