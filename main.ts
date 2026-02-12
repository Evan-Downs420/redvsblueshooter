namespace SpriteKind {
    export const weapon = SpriteKind.create()
    export const Zombie = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Player1, 50, 50)
    projectile.follow(Zombie1, 100)
    if_projectile_hits_Zombie1 += 1
})
info.onScore(100, function () {
    info.setScore(0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Zombie, function (sprite, otherSprite) {
    game.gameOver(true)
})
let if_projectile_hits_Zombie1 = 0
let projectile: Sprite = null
let Zombie1: Sprite = null
let Player1: Sprite = null
scene.setBackgroundImage(assets.image`background`)
Player1 = sprites.create(assets.image`Player 1`, SpriteKind.Player)
controller.moveSprite(Player1, 100, 100)
info.startCountdown(90)
Zombie1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Zombie)
Zombie1.setPosition(142, 8)
Zombie1.follow(Player1, 75)
