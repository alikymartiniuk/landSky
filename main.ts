namespace SpriteKind {
    export const Text = SpriteKind.create()
    export const logo__ = SpriteKind.create()
    export const spawn__ = SpriteKind.create()
    export const i = SpriteKind.create()
    export const golpeEnemy = SpriteKind.create()
    export const target__ = SpriteKind.create()
    export const atack1 = SpriteKind.create()
    export const d1 = SpriteKind.create()
    export const d11 = SpriteKind.create()
    export const d2 = SpriteKind.create()
    export const d22 = SpriteKind.create()
    export const d_semDano = SpriteKind.create()
    export const plant_1 = SpriteKind.create()
    export const plant_2 = SpriteKind.create()
    export const smack_ = SpriteKind.create()
}
function reset_info () {
    if (LigarInfo == 0) {
        info1.setFlag(SpriteFlag.Invisible, true)
    }
    if (LigarInfo2 == 0) {
        info2.setFlag(SpriteFlag.Invisible, true)
    }
}
sprites.onOverlap(SpriteKind.d22, SpriteKind.Player, function (sprite, otherSprite) {
    if (otherSprite == player1) {
        sbar2.value += custoDamage * 5
        sprite.setKind(SpriteKind.Player)
        controller.player1.moveSprite(player1, 0, 0)
        LigarInfo = 2
        animation.runImageAnimation(
        info1,
        assets.animation`myAnim2`,
        150,
        true
        )
        timer.after(2000, function () {
            LigarInfo = 0
            controller.player1.moveSprite(player1, 150, 150)
        })
    }
})
function setMap () {
    scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`myImage0`)
    scroller.setLayerImage(scroller.BackgroundLayer.Layer1, assets.image`myImage`)
    scroller.scrollBackgroundWithSpeed(5, 1, scroller.BackgroundLayer.Layer0)
    scroller.scrollBackgroundWithSpeed(1, 1, scroller.BackgroundLayer.Layer1)
    tiles.setCurrentTilemap(tilemap`level`)
}
sprites.onOverlap(SpriteKind.d1, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.setKind(SpriteKind.d_semDano)
    danoPlayer1 += 1
    Enemy_life += 0 - danoPlayers
    barenemy.value = Enemy_life
    otherSprite.startEffect(effects.trail, 150)
    if (Enemy_life == 0) {
        sprites.destroy(otherSprite)
    }
})
sprites.onCreated(SpriteKind.d_semDano, function (sprite) {
    timer.after(400, function () {
        sprites.destroy(sprite)
    })
})
sprites.onOverlap(SpriteKind.plant_2, SpriteKind.plant_2, function (sprite, otherSprite) {
    sprites.destroy(sprite)
})
function animation2 () {
    characterAnimations.loopFrames(
    player2,
    [img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        c d e e d d d d e e d d f . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e b d c . f f 
        . f d d d d e e e f f c . f e f 
        . f f f f f f e e e e f . f e f 
        . f f f f e e e e e e e f f e f 
        f d d f d d f e f e e e e f f . 
        f d b f d b f e f e e e e f . . 
        f f f f f f f f f f f f e f . . 
        . . . . . . . . . f c d d f . . 
        . . . . . . . . . . f f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f f . . . . 
        . c d d d d d d e e d d f . . . 
        . c d f d d f d e e b d c . . . 
        c d d f d d f d e e b d c . f f 
        c d e e d d d d e e f c . f e f 
        c d d d d c d e e e f . . f e f 
        . f c c c d e e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . f f e f e e f e e e e f . . 
        . f e f f e e f f f e e e f . . 
        f d d b d d c f f f f f f b f . 
        f d d c d d d f . . f c d d f . 
        . f f f f f f f . . . f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f f f . . . . 
        . . f d d d e e e e d d f . . . 
        . c d d d d d e e e b d c . . . 
        . c d d d d d d e e b d c . . . 
        c d d f d d f d e e f c . f f . 
        c d d f d d f d e e f . . f e f 
        c d e e d d d d e e f . . f e f 
        . f d d d c d e e f f . . f e f 
        . . f f f d e e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . . . f f e e e e e b f f . . 
        . . . f e f f e e c d d f f . . 
        . . f d d b d d c f f f . . . . 
        . . f d d c d d d f f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `],
    50,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    player2,
    [img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        c d e e d d d d e e d d f . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e b d c . f f 
        . f d d d d e e e f f c . f e f 
        . f f f f f f e e e e f . f e f 
        . f f f f e e e e e e e f f e f 
        f d d f d d f e f e e e e f f . 
        f d b f d b f e f e e e e f . . 
        f f f f f f f f f f f f e f . . 
        . . . . . . . . . f c d d f . . 
        . . . . . . . . . . f f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f f . . . . 
        . c d d d d d d e e d d f . . . 
        . c d f d d f d e e b d c . . . 
        c d d f d d f d e e b d c . f f 
        c d e e d d d d e e f c . f e f 
        c d d d d c d e e e f . . f e f 
        . f c c c d e e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . f f e f e e f e e e e f . . 
        . f e f f e e f f f e e e f . . 
        f d d b d d c f f f f f f b f . 
        f d d c d d d f . . f c d d f . 
        . f f f f f f f . . . f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f f f . . . . 
        . . f d d d e e e e d d f . . . 
        . c d d d d d e e e b d c . . . 
        . c d d d d d d e e b d c . . . 
        c d d f d d f d e e f c . f f . 
        c d d f d d f d e e f . . f e f 
        c d e e d d d d e e f . . f e f 
        . f d d d c d e e f f . . f e f 
        . . f f f d e e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . . . f f e e e e e b f f . . 
        . . . f e f f e e c d d f f . . 
        . . f d d b d d c f f f . . . . 
        . . f d d c d d d f f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `],
    50,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    player2,
    [img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . . f e e d f d d f d c . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        f f . c d b e e e d d c c c c c 
        f e f . c f f e e e d d d d f . 
        f e f . f e e e e f f f f f f . 
        f e f f e e e e e e e f f f f . 
        . f f e e e e f e f d d f d d f 
        . . f e e e e f e f b d f b d f 
        . . f e f f f f f f f f f f f f 
        . . f d d c f . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . f f e e e d d d d f . . 
        . . . f d d e e d d d d d d c . 
        . . . c d b e e d f d d f d c . 
        f f . c d b e e d f d d f d d c 
        f e f . c f e e d d d d e e d c 
        f e f . . f e e e d c d d d d c 
        f e f . . f f e e e d c c c f . 
        f e f . f e e e e f f f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f e e e e f e e f e f f . . 
        . . f e e e f f f e e f f e f . 
        . f b f f f f f f c d d b d d f 
        . f d d c f . . f d d d c d d f 
        . . f f f . . . f f f f f f f . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . f f f e e e e e f . . . 
        . . . f d d e e e e d d d f . . 
        . . . c d b e e e d d d d d c . 
        . . . c d b e e d d d d d d c . 
        . f f . c f e e d f d d f d d c 
        f e f . . f e e d f d d f d d c 
        f e f . . f e e d d d d e e d c 
        f e f . . f f e e d c d d d f . 
        f e f . f e e e e e d f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f f b e e e e e f f . . . . 
        . . f f d d c e e f f e f . . . 
        . . . . f f f c d d b d d f . . 
        . . . . . f f d d d c d d f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        . . . . c f e e e d d c c c c c 
        . . . . . f f e e e d d d d f . 
        . . . . f e e e e f f f f f . . 
        f f . f e e e e e e f f . . . . 
        f e . f e e f e e f e e f . . . 
        f e . f e e e f e e f e e f . . 
        f e f f e f b b f b d f d b f . 
        f f f f e b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `],
    50,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    player2,
    assets.animation`baixo`,
    120,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    player2,
    [img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `],
    50,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    player2,
    [img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `],
    50,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving)
    )
}
sprites.onCreated(SpriteKind.d1, function (sprite) {
    timer.after(400, function () {
        sprites.destroy(sprite)
    })
})
sprites.onOverlap(SpriteKind.d22, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.setKind(SpriteKind.d_semDano)
    danoPlayer2 += 1
    Enemy_life += 0 - danoPlayers
    barenemy.value = Enemy_life
    otherSprite.startEffect(effects.trail, 150)
    if (Enemy_life == 0) {
        sprites.destroy(otherSprite)
    }
})
function animation1 () {
    characterAnimations.loopFrames(
    player1,
    [img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        c d e e d d d d e e d d f . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e b d c . f f 
        . f d d d d e e e f f c . f e f 
        . f f f f f f e e e e f . f e f 
        . f f f f e e e e e e e f f e f 
        f d d f d d f e f e e e e f f . 
        f d b f d b f e f e e e e f . . 
        f f f f f f f f f f f f e f . . 
        . . . . . . . . . f c d d f . . 
        . . . . . . . . . . f f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f f . . . . 
        . c d d d d d d e e d d f . . . 
        . c d f d d f d e e b d c . . . 
        c d d f d d f d e e b d c . f f 
        c d e e d d d d e e f c . f e f 
        c d d d d c d e e e f . . f e f 
        . f c c c d e e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . f f e f e e f e e e e f . . 
        . f e f f e e f f f e e e f . . 
        f d d b d d c f f f f f f b f . 
        f d d c d d d f . . f c d d f . 
        . f f f f f f f . . . f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f f f . . . . 
        . . f d d d e e e e d d f . . . 
        . c d d d d d e e e b d c . . . 
        . c d d d d d d e e b d c . . . 
        c d d f d d f d e e f c . f f . 
        c d d f d d f d e e f . . f e f 
        c d e e d d d d e e f . . f e f 
        . f d d d c d e e f f . . f e f 
        . . f f f d e e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . . . f f e e e e e b f f . . 
        . . . f e f f e e c d d f f . . 
        . . f d d b d d c f f f . . . . 
        . . f d d c d d d f f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `],
    50,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    player1,
    [img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        c d e e d d d d e e d d f . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e b d c . f f 
        . f d d d d e e e f f c . f e f 
        . f f f f f f e e e e f . f e f 
        . f f f f e e e e e e e f f e f 
        f d d f d d f e f e e e e f f . 
        f d b f d b f e f e e e e f . . 
        f f f f f f f f f f f f e f . . 
        . . . . . . . . . f c d d f . . 
        . . . . . . . . . . f f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f f . . . . 
        . c d d d d d d e e d d f . . . 
        . c d f d d f d e e b d c . . . 
        c d d f d d f d e e b d c . f f 
        c d e e d d d d e e f c . f e f 
        c d d d d c d e e e f . . f e f 
        . f c c c d e e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . f f e f e e f e e e e f . . 
        . f e f f e e f f f e e e f . . 
        f d d b d d c f f f f f f b f . 
        f d d c d d d f . . f c d d f . 
        . f f f f f f f . . . f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f f f . . . . 
        . . f d d d e e e e d d f . . . 
        . c d d d d d e e e b d c . . . 
        . c d d d d d d e e b d c . . . 
        c d d f d d f d e e f c . f f . 
        c d d f d d f d e e f . . f e f 
        c d e e d d d d e e f . . f e f 
        . f d d d c d e e f f . . f e f 
        . . f f f d e e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . . . f f e e e e e b f f . . 
        . . . f e f f e e c d d f f . . 
        . . f d d b d d c f f f . . . . 
        . . f d d c d d d f f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `],
    50,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    player1,
    [img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . . f e e d f d d f d c . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        f f . c d b e e e d d c c c c c 
        f e f . c f f e e e d d d d f . 
        f e f . f e e e e f f f f f f . 
        f e f f e e e e e e e f f f f . 
        . f f e e e e f e f d d f d d f 
        . . f e e e e f e f b d f b d f 
        . . f e f f f f f f f f f f f f 
        . . f d d c f . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . f f e e e d d d d f . . 
        . . . f d d e e d d d d d d c . 
        . . . c d b e e d f d d f d c . 
        f f . c d b e e d f d d f d d c 
        f e f . c f e e d d d d e e d c 
        f e f . . f e e e d c d d d d c 
        f e f . . f f e e e d c c c f . 
        f e f . f e e e e f f f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f e e e e f e e f e f f . . 
        . . f e e e f f f e e f f e f . 
        . f b f f f f f f c d d b d d f 
        . f d d c f . . f d d d c d d f 
        . . f f f . . . f f f f f f f . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . f f f e e e e e f . . . 
        . . . f d d e e e e d d d f . . 
        . . . c d b e e e d d d d d c . 
        . . . c d b e e d d d d d d c . 
        . f f . c f e e d f d d f d d c 
        f e f . . f e e d f d d f d d c 
        f e f . . f e e d d d d e e d c 
        f e f . . f f e e d c d d d f . 
        f e f . f e e e e e d f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f f b e e e e e f f . . . . 
        . . f f d d c e e f f e f . . . 
        . . . . f f f c d d b d d f . . 
        . . . . . f f d d d c d d f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        . . . . c f e e e d d c c c c c 
        . . . . . f f e e e d d d d f . 
        . . . . f e e e e f f f f f . . 
        f f . f e e e e e e f f . . . . 
        f e . f e e f e e f e e f . . . 
        f e . f e e e f e e f e e f . . 
        f e f f e f b b f b d f d b f . 
        f f f f e b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `],
    50,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    player1,
    assets.animation`baixo`,
    120,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    player1,
    [img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `],
    50,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    player1,
    [img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `],
    50,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving)
    )
}
scene.onOverlapTile(SpriteKind.golpeEnemy, assets.tile`myTile6`, function (sprite, location) {
    newPlant = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.plant_1)
    tiles.placeOnTile(newPlant, sprite.tilemapLocation())
    sprites.destroy(sprite)
    animation.runImageAnimation(
    newPlant,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 7 7 4 . . . . . . 
        . . . . . . 2 7 7 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . e 4 4 e . . . . . . 
        . . . . . e 4 7 7 4 e . . . . . 
        . . . . . . 2 7 7 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . . e b e e b e . . . . . 
        . . . . . e e 4 4 e e . . . . . 
        . . . . . e e 7 7 e e . . . . . 
        . . . . . . 2 7 7 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e b e e e e b e . . . . 
        . . . . e e b b b b e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . . e e 7 7 e e . . . . . 
        . . . . . . 2 7 7 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . e b b e . . . . . . 
        . . . . . e b e e b e . . . . . 
        . . . . . e e b b e e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e b e e e e b e . . . . 
        . . . . e e b b b b e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . . 2 e e 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 7 7 7 7 7 . 7 7 7 7 7 . . 
        . . 7 7 . . e e e e . . . 7 7 . 
        . . 7 7 . . e e e e . . . 7 7 . 
        . . 7 7 . . e e e e . . . 7 7 . 
        . . . . . e b e e b e . . . . . 
        . . . . . e e b b e e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e b e e e e b e . . . . 
        . . . . e e b b b b e e . . . . 
        . . . e b e e e e e e b e . . . 
        . . . e e b b b b b b e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . 7 7 7 7 7 7 . 7 7 7 7 7 7 7 . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . 7 7 . . e b b e . . . 7 7 . 
        . 7 7 7 . . e e e e . . . 7 7 . 
        . 7 7 7 . . e e e e . . . 7 7 . 
        . 7 7 . . e b e e b e . . . . . 
        . . . . . e e b b e e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e b e e e e b e . . . . 
        . . . . e e b b b b e e . . . . 
        . . . e b e e e e e e b e . . . 
        . . . e e b b b b b b e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . 7 7 7 7 7 7 . 7 7 7 7 7 7 7 . 
        . . . . 5 7 7 7 7 7 7 5 . . . . 
        . . . 7 5 7 7 7 7 7 7 5 7 7 . . 
        . . 5 5 5 5 e b b e 5 5 5 7 7 . 
        . 7 7 7 . 5 e e e e 5 . . 7 7 . 
        . 7 7 7 5 5 e e e e 5 5 . 7 7 . 
        . 7 7 5 5 e b e e b e 5 5 . . . 
        . . . . . e e b b e e . 5 . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e b e e e e b e . . . . 
        . . . . e e b b b b e e . . . . 
        . . . e b e e e e e e b e . . . 
        . . . e e b b b b b b e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
function info_B_button () {
    if (LigarInfo == 1) {
        info1.setFlag(SpriteFlag.Invisible, false)
        LigarInfo = 0
    }
    if (LigarInfo2 == 1) {
        info2.setFlag(SpriteFlag.Invisible, false)
        LigarInfo2 = 0
    }
}
function resetEnemy () {
    danoPlayer1 = 0
    danoPlayer2 = 0
    Emeny = sprites.create(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `, SpriteKind.Enemy)
    Enemy_life = 100
    barenemy = statusbars.create(20, 4, StatusBarKind.Health)
    barenemy.value = Enemy_life
    barenemy.attachToSprite(Emeny, 2, 0)
    barenemy.positionDirection(CollisionDirection.Bottom)
    barenemy.setColor(7, 2, 3)
    tiles.placeOnTile(Emeny, tiles.getTileLocation(49, 49))
}
function iniciar_jogo () {
    logo = sprites.create(img`
        ................................................
        ................................................
        ................................................
        ........77......777...777...777.77777...........
        ........77.....7767...777...767.7666777.........
        ........77.....76667..767...767.76666677........
        ........77....7766677.767...767.766666667.......
        ........777...7677767.7677..767.766666667.......
        ........767...767.767.7667..767.7666666677......
        ........767...767.767.7667..767.7667776667......
        ........767...7676767.76767.767.7667.76667......
        ........767...7777767.76767.767.7667776667......
        ........767.......767.767667767.7666666667......
        ........767777777.767.767767767.7666666677......
        ........766666667.767.767766767.766666677.......
        ........766666667.767.767.76667.76666677........
        .......7777777777.777.777.77777.7777777.........
        ................................................
        ............999999999.9999..99..999.999.........
        ............9bbbbbbb9.9bb9.9b99.9b9.9b9.........
        ............9bbbbbbb9.9bb99bbb9.9b9.9b9.........
        ............9bbb99999.9bb9bbb99.9b9.9b9.........
        ............9bbb9.....9bbbbb99..9bb9bb9.........
        ............9bbb99999.9bbbb99....9bbb9..........
        ............9bbbbbbb9.9bbbb99.....9b9...........
        ............99999bbb9.9bbbbb99....9b9...........
        ................99bb9.9bb9bbb99...9b9...........
        .....9999999999999bb9.9bb99bbb9...9b9...........
        .....9bbbbbbbbbbbbbb9.9bb9.9b99...9b9...........
        .....9999999999999999.9999..99....999...........
        ................................................
        ................................................
        `, SpriteKind.logo__)
    logo.setScale(3, ScaleAnchor.Middle)
    logo.startEffect(effects.starField)
    pauseUntil(() => controller.player1.isPressed(ControllerButton.A) || controller.player2.isPressed(ControllerButton.A))
    sprites.destroy(logo)
    story.setPagePauseLength(1000, 1500)
    story.setSoundEnabled(false)
    story.printCharacterText("1 contra 1")
    story.printCharacterText("A para golpear, B para comer, A+B para stunnar o adversário")
}
// Deixar vazio
info.onCountdownEnd(function () {
	
})
sprites.onOverlap(SpriteKind.d11, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.setKind(SpriteKind.d_semDano)
    danoPlayer1 += 1
    Enemy_life += 0 - danoPlayers
    barenemy.value = Enemy_life
    otherSprite.startEffect(effects.trail, 150)
    if (Enemy_life == 0) {
        sprites.destroy(otherSprite)
    }
})
function info_frezze () {
    if (LigarInfo == 2) {
        info1.setFlag(SpriteFlag.Invisible, false)
    }
    if (LigarInfo2 == 2) {
        info2.setFlag(SpriteFlag.Invisible, false)
    }
}
function setInfo () {
    info1 = sprites.create(assets.image`myImage2`, SpriteKind.i)
    info2 = sprites.create(assets.image`myImage2`, SpriteKind.i)
    info1.follow(player1, 150)
    info2.follow(player2, 150)
    info1.z = 12
    info2.z = 12
}
function golpeEnemy2 () {
    gEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 7 7 4 . . . . . . 
        . . . . . . 2 7 7 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.golpeEnemy)
    tiles.placeOnTile(gEnemy, Emeny.tilemapLocation())
    target1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.target__)
    tiles.placeOnRandomTile(target1, assets.tile`myTile6`)
    gEnemy.follow(target1, 150)
    gEnemy.setFlag(SpriteFlag.GhostThroughWalls, true)
    timerGolpeEnemy = 0
}
sprites.onCreated(SpriteKind.d2, function (sprite) {
    timer.after(400, function () {
        sprites.destroy(sprite)
    })
})
sprites.onOverlap(SpriteKind.d11, SpriteKind.Player, function (sprite, otherSprite) {
    if (otherSprite == player2) {
        sprite.setKind(SpriteKind.Player)
        controller.player2.moveSprite(player2, 0, 0)
        LigarInfo2 = 2
        animation.runImageAnimation(
        info2,
        assets.animation`myAnim2`,
        150,
        true
        )
        timer.after(2000, function () {
            LigarInfo2 = 0
            controller.player2.moveSprite(player2, 150, 150)
        })
    }
})
sprites.onCreated(SpriteKind.plant_1, function (sprite) {
    timer.after(3000, function () {
        sprite.setKind(SpriteKind.plant_2)
    })
})
sprites.onOverlap(SpriteKind.d2, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.setKind(SpriteKind.d_semDano)
    danoPlayer2 += 1
    Enemy_life += 0 - danoPlayers
    barenemy.value = Enemy_life
    otherSprite.startEffect(effects.trail, 150)
    if (Enemy_life == 0) {
        sprites.destroy(otherSprite)
    }
})
function setSpawn () {
    wait1 = true
    ISpawn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.spawn__)
    ISpawn.startEffect(effects.ashes, 1000)
    animation.runImageAnimation(
    ISpawn,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . 4 4 4 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    20,
    true
    )
    tiles.placeOnRandomTile(ISpawn, assets.tile`myTile8`)
}
sprites.onCreated(SpriteKind.spawn__, function (sprite) {
    timer.after(delay, function () {
        tiles.placeOnTile(Emeny, sprite.tilemapLocation())
        splitScreen.cameraShake(splitScreen.Camera.Camera1, 2, 1000)
        splitScreen.cameraShake(splitScreen.Camera.Camera2, 2, 1000)
        music.play(music.createSoundEffect(WaveShape.Sine, 1, 584, 138, 0, 200, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        sprites.destroy(sprite)
    })
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    for (let index = 0; index < 5; index++) {
        golpeEnemy()
    }
    if (danoPlayer1 > danoPlayer2) {
        info.player1.setScore(10)
        story.spriteSayText(player1, "10", 7)
    } else if (danoPlayer1 < danoPlayer2) {
        info.player2.setScore(10)
        story.spriteSayText(player2, "10", 7)
    } else {
        info.player1.setScore(5)
        info.player2.setScore(5)
        story.spriteSayText(player1, "5", 10)
        story.spriteSayText(player2, "5", 10)
    }
    resetTimer()
})
function resetTimer () {
    delay = 1500
    i = 3
    info.startCountdown(i + delay / 1000)
    wait1 = false
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.plant_2, function (sprite, otherSprite) {
    if (sprite == player1 && !(LigarInfo == 1)) {
        LigarInfo = 1
        animation.runImageAnimation(
        info1,
        assets.animation`myAnim4`,
        200,
        true
        )
    } else if (sprite == player2 && !(LigarInfo2 == 1)) {
        LigarInfo2 = 1
        animation.runImageAnimation(
        info2,
        assets.animation`myAnim4`,
        200,
        true
        )
    }
    if (sprite == player1 && controller.player1.isPressed(ControllerButton.B)) {
        smack = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.smack_)
        smack.z += 11
        tiles.placeOnTile(smack, player1.tilemapLocation())
        animation.runImageAnimation(
        smack,
        assets.animation`myAnim`,
        50,
        false
        )
        timer.after(250, function () {
            sprites.destroy(smack)
        })
        sprites.destroy(otherSprite)
        sbar1.value += valorAlimentar
        music.play(music.createSoundEffect(WaveShape.Sine, 1023, 1725, 255, 151, 100, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
    } else if (sprite == player2 && controller.player2.isPressed(ControllerButton.B)) {
        smack = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.smack_)
        smack.z += 11
        tiles.placeOnTile(smack, player2.tilemapLocation())
        animation.runImageAnimation(
        smack,
        assets.animation`myAnim`,
        50,
        false
        )
        timer.after(250, function () {
            sprites.destroy(smack)
        })
        sprites.destroy(otherSprite)
        sbar1.value += valorAlimentar
        music.play(music.createSoundEffect(WaveShape.Sine, 1023, 1725, 255, 151, 100, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
        sprites.destroy(otherSprite)
        sbar2.value += valorAlimentar
        music.play(music.createSoundEffect(WaveShape.Sine, 1023, 1725, 255, 151, 100, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
    }
})
function setPlayers () {
    player1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b 1 1 3 3 3 3 3 3 b b . . 
        c c c 3 1 1 1 3 3 3 3 3 3 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b 3 3 3 1 1 c . . 
        f b c c c d d d b b 3 3 3 c c . 
        f b c b d d d d d d b b 3 3 b c 
        . c b d d d d d d d d b c 3 3 c 
        . c d c c d d d d d d c c c 3 f 
        . f d d d d d c c d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d b f f c b b f f 
        . . f b d d d b b d d f f f f . 
        . . f f f c c b d d d f . . . . 
        `, SpriteKind.Player)
    player2 = sprites.create(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `, SpriteKind.Player)
    player1.z = 10
    player2.z = 10
    sbar1 = statusbars.create(20, 4, StatusBarKind.Energy)
    sbar2 = statusbars.create(20, 4, StatusBarKind.Energy)
    sbar1.value = 100
    sbar2.value = 100
    sbar1.positionDirection(CollisionDirection.Bottom)
    sbar2.positionDirection(CollisionDirection.Bottom)
    sbar1.attachToSprite(player1, 2, 0)
    sbar2.attachToSprite(player2, 2, 0)
    sbar1.setColor(6, 11, 3)
    sbar2.setColor(6, 11, 3)
    tiles.placeOnRandomTile(player1, assets.tile`myTile7`)
    tiles.placeOnRandomTile(player2, assets.tile`myTile9`)
    controller.player1.moveSprite(player1, 150, 150)
    controller.player2.moveSprite(player2, 150, 150)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, player1)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, player2)
    info.player1.setScore(0)
    info.player2.setScore(0)
}
let attack2: Sprite = null
let delayButton2 = 0
let attack1: Sprite = null
let delayButtons1 = 0
let sbar1: StatusBarSprite = null
let smack: Sprite = null
let i = 0
let delay = 0
let ISpawn: Sprite = null
let wait1 = false
let target1: Sprite = null
let gEnemy: Sprite = null
let logo: Sprite = null
let Emeny: Sprite = null
let newPlant: Sprite = null
let danoPlayer2 = 0
let player2: Sprite = null
let barenemy: StatusBarSprite = null
let Enemy_life = 0
let danoPlayer1 = 0
let sbar2: StatusBarSprite = null
let player1: Sprite = null
let info2: Sprite = null
let LigarInfo2 = 0
let info1: Sprite = null
let LigarInfo = 0
let timerGolpeEnemy = 0
let valorAlimentar = 0
let custoDamage = 0
let danoPlayers = 0
danoPlayers = 5
custoDamage = 10
valorAlimentar = 50
timerGolpeEnemy = 0
let delayGolpeEnemy = 5
setMap()
iniciar_jogo()
setPlayers()
animation1()
animation2()
setInfo()
resetEnemy()
resetTimer()
forever(function () {
    if (controller.player1.isPressed(ControllerButton.A) && delayButtons1 >= 0.3) {
        delayButtons1 = 0
        if (sbar1.value >= custoDamage) {
            sbar1.value += 0 - custoDamage
            attack1 = sprites.create(img`
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                `, SpriteKind.d1)
            animation.runImageAnimation(
            attack1,
            assets.animation`bananas`,
            100,
            true
            )
            tiles.placeOnTile(attack1, player1.tilemapLocation())
            splitScreen.cameraShake(splitScreen.Camera.Camera1, 2, 100)
            music.play(music.createSoundEffect(WaveShape.Noise, 759, 3613, 255, 0, 50, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            if (controller.player1.isPressed(ControllerButton.B)) {
                sbar1.value += 0 - custoDamage
                animation.runImageAnimation(
                attack1,
                assets.animation`knifes`,
                100,
                true
                )
                attack1.setKind(SpriteKind.d11)
            }
        } else {
            music.play(music.createSoundEffect(WaveShape.Noise, 5000, 5000, 255, 0, 20, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        }
    }
    if (controller.player2.isPressed(ControllerButton.A) && delayButton2 >= 0.3) {
        delayButton2 = 0
        if (sbar2.value >= custoDamage) {
            sbar2.value += 0 - custoDamage
            attack2 = sprites.create(img`
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                ................................................
                `, SpriteKind.d2)
            animation.runImageAnimation(
            attack2,
            assets.animation`bananas`,
            100,
            true
            )
            tiles.placeOnTile(attack2, player2.tilemapLocation())
            splitScreen.cameraShake(splitScreen.Camera.Camera2, 2, 100)
            music.play(music.createSoundEffect(WaveShape.Noise, 759, 3613, 255, 0, 50, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            if (controller.player2.isPressed(ControllerButton.B)) {
                sbar2.value += 0 - custoDamage
                animation.runImageAnimation(
                attack2,
                assets.animation`knifes`,
                100,
                true
                )
                attack2.setKind(SpriteKind.d22)
            }
        } else {
            music.play(music.createSoundEffect(WaveShape.Noise, 5000, 5000, 255, 0, 20, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        }
    }
})
forever(function () {
    reset_info()
    info_B_button()
    info_frezze()
})
game.onUpdateInterval(100, function () {
    if (wait1 == false && i > 0) {
        i += -0.1
    } else if (wait1 == false && i <= 0) {
        setSpawn()
    } else if (wait1 == true) {
        timerGolpeEnemy += 0.1
        if (timerGolpeEnemy >= delayGolpeEnemy) {
            golpeEnemy()
        }
    }
    delayButtons1 += 0.1
    delayButton2 += 0.1
})
