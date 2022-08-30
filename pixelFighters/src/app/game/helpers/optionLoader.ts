import config from "../config2";
import { SKINS } from "../constants";


export class OptionLoader{

    option!:any;
    scene!:any;
    constructor(scene:Phaser.Scene, x:any, y:any, texture:any){

        this.scene = scene;

        this.option = this.scene.add.sprite(x , y, texture);

        this.option.setScale(3);
        this.option.play(texture);
        this.option.setInteractive();

    }

    setupOnHover(tint:any):void{
        this.option.on('pointerover',()=>{
            this.option.setScale(3.2);
            this.option.setTint(tint);
            
        });

        this.option.on('pointerout',()=>{
            this.option.setScale(3);
            this.option.setTint();
        });
    }

    onClick(selectionService:any, skinObj:any):void{
        this.option.on('pointerdown',()=>{
            selectionService.setCharacterSelected(skinObj);
            this.scene.scene.start('PlayScene');
          });
    }
}