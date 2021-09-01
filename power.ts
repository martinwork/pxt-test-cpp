/**
 * (c) 2021, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */


namespace power {

    /**
     * Request power-down when the next idle
     */
    //% blockHidden=true
    //% shim=power::deepSleepAsync
    function deepSleepAsync(): void { basic.pause(0) }

    /**
     * Request power-down when the next idle and wait
     */
    //% blockHidden=true
    //% shim=power::deepSleep
    function deepSleep(): void { basic.pause(0) }

    /**
     * Request power-down when the next idle
     * @param mode If continue, then return immediately; if wait, then pause until a power-up event occurs 
     */
    //% help=power/request-power-down
    //% blockGap=8
    //% group="micro:bit (V2)"
    //% weight=400
    //% block="request power down||$mode"
    //% shim=power::powerDownRequest
    function powerDownRequest( mode: PowerDownMode): void
    {
        switch ( mode)
        {
            case PowerDownMode.proceed:
                deepSleepAsync();
                break;

            case PowerDownMode.wait:
                deepSleep();
                break;
        }
    }

    /**
     * Pause for a fixed interval, requesting power-down when next idle.
     * @param interval The period of time to pause, in milliseconds.
     */
    //% help=power/power-down-for
    //% blockGap=8
    //% group="micro:bit (V2)"
    //% weight=700
    //% block="power down for $interval ms"
    //% interval.shadow=longTimePicker
    //% shim=power::powerDownFor
    function powerDownFor(interval: int32): void { basic.pause(interval) }

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
    //% shim=power::powerUpEvery
    function powerUpEvery(interval: int32, body: () => void): void { loops.everyInterval(interval, body) }

    /**
     * Prevent or allow power-down during deepSleep.
     * Prevent and allow requests should occur in pairs.
     * The default is to allow.
     */
    //% help=power/power-down-control
    //% blockGap=8
    //% group="micro:bit (V2)"
    //% weight=500
    //% block="power down %control"
    //% shim=power::powerDownControl
    function powerDownControl(control: PowerDownControl): void { basic.pause(0) }

    /**
     * Determine if power-down during deepSleep is allowed
     */
    //% help=power/power-down-allowed
    //% group="micro:bit (V2)"
    //% shim=power::powerDownIsAllowed
    function powerDownIsAllowed(): boolean { return false }

    /**
     * Set whether the source should trigger power-up.
     * @param source the PowerUpSource to set
     * @param enable true to trigger power-up or false for no power-up
     */
    //% help=power/power-up-enable
    //% group="micro:bit (V2)"
    //% shim=power::powerUpEnable
    function powerUpEnable(source: PowerUpSource, enable: boolean): void { basic.pause(0) }

    /**
     * Determine if the source will trigger power-up.
     * @param source the source to check
     * @return true if power-up is enabled
     */
    //% help=power/power-up-is-enabled
    //% shim=power::powerUpIsEnabled
    function powerUpIsEnabled(source: PowerUpSource): boolean { return false }

    /**
     * Set the source to trigger power-up.
     * @param source the source to set
     */
    //% help=power/power-up-on
    //% blockGap=8
    //% group="micro:bit (V2)"
    //% weight=900
    //% block="power up on %source"
    //% shim=power::powerUpOn
    function powerUpOn(source: PowerUpSource): void { basic.pause(0) }
}
