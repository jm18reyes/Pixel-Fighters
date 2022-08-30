import PreloadScene from "./scenes/preloadScene";
import PlayScene from "./scenes/playScene";
import MenuScene from "./scenes/menuScene";


const DEFAULT_WIDTH = 1200
const DEFAULT_HEIGHT = 400

const config = {
    type: Phaser.AUTO,
    
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    parent: 'gameContainer',
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [PreloadScene],
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          y: 350
        },
        debug: false,
        debugBodyColor: 0xff00ff
      }
    }
  }
  export default config