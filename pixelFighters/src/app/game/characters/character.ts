import { HealthBar } from "./healthbar";
import * as Phaser from 'phaser';


export class Character extends Phaser.Physics.Arcade.Sprite{

    alive:boolean = false;
    hp!:any;
    direction:string = 'right';
    protected character!:any;
    constructor(scene:any, texture:any, x:any, y:any, healthPosition:number, character:any){
      super(scene, texture, x, y);
      this.setTexture(texture);
      this.setPosition(x,y);
      scene.add.existing(this);
      scene.physics.world.enableBody(this);
      this.alive = true;
  
  
      this.hp = new HealthBar(scene, healthPosition, 0);
      this.hp.draw();
      
      this.character = character;
    }
  
    override preUpdate (time:any, delta:any)
    {
        super.preUpdate(time, delta);
    }
    
    moveLeft():void{
      this.x -= 4;
      this.setOffset(20,10);
      this.flipX = true;
      
    }

    moveRight():void{
      this.x += 4;
      this.setOffset(0,10);
      this.flipX = false;
    }

    jump():void{
      this.y -= 4;
      
    }

    isAlive():boolean{
      if(this.hp.isEmpty()){
        return false;
      }
      return true;
    }
  


    
  
    chilling():void{
      this.hp.decrease(0);
    }
  
    
  }