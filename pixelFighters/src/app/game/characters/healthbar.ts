import * as Phaser from 'phaser';


export class HealthBar {

    bar!:any;
    x!:any;
    y!:any;
    value:number = 100;
    p!:any;
    constructor (scene:any, x:any, y:any)
    {
        this.bar = new Phaser.GameObjects.Graphics(scene);
  
        this.x = x;
        this.y = y;
        this.value = 100;
        this.p = 240;
  
        this.draw();
  
        scene.add.existing(this.bar);
    }
  
    decrease (amount:number)
    {
        this.value -= amount;
        //console.log(`health ${this.value}`);
        if (this.value < 0)
        {
            this.value = 0;
        }
  
        this.draw();
  
        return (this.value === 0);
    }
  
    isEmpty():boolean{
      if(this.value === 0){
        return true;
      }
      return false;
    }
    draw ()
      {
          this.bar.clear();
  
        //  BG
        this.bar.fillStyle(0x000000);
        this.bar.fillRect(this.x, this.y, 250, 45);
  
        //  Health
  
        this.bar.fillStyle(0xffffff);
        this.bar.fillRect(this.x + 5, this.y + 5, this.p, 35);
  
        if (this.value < 30)
        {
            this.bar.fillStyle(0xff0000);
        }
        else
        {
            this.bar.fillStyle(0x00ff00);
        }
  
        var d = this.p * (this.value/100);
  
        this.bar.fillRect(this.x + 5, this.y + 5, d, 35);
    }
  
  }