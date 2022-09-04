
import config from "../config2";
import { SKINS, ANIMSKEY } from "../constants";

export default class InstructionScene extends Phaser.Scene {


  constructor() {
    super({ key: 'InstructionScene' })

  }

  preload() {
    console.log('preload method');
    

    this.load.image('controls',"assets/controls.png");
    this.load.image('gotItBtn',"assets/gotIt_btn.png");
    
  }

  create() {

    console.log('create method');
    let background = this.add.image(0,0,SKINS.BACKGROUND);
    background.setOrigin(0,0);
    background.scale = 2;

    this.add.text(config.width/2.5,config.height/6,'Control Keys',{
        fontSize: '30px',
        color:'white',
        fontFamily: 'Verdana'
    });

    let controlBanner = this.add.image(config.width/3,config.height/3,'controls');
    controlBanner.setOrigin(0,0);
    controlBanner.scale = 1/5;


    let proceedBtn = this.add.image(config.width/2.5,config.height/1.3,'gotItBtn');
    proceedBtn.setOrigin(0,0);
    proceedBtn.scale = 1/5;

    proceedBtn.setInteractive();


    proceedBtn.on('pointerover',(e:any)=>{
        proceedBtn.setScale(1/4);
        
    });

    proceedBtn.on('pointerout',()=>{
        proceedBtn.setScale(1/5);
        
    });

    proceedBtn.on('pointerdown',(e:any)=>{
      console.log(e);
      this.scene.start('MenuScene');
    },this);
    // 
    
  }
    
}
