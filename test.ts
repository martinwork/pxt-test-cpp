/**
 * (c) 2021, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */

function flash(x: number) {
    power.powerDownControl(PowerDownControl.prevent)
    led.plot(x, 0)
    basic.pause(1000)
    led.unplot(x, 0)
    led.plot(x, 1)
    basic.pause(1000)
    led.unplot(x, 1)
    power.powerDownControl(PowerDownControl.allow)
}

input.onButtonPressed(Button.A, function () {
    flash(1)
    power.powerDownRequest(PowerDownMode.proceed)
})

input.onButtonPressed(Button.B, function () {
    flash(2)
    power.powerDownRequest(PowerDownMode.proceed)
})

basic.showString("POWER")
power.powerUpOn(PowerUpSource.A)
power.powerUpOn(PowerUpSource.B)

power.powerUpEvery(6000, function () {
    flash(3)
    power.powerDownRequest(PowerDownMode.proceed)
})

basic.forever(function () {
    flash(0)
    power.powerDownFor(20000)
})

basic.forever(function () {
    flash(4)
    power.powerDownRequest(PowerDownMode.wait)
})
