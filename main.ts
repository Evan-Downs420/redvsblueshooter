namespace SpriteKind {
    export const weapon = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
info.onScore(100, function () {
    info.setScore(0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.weapon, function (sprite, otherSprite) {
    info.startCountdown(5)
    game.gameOver(true)
    game.reset()
})
scene.setBackgroundImage(assets.image`background`)
let mySprite = sprites.create(assets.image`Player 1`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
let mySprite2 = sprites.create(assets.image`Gun`, SpriteKind.weapon)
mySprite2.setPosition(13, 17)
mySprite2.setPosition(72, 50)
mySprite2.setPosition(120, 45)
mySprite2.setPosition(10, 98)
info.startCountdown(5)
music.play(music.createSong(hex`0078000408020200001c00010a006400f4016400000400000000000000000000000000050000040c0004000800012008000c00012407001c00020a006400f401640000040000000000000000000000000000000003190008000c00012a0c001000021e27100014000120140018000125`), music.PlaybackMode.UntilDone)
game.showLongText("Domain Expansion", DialogLayout.Center)
