import { Character } from "./character";
import { ANIMSKEY } from "../constants";
import * as Phaser from 'phaser';


export class PlayerOne extends Character{
  
    upButton!:any;
    leftButton!:any;
    rightButton!:any;
    attackButton!:any;
    blockButton!:any;

    attackDamage:number = 3;
    

    constructor(scene:any, texture:any, character:any){
      super(scene, texture, 400, 250, 0, character);
      

      this.upButton= scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      this.leftButton= scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this.rightButton= scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
      this.attackButton= scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
      this.blockButton= scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
        
      this.character = character;
      this.direction = 'right';
    }

    
    takeDamage(damage:number):void{
      this.hp.decrease(damage);
      this.play(this.character.HURT);
      
      
      
      
    }

    isAttacking():boolean{
      if(this.attackButton.isDown){
        return true;
      }
      return false;
    }

    isBlocking():boolean{
      if(this.blockButton.isDown){
        return true;
      }
      return false;
    }


    checkMovement(cursor:any):number{
      
      if(this.isAlive()){
        
        if (this.leftButton.isDown)
        {
          this.direction = 'left';
          this.x -= 4;
          this.setOffset(20,30);
          this.flipX = true;
            
        }
        else if (this.rightButton.isDown )
        {
          this.direction = 'right';
          this.x += 4;
          this.setOffset(0,30);
          this.flipX = false;
        }

        if (this.upButton.isDown )
        {

          this.y -= 4;
          console.log('jumpy');
        }
      }

      return this.x;

    }

    animationMovement(){
      if(this.isAlive()){
        if(Phaser.Input.Keyboard.JustDown(this.leftButton)){
          this.anims.play(this.character.RUN);
        }
        if(Phaser.Input.Keyboard.JustDown(this.rightButton)){
          this.anims.play(this.character.RUN);
        }
        if(Phaser.Input.Keyboard.JustDown(this.upButton)){
          this.anims.play(this.character.JUMP);
        }
        if(Phaser.Input.Keyboard.JustDown(this.blockButton)){
          this.anims.play(this.character.BLOCK);
        }
        if(Phaser.Input.Keyboard.JustDown(this.attackButton)){
          this.anims.play(this.character.PUNCH);
        }
        
        if(Phaser.Input.Keyboard.JustUp(this.leftButton)){
          this.anims.play(this.character.IDLE);
        }
        if(Phaser.Input.Keyboard.JustUp(this.rightButton)){
          this.anims.play(this.character.IDLE);
        }
        if(Phaser.Input.Keyboard.JustUp(this.upButton)){
          this.anims.play(this.character.IDLE);
        }
        if(Phaser.Input.Keyboard.JustUp(this.blockButton)){
          this.anims.play(this.character.IDLE);
        }
        if(Phaser.Input.Keyboard.JustUp(this.attackButton)){
          this.anims.play(this.character.IDLE);
        }
      }
      
    }
}