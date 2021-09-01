/**
 * (c) 2021, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */

const enum PowerUpSource {
    A = 1,  // MICROBIT_ID_BUTTON_A
    B = 2,  // MICROBIT_ID_BUTTON_B
    P0 = 100,  // MICROBIT_ID_IO_P0
    P1 = 101,  // MICROBIT_ID_IO_P1
    P2 = 102,  // MICROBIT_ID_IO_P2
}


const enum PowerDownEnable {
    prevent = 0,
    allow = 1,
}


const enum PowerDownMode {
    //%continue
    proceed = 0,
    wait = 1,
}



//% block="Power"
//% icon="\uf011"
//% color=#AA278D
namespace power {

    /**
     * Request power-down when the next idle
     * @param mode If continue, then return immediately; if wait, then pause until a power-up event occurs 
     */
    //% help=power/request-power-down
    //% blockGap=8
    //% group="micro:bit (V2)"
    //% weight=800
    //% block="request power down||and $mode"
    export function powerDownRequest( mode?: PowerDownMode): void {
        if ( mode === PowerDownMode.wait) {
            powerc.powerDownAndWait()
        } else {
            powerc.powerDownAndContinue();
        }
    }

    /**
     * Request power-down when the next idle, and pause for a fixed interval.
     * @param interval The period of time to pause, in milliseconds.
     */
    //% help=power/power-down-for
    //% blockGap=8
    //% group="micro:bit (V2)"
    //% weight=700
    //% block="power down for $interval ms"
    //% interval.shadow=longTimePicker
    export function powerDownFor(interval: number): void {
        powerc.powerDownAndPause( interval)
    }

    /**
     * Do something repeatedy using a power-up timer.
     * @param interval time (in ms) for the timer.
     * @param body code to execute
     */
    //% help=power/power-up-every
    //% blockAllowMultiple=1
    //% interval.shadow=longTimePicker
    //% afterOnStart=true
    //% group="micro:bit (V2)"
    //% weight=600
    //% block="power up every $interval ms"
    export function powerUpEvery(interval: number, body: () => void): void {
        powerc.powerUpEvery( interval, body)
    }

    /**
     * Prevent or allow power-down during deepSleep.
     * Prevent and allow requests should occur in pairs.
     * The default is to allow.
     */
    //% help=power/power-down-enable
    //% blockGap=8
    //% group="micro:bit (V2)"
    //% weight=500
    //% block="power down %enable"
    export function powerDownEnable(enable: PowerDownEnable): void {
        switch (enable)
        {
            case PowerDownEnable.prevent:
                powerc.powerDownDisable();
                break; 
            case PowerDownEnable.allow:
                powerc.powerDownEnable();
                break; 
        }
    }

    /**
     * Determine if power-down during deepSleep is allowed
     */
    //% help=power/power-down-enabled
    //% group="micro:bit (V2)"
    export function powerDownIsEnabled(): boolean {
        return powerc.powerDownIsEnabled()
    }

    /**
     * Set whether the source should trigger power-up.
     * @param source the PowerUpSource to set
     * @param enable true to trigger power-up or false for no power-up
     */
    //% help=power/power-up-enable
    //% group="micro:bit (V2)"
    export function powerUpEnable(source: PowerUpSource, enable: boolean): void {
        powerc.powerUpEnable(source, enable)
    }

    /**
     * Determine if the source will trigger power-up.
     * @param source the source to check
     * @return true if power-up is enabled
     */
    //% help=power/power-up-is-enabled
    export function powerUpIsEnabled(source: PowerUpSource): boolean {
        return powerc.powerUpIsEnabled(source)
    }

    /**
     * Set the source to trigger power-up.
     * @param source the source to set
     */
    //% help=power/power-up-on
    //% blockGap=8
    //% group="micro:bit (V2)"
    //% weight=900
    //% block="power up on %source"
    export function powerUpOn(source: PowerUpSource): void {
        powerc.powerUpEnable(source, true)
    }
}
