namespace SpriteKind {
    export const vakt = SpriteKind.create()
}
info.onCountdownEnd(function () {
    if (info.score() > 57) {
        game.over(true, effects.confetti)
    } else {
        game.over(false, effects.clouds)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.vakt, function (sprite, otherSprite) {
    if (Math.percentChance(80)) {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
let Energi: Sprite = null
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
let My_man = sprites.create(img`
    . . . . . . . c c . . . . . . . 
    . . . . . . . c 5 c . . . . . . 
    . . . . c c c 5 5 5 c c . . . . 
    . . c c b c 5 5 5 5 c c c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . f 5 5 5 b b b b 5 5 5 c . . 
    . . f f 5 5 5 5 5 5 5 5 f . . . 
    . . f f e e b f e e e f . . . . 
    . . f f f b 1 f b b e f . . . . 
    . . . f f b b b b b b f . . . . 
    . . . e e f e e e e f . . . . . 
    . . . e b b e b b 5 f . . . . . 
    . . . e b b e 5 5 5 5 f . . . . 
    . . . . e e 5 5 5 5 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
let vakt = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . f f e 4 1 f d d f 1 4 e f . . 
    f d f f e 4 d d d d 4 e f e . . 
    f b f e f 2 2 2 2 e d d 4 e . . 
    f b f 4 f 2 2 2 2 e d d e . . . 
    f c f . f 4 4 5 5 f e e . . . . 
    . f f . f f f f f f f . . . . . 
    . . . . f f f . . . . . . . . . 
    `, SpriteKind.vakt)
tiles.placeOnRandomTile(vakt, sprites.vehicle.roadHorizontal)
controller.moveSprite(My_man)
scene.cameraFollowSprite(My_man)
if (Math.percentChance(20)) {
    tiles.placeOnRandomTile(My_man, sprites.castle.tileGrass1)
} else {
    tiles.placeOnRandomTile(My_man, sprites.castle.tileDarkGrass2)
}
for (let index = 0; index < 100; index++) {
    Energi = sprites.create(img`
        . . . . . . . . . . . f f f f . 
        . . . . . . . . . f f f 5 5 f . 
        . . . . . . . f f f 5 5 5 f f . 
        . . . . . f f f 5 5 5 5 f f . . 
        . . . . f f 5 5 5 5 5 f f . . . 
        . . . f f 5 5 5 5 f f f . . . . 
        . . . f 5 5 5 f f f f f f f . . 
        . . . f 5 5 f f f f 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f f . 
        . . . f f f f f f 5 5 5 5 f f . 
        . . . . . . f f f 5 5 5 f f . . 
        . . . . f f f 5 5 5 f f f . . . 
        . . f f f 5 5 5 f f f . . . . . 
        . f f 5 5 5 5 f f f . . . . . . 
        . f 5 5 f f f f . . . . . . . . 
        `, SpriteKind.Food)
    if (Math.percentChance(80)) {
        tiles.placeOnRandomTile(Energi, sprites.castle.tileGrass1)
    } else {
        tiles.placeOnRandomTile(Energi, sprites.castle.tileDarkGrass2)
    }
}
info.startCountdown(45)
