input.onButtonPressed(Button.A, function () {
    int1 = randint(0, 10)
    int2 = randint(0, 10)
    ReturnOperator()
    basic.showString("" + int1 + currentOperator + int2)
})
function ReturnOperator () {
    if (operator == 1) {
        currentOperator = "x"
    }
    if (operator == 2) {
        currentOperator = "+"
    }
    if (operator == 3) {
        currentOperator = "-"
    }
    if (operator == 4) {
        currentOperator = "/"
    }
}
input.onButtonPressed(Button.AB, function () {
    int1 = randint(0, 100)
    int2 = randint(0, 100)
    ReturnOperator()
    basic.showString("" + int1 + currentOperator + int2)
})
function GetAnswer () {
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
}
input.onButtonPressed(Button.B, function () {
    GetAnswer()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (operator <= 3) {
        operator += 1
    } else {
        operator += -1
    }
})
let currentOperator = ""
let int2 = 0
let int1 = 0
let operator = 0
operator = 1
basic.showString("<-Q   A->")
