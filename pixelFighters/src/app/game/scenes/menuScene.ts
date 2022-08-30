import { CharacterSelectionService } from "../character-selection";
import config from "../config2";
import { SKINS, ANIMSKEY } from "../constants";
import { createCharacterAnimations } from "../helpers/animations";
import { loadBikerAssets, loadCyborgAssets, loadPunkAssets } from "../helpers/characterLoaders";
import { OptionLoader } from "../helpers/optionLoader";

export default class MenuScene extends Phaser.Scene {

  characterSelectionSub!:any;

  constructor() {
    super({ key: 'MenuScene' })
    console.log('halu lowie 2');
    this.characterSelectionSub = new CharacterSelectionService();
  }


  create() {
    console.log('create method');
    let background = this.add.image(0,0,SKINS.BACKGROUND);
    background.setOrigin(0,0);
    background.scale = 2;


    this.add.text(config.width/3.3, config.height/5, "SELECT CHARACTER",{
      fontFamily:'Tahoma',
      color: 'white',
      fontSize: '50px'
    });


    createCharacterAnimations(this,SKINS.BIKER);
    createCharacterAnimations(this,SKINS.CYBORG);
    createCharacterAnimations(this,SKINS.PUNK);


    const optionOne = new OptionLoader(this,config.width/3,config.height/1.5,SKINS.BIKER.IDLE);

    optionOne.setupOnHover(0xFF69B4);

    optionOne.onClick(this.characterSelectionSub, SKINS.BIKER);


    const optionTwo = new OptionLoader(this,config.width/2,config.height/1.5,SKINS.CYBORG.IDLE);

    optionTwo.setupOnHover(0x0000FF);

    optionTwo.onClick(this.characterSelectionSub, SKINS.CYBORG);


    const optionThree = new OptionLoader(this,config.width/1.5,config.height/1.5,SKINS.PUNK.IDLE);

    optionThree.setupOnHover(0xFF69B4);

    optionThree.onClick(this.characterSelectionSub, SKINS.PUNK);

    
    

  }

  setupOptionOne():void{
    
  }
    
}
