import config from "../config2";
import { SKINS, ANIMSKEY } from "../constants";
import { loadBikerAssets, loadCyborgAssets, loadPunkAssets } from "../helpers/characterLoaders";
import { MatchResultService } from "../match-result.service";

export default class EndingScene extends Phaser.Scene {


  matchResultSub!:any;
  matchResult:string = 'tie';
  constructor() {
    super({ key: 'EndingScene' })


    

  }


  create() {


    this.matchResult = MatchResultService.survivor;

    let background = this.add.image(0,0,SKINS.BACKGROUND);
    background.setOrigin(0,0);
    background.scale = 2;


    this.add.text(config.width/2.2, config.height/5, "K.O.",{
        fontFamily:'Tahoma',
        color: 'blue',
        fontSize: '50px'
    })

    this.announcement();

    let playBtn = this.add.image(config.width/2.5,config.height/1.5,'playAgainBtn');
    playBtn.setOrigin(0,0);
    playBtn.scale = 1/2;

    playBtn.setInteractive();

    this.input.on('gameobjectdown',()=>{
      this.scene.start('PreloadScene');
    },this);

  }

  announcement():void{

    console.log(`result ${this.matchResult}`);
    if(this.matchResult == 'player'){
      this.add.text(config.width/2 - 200, (config.height/3), "YOU WIN!",{
        fontFamily:'Verdana',
        color: 'yellow',
        fontSize: '80px',
        
      });
    } else{

      this.add.text(config.width/2 - 200, (config.height/3), "YOU LOSE!",{
        fontFamily:'Verdana',
        color: 'red',
        fontSize: '80px',
        
      });

    }

  }

    
}
