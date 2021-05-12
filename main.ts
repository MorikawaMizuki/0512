input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.TShirt)
    basic.pause(500)
    basic.clearScreen()
})
// Aボタンを押したら笑顔表示
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(500)
    basic.clearScreen()
})
// 左に傾けたときに変顔を表示
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . # . #
        . # . # .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Duck)
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Asleep)
    basic.pause(500)
    basic.clearScreen()
})
// Bボタンを押したら悲しい顔表示
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(500)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Rollerskate)
    basic.pause(500)
    basic.clearScreen()
})
basic.forever(function () {
	
})
