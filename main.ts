controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    Ticks += 1
    music.play(music.createSoundEffect(WaveShape.Sine, 1, 1483, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    Babah.x += controller.dx(1600)
    Babah.y += controller.dy(1600)
})
function add_rule (ex_babah: string, be: string, ex_you: string) {
    rules = [[ex_babah, be, ex_you]]
}
let rules: string[][] = []
let Babah: Sprite = null
let list: string[] = []
console.logValue("list[\"aaa\"]", list.indexOf("aaa"))
let Ticks = 0
music.play(music.createSong(assets.song`Theme`), music.PlaybackMode.LoopingInBackground)
Babah = sprites.create(assets.image`Babah`, SpriteKind.Player)
Babah.scale = 2
add_rule("Babah", "Be", "You")
