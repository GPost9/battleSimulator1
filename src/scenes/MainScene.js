import 'phaser'

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  preload() {
  }

  create() {
    // << LOAD BACKGROUND AND FOREGROUND SCENES IN PARALLEL HERE >>

    // let background = this.add.image(0, 0, 'battleGround')
    
    this.scene.launch('BgScene');
    this.scene.launch('FgScene');
  }
} 