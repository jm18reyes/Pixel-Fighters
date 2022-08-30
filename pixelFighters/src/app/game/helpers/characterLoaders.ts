
import { SKINS, ANIMSKEY } from "../constants";



export const loadBikerAssets = (scene: Phaser.Scene) =>{

    scene.load.spritesheet(SKINS.BIKER.IDLE, 'assets/biker/Biker_idle.png', { frameWidth: 48, frameHeight: 48 });
    scene.load.spritesheet(SKINS.BIKER.RUN, 'assets/biker/Biker_run.png', { frameWidth: 48, frameHeight: 48 });
    scene.load.spritesheet(SKINS.BIKER.PUNCH, 'assets/biker/Biker_run_attack2.png', { frameWidth: 48, frameHeight: 48 });
    scene.load.spritesheet(SKINS.BIKER.JUMP, 'assets/biker/Biker_jump.png', { frameWidth: 48, frameHeight: 48 });
    scene.load.spritesheet(SKINS.BIKER.HURT, 'assets/biker/Biker_hurt.png', { frameWidth: 48, frameHeight: 48 });
    scene.load.spritesheet(SKINS.BIKER.BLOCK, 'assets/biker/Biker_block.png', { frameWidth: 48, frameHeight: 48 });
    scene.load.spritesheet(SKINS.BIKER.DEAD, 'assets/biker/Biker_death.png', { frameWidth: 48, frameHeight: 48 });
}

export const loadCyborgAssets = (scene: Phaser.Scene) =>{

    scene.load.spritesheet(SKINS.CYBORG.IDLE, 'assets/cyborg/Cyborg_idle.png', { frameWidth: 48, frameHeight: 48 });
    scene.load.spritesheet(SKINS.CYBORG.RUN, 'assets/cyborg/Cyborg_run.png', { frameWidth: 48, frameHeight: 48 });
    scene.load.spritesheet(SKINS.CYBORG.PUNCH, 'assets/cyborg/Cyborg_run_attack.png', { frameWidth: 48, frameHeight: 48 });
    scene.load.spritesheet(SKINS.CYBORG.JUMP, 'assets/cyborg/Cyborg_jump.png', { frameWidth: 48, frameHeight: 48 });
    scene.load.spritesheet(SKINS.CYBORG.HURT, 'assets/cyborg/Cyborg_hurt.png', { frameWidth: 48, frameHeight: 48 });
    scene.load.spritesheet(SKINS.CYBORG.BLOCK, 'assets/cyborg/Cyborg_block.png', { frameWidth: 48, frameHeight: 48 });
    scene.load.spritesheet(SKINS.CYBORG.DEAD, 'assets/cyborg/Cyborg_death.png', { frameWidth: 48, frameHeight: 48 });
}

export const loadPunkAssets = (scene: Phaser.Scene) =>{

    scene.load.spritesheet(SKINS.PUNK.IDLE, 'assets/punk/Punk_idle.png', { frameWidth: 48, frameHeight: 48 });
    scene.load.spritesheet(SKINS.PUNK.RUN, 'assets/punk/Punk_run.png', { frameWidth: 48, frameHeight: 48 });
    scene.load.spritesheet(SKINS.PUNK.PUNCH, 'assets/punk/Punk_run_attack.png', { frameWidth: 48, frameHeight: 48 });
    scene.load.spritesheet(SKINS.PUNK.JUMP, 'assets/punk/Punk_jump.png', { frameWidth: 48, frameHeight: 48 });
    scene.load.spritesheet(SKINS.PUNK.HURT, 'assets/punk/Punk_hurt.png', { frameWidth: 48, frameHeight: 48 });
    scene.load.spritesheet(SKINS.PUNK.BLOCK, 'assets/punk/Punk_block.png', { frameWidth: 48, frameHeight: 48 });
    scene.load.spritesheet(SKINS.PUNK.DEAD, 'assets/punk/Punk_death.png', { frameWidth: 48, frameHeight: 48 });
}