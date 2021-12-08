let Déclencheur_de_musique = false
let secondes = 0
input.onButtonPressed(Button.A, function () {
    Déclencheur_de_musique = true
    secondes = 15
    basic.showNumber(secondes)
    while (secondes > 0) {
        basic.pause(1000)
        secondes += 0 - 1
        if (secondes <= 9) {
            basic.showNumber(secondes)
        }
    }
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    if (Déclencheur_de_musique == true && secondes == 0) {
        music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
        Déclencheur_de_musique = false
    }
})
