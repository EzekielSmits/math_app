function ShowOperator () {
    if (operator == 1) {
        basic.showString("x")
    }
    if (operator == 2) {
        basic.showString("+")
    }
    if (operator == 3) {
        basic.showString("-")
    }
    if (operator == 4) {
        basic.showString("/")
    }
}
input.onButtonPressed(Button.A, function () {
    int1 = randint(0, 10)
    int2 = randint(0, 10)
    basic.showNumber(int1)
    basic.pause(1000)
    ShowOperator()
    basic.pause(1000)
    basic.showNumber(int2)
    basic.pause(1000)
    basic.showString("= ?")
})
input.onButtonPressed(Button.AB, function () {
    int1 = randint(0, 100)
    int2 = randint(0, 100)
    basic.showNumber(int1)
    basic.pause(1000)
    ShowOperator()
    basic.pause(1000)
    basic.showNumber(int2)
    basic.pause(1000)
    basic.showString("= ?")
})
input.onButtonPressed(Button.B, function () {
    if (operator == 1) {
        basic.showNumber(int1 * int2)
    }
    if (operator == 2) {
        basic.showNumber(int1 + int2)
    }
    if (operator == 3) {
        basic.showNumber(int1 - int2)
    }
    if (operator == 4) {
        basic.showNumber(int1 / int2)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (operator <= 3) {
        operator += 1
    } else {
        operator += -1
    }
})
let int2 = 0
let int1 = 0
let operator = 0
operator = 1
basic.showString("<-Q   A->")
