import Player from '../entity/Player'
import Bandit from '../entity/Bandit'
import Ground from '../entity/Ground' 

 
export default class FgScene extends Phaser.Scene {
    constructor() {
      super('FgScene');
    }
  
    preload() {
      this.load.image('ground', 'assets/backgrounds/ground.png')
      // this.load.spritesheet( 'barbarianIdle' , 'assets/spriteSheets/barbarianIdle.png', {
      //     frameWidth: 680,
      //     frameHeight: 920
      //   });

      this.load.spritesheet( 'barbarianWalk' , 'assets/spriteSheets/barbarianWalk.png', {
        frameWidth: 48,
        frameHeight: 48
      });

      this.load.image('banditIdle', 'assets/spriteSheets/banditIdle.png')
      // this.load.spritesheet('banditIdle', 'assets/spriteSheets/banditIdle.png'), {
      //   farmeWidth: 48,
      //   frameHeight: 48
      // }



      } 
  
  
  
    create() {
      this.createGroups()

     
      // this.player = new Player(this, 90, 400, 'barbarianIdle').setScale(3)

      this.player = new Player(this, 90, 400, 'barbarianWalk').setScale(3)
      
      this.anims.create({
        key: 'walk',
        frames: this.anims.generateFrameNumbers('barbarianWalk', {
          start: 0,
          end: 5,
          repeat: -1,
          framerate: 20
        })
      })

      this.player.play('walk')
      
      this.bandit = new Bandit (this, 600, 400, 'banditIdle').setScale(3)
      
      // this.createAnimations();
       
      this.cursors = this.input.keyboard.createCursorKeys()
      
      this.physics.add.collider(this.player, this.groundGroup)
      this.physics.add.collider(this.bandit, this.groundGroup)
      this.physics.add.collider(this.player, this.bandit)


      // this.createCollisions()

      
    }
  
    // time: total time elapsed (ms)
    // delta: time elapsed (ms) since last update() call. 16.666 ms @ 60fps
    update(time, delta) {
      // << DO UPDATE LOGIC HERE >>
      this.player.update(this.cursors)
    }
  
    createGround(x, y) {
      this.groundGroup.create(x, y, 'ground');
    }
  
    createGroups() {
      this.groundGroup = this.physics.add.staticGroup({ classType: Ground });
      this.createGround(600, 540);
    //   this.createGround(160, 540);
      //add ground to group
      this.createGround(160, 540);
    }


    // createAnimations() {
    //   this.anims.create({
    //     key: 'walk',
    //     frames: this.anims.generateFrameNumbers('barbarianWalk', { start: 1, end: 6 }),
    //     frameRate: 10,
    //     repeat: -1,
    //   });
    // }


    createCollisions () {
      this.physics.add.collider(this.player, this.groundGroup);
      this.physics.add.collider(this.bandit, this.groundGroup);
      this.physics.add.collider(this.player, this.bandit );
    }
}
  