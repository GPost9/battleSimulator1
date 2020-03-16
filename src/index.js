import 'phaser'
import config from './config/config'
import MainScene from './scenes/MainScene'
import BgScene from './scenes/BgScene';
import FgScene from './scenes/FgScene';


class Game extends Phaser.Game {
  constructor () {
    super (config)

     // Add all the scenes
     this.scene.add('BgScene', BgScene)
     this.scene.add('FgScene', FgScene)
     this.scene.add('MainScene', MainScene)
     // Start the game with the mainscene
     this.scene.start('MainScene')
  }
}

window.onload = function () {
  window.game = new Game();
} 