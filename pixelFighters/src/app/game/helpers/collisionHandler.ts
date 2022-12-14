

export default class CollisionHandler{

  enemyDead:boolean = false;
  constructor(scene: Phaser.Scene, player:any, enemy:any){


    scene.physics.add.overlap(player, enemy, this.hurtEnemy);

  }

  isEnemyDead():boolean{
    if(this.enemyDead == true){
      return true
    }
    return false
  }

  hurtEnemy(player:any, enemy:any):void{
    if(player.isAttacking() && enemy.isAlive()){

      if(enemy.isBlocking()){
      }
      else{
        
        enemy.takeDamage(player.attackDamage);
      }
    }
    else if (!enemy.isAlive()) {
      enemy.destroy();

      this.enemyDead = true;
      
    }
    
    else{
      console.log('chilling');
    }

  }
}

/*
export const hurtEnemy = (player:any, enemy:any) =>{
    if(player.isAttacking() && enemy.isAlive()){
      console.log('damaged');
      if(enemy.isBlocking()){
        console.log('blocked');
        enemy.play('block');
      }
      else{
        
        enemy.takeDamage();
        enemy.play('hurt');
      }
    }
    else if (!enemy.isAlive()) {
      enemy.anims.playAfterDelay('dead', 500);
      enemy.stop();
      enemy.destroy();
      player.stop();
    }
    
    else{
      console.log('chilling');
    }

    
  }
  */