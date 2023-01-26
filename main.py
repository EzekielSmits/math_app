def ShowOperator():
    if operator == 1:
        basic.show_string("x")
    if operator == 2:
        basic.show_string("+")
    if operator == 3:
        basic.show_string("-")
    if operator == 4:
        basic.show_string("/")

def on_button_pressed_a():
    global int1, int2
    int1 = randint(0, 10)
    int2 = randint(0, 10)
    basic.show_number(int1)
    basic.pause(1000)
    ShowOperator()
    basic.pause(1000)
    basic.show_number(int2)
    basic.pause(1000)
    basic.show_string("= ?")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global int1, int2
    int1 = randint(0, 100)
    int2 = randint(0, 100)
    basic.show_number(int1)
    basic.pause(1000)
    ShowOperator()
    basic.pause(1000)
    basic.show_number(int2)
    basic.pause(1000)
    basic.show_string("= ?")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    if operator == 1:
        basic.show_number(int1 * int2)
    if operator == 2:
        basic.show_number(int1 + int2)
    if operator == 3:
        basic.show_number(int1 - int2)
    if operator == 4:
        basic.show_number(int1 / int2)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    global operator
    if operator <= 3:
        operator += 1
    else:
        operator += -1
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

int2 = 0
int1 = 0
operator = 0
operator = 1
basic.show_string("<-Q   A->")