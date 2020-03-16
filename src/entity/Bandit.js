import 'Phaser'

export default class Bandit extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, spriteKey) {
      super(scene, x, y, spriteKey);
      // Store reference of scene passed to constructor
      this.scene = scene;
      // Add enemy to scene and enable physics
      this.scene.physics.world.enable(this);
      this.scene.add.existing(this);
  
      // Turn him around to face player
      this.flipX = !this.flipX;
      
    }
} 