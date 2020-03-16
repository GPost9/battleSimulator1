import 'phaser';

export default class BgScene extends Phaser.Scene {
  constructor() {
    super('BgScene');
  }
 
  preload() {
    this.load.image('sky', 'assets/backgrounds/sky.png')
    this.load.image('trees', 'assets/backgrounds/trees.png')
    this.load.image('ground', 'assets/backgrounds/ground.png')
    
  }

  create() {
    this.add.image(-160, 0, 'sky').setOrigin(0).setScale(.5)
    this.add.image(-160, 0, 'trees').setOrigin(0).setScale(.5)
    this.add.image(-160, 0, 'ground').setOrigin(0).setScale(.5)
    
  }
} 