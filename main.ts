controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    Ticks += 1
    music.play(music.createSoundEffect(WaveShape.Sine, 1, 1483, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    Babah.x += controller.dx(1600)
    Babah.y += controller.dy(1600)
})
let Babah: Sprite = null
let list: string[] = []
console.logValue("list[\"aaa\"]", list.indexOf("aaa"))
Babah = sprites.create(assets.image`Babah`, SpriteKind.Player)
let Ticks = 0
Babah.setStayInScreen(true)
music.play(music.createSong(assets.song`Theme`), music.PlaybackMode.LoopingInBackground)
Babah.scale = 2
