import PreloadScene from "./scenes/preloadScene";
import PlayScene from "./scenes/playScene";
import MenuScene from "./scenes/menuScene";
import EndingScene from "./scenes/endingScene";
import InstructionScene from "./scenes/instructionScene";



const config = {
    type: Phaser.AUTO,
      height: 400,
      width: 1200,
      transparent:true,
      
      backgroundColor: '#4488aa',
      scene: [PreloadScene,InstructionScene, MenuScene,PlayScene, EndingScene],
      parent: 'gameContainer',
      physics: {
        default: 'arcade',
        arcade: {
          //debug:true,
          gravity: { y: 350 }
        }
      },
      scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        
        autoCenter: Phaser.Scale.CENTER_BOTH,
      }
  }
  export default config