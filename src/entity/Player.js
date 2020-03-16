import 'phaser';


export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey) {
    super(scene, x, y, spriteKey);

    this.facingLeft = false

    this.scene = scene;
    this.scene.physics.world.enable(this)
    this.scene.add.existing(this);
    
  } 

  // Check which controller button is being pushed and execute movement & animation
  update(cursors) {
    // << INSERT CODE HERE >>
    this.updateMovement(cursors)
    // this.updateJump(cursors)
  }

  updateMovement(cursors) {
    // Move left
    if (cursors.left.isDown) {

      if (!this.facingLefit) {
        this.flipX = !this.flipX
        this.facingLeft = true
      }
      this.setVelocityX(-360);
      this.play('walk', true);
      // this.flipX = !this.flipX;
    }
    // Move right
    else if (cursors.right.isDown) {
      if (this.facingLeft) {
        this.flipX = !this.flipX;
        this.facingLeft = false;
      }
     
     
     
      this.setVelocityX(360);
      this.play('walk', true);



      // if (this.body.touching.down) {
      // }
    }
    // Neutral (no movement)
    else {
      this.setVelocityX(0);
    }
  }


  // updateJump(cursors) {
  //   if (cursors.up.isDown && this.body.touching.down) {
  //     this.setVelocityY(-800);
  //   }
  // }
} 