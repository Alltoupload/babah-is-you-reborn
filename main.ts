namespace SpriteKind {
    export const Text = SpriteKind.create()
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    Ticks += 1
    music.setVolume(255)
    music.play(music.createSoundEffect(WaveShape.Sine, 1, 1483, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    if (get_rule_exists("babah", "you")) {
        Babah.x += controller.dx(1600)
        Babah.y += controller.dy(1600)
    }
    if (get_rule_exists("text_babah", "you")) {
        text_babah.x += controller.dx(1600)
        text_babah.y += controller.dy(1600)
    }
})
function get_rule_exists (ex_babah: string, ex_you: string) {
    return list.indexOf("" + ex_babah + " be " + ex_you) < 0
}
function Position (sprite: Sprite, tile_x: number, tile_y: number) {
    sprite.setPosition(scene.screenWidth() / 2 + tile_x * 32, scene.screenHeight() / 2 + tile_y * 32)
}
function make_rule (ex_babah: string, ex_you: string) {
    rules.push("" + ex_babah + " be " + ex_you)
}
let Babah: Sprite = null
let list: string[] = []
let rules: string[] = []
let text_babah: Sprite = null
text_babah = sprites.create(assets.image`blank lol`, SpriteKind.Text)
animation.runImageAnimation(
text_babah,
assets.animation`text_babah`,
300,
true
)
Position(text_babah, -1, 1)
let text_be = sprites.create(assets.image`blank lol`, SpriteKind.Text)
animation.runImageAnimation(
text_be,
assets.animation`myAnim`,
300,
true
)
Position(text_be, 0, 1)
let text_you = sprites.create(assets.image`blank lol`, SpriteKind.Text)
animation.runImageAnimation(
text_you,
assets.animation`text_you`,
300,
true
)
Position(text_you, 1, 1)
rules = []
console.logValue("list[\"aaa\"]", list.indexOf("aaa"))
Babah = sprites.create(assets.image`Babah`, SpriteKind.Player)
let Ticks = 0
Babah.setStayInScreen(true)
music.play(music.createSong(assets.song`Theme`), music.PlaybackMode.LoopingInBackground)
make_rule("babah", "you")
make_rule("text_babah", "you")
Babah.scale = 2
text_babah.scale = 2
text_be.scale = 2
text_you.scale = 2
