

export const createCharacterAnimations = (scene: Phaser.Scene, character: any) => {

    
    scene.anims.create({
      key: character.IDLE,
      frames: scene.anims.generateFrameNumbers(character.IDLE, { frames: [ 0, 1, 2, 3 ] }),
      frameRate: 8,
      repeat: -1
    });

    scene.anims.create({
      key: character.RUN,
      frames: scene.anims.generateFrameNumbers(character.RUN, { frames: [ 0, 1, 2, 3 ] }),
      frameRate: 20,
      repeat: -1
    });

    
    scene.anims.create({
      key: character.PUNCH,
      frames: scene.anims.generateFrameNumbers(character.PUNCH, { frames: [ 0, 1, 2, 3 ] }),
      repeat: 1
    });

    scene.anims.create({
      key: character.JUMP,
      frames: scene.anims.generateFrameNumbers(character.JUMP, { frames: [ 0, 1, 2, 3 ] }),
      frameRate: 1,
      repeat: 1
    });

    scene.anims.create({
      key: character.HURT,
      frames: scene.anims.generateFrameNumbers(character.HURT, { frames: [ 0, 1 ] }),
      frameRate: 5,
      repeat: 0
    });

    scene.anims.create({
      key: character.BLOCK,
      frames: scene.anims.generateFrameNumbers(character.BLOCK, { frames: [ 0, 1, 2, 3 ] }),
      frameRate: 20 ,
      repeat: 0
    });

    scene.anims.create({
      key: character.DEAD,
      frames: scene.anims.generateFrameNumbers(character.DEAD, { frames: [ 0, 1, 2, 3 ] }),
      frameRate: 20 ,
      repeat: 0
    });
}