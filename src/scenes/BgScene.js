import 'phaser';

export default class BgScene extends Phaser.Scene {
  constructor() {
    super('BgScene');
  }
 
  preload() {
    this.load.image('sky', 'assets/backgrounds/sky.png')
    this.load.image('ground', 'assets/backgrounds/ground.png')
    // this.load.image('battleGround', assets/backgrounds/battleGround.png)
  }

  create() {
    this.add.image(-160, 0, 'sky').setOrigin(0).setScale(.5);
    this.add.image(-160, 0, 'ground').setOrigin(0).setScale(.5)
    // this.add.image(-160, 0, battleGround).setOrigin(0).setScale(.5)
  }
} 