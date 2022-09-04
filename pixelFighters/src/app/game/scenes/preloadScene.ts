import { PlayerOne } from "../characters/player";
import config from "../config2";
import { SKINS, ANIMSKEY } from "../constants";
import { createCharacterAnimations } from "../helpers/animations";
import { loadBikerAssets, loadCyborgAssets, loadPunkAssets } from "../helpers/characterLoaders";

export default class PreloadScene extends Phaser.Scene {

  joke!:any;

  constructor() {
    super({ key: 'PreloadScene' })

    sessionStorage.clear();
  }

  preload() {
    console.log('preload method');
    

    this.load.image(SKINS.BACKGROUND,"assets/cyberpunk-street.png");
    this.load.image('banner',"assets/pixel_banner.png");
    this.load.image('startBtn',"assets/start_btn.png");
    this.load.image('playAgainBtn',"assets/play-again_btn.png");
    loadBikerAssets(this);
    loadCyborgAssets(this);
    loadPunkAssets(this);
    
  }

  create() {

    console.log('create method');
    let background = this.add.image(0,0,SKINS.BACKGROUND);
    background.setOrigin(0,0);
    background.scale = 2;


    let banner = this.add.image(-30,-50,'banner');
    banner.setOrigin(0,0);
    banner.scale = 1.3;

    let startBtn = this.add.image(530,270,'startBtn');
    startBtn.setOrigin(0,0);
    startBtn.scale = 1/3;

    startBtn.setInteractive();

    startBtn.on('pointerdown',(e:any)=>{
      console.log(e);
      this.scene.start('InstructionScene');
    },this);
    // 
    
  }
    
}
