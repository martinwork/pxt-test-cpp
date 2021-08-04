// Auto-generated. Do not edit.



    //% block="Power"
    //% icon="\uf011"
    //% color=#AA278D
declare namespace power {

    /**
     * Pause until a wake up event occurs, and request power down when idle.
     */
    //% help=power/deep-sleep
    //% blockGap=8
    //% group="micro:bit (V2)"
    //% weight=800
    //% block="deep sleep" shim=power::deepSleep
    function deepSleep(): void;

    /**
     * Request power down when idle, and return immediately.
     */
    //% help=power/deep-sleep-async
    //% blockGap=8
    //% group="micro:bit (V2)"
    //% weight=400
    //% block="request deep sleep" shim=power::deepSleepAsync
    function deepSleepAsync(): void;

    /**
     * Pause for a fixed interval, and request power down when idle.
     * @param interval The period of time to pause, in milliseconds.
     */
    //% help=power/deep-sleep-pause
    //% blockGap=8
    //% group="micro:bit (V2)"
    //% weight=700
    //% block="deep sleep pause $interval ms"
    //% interval.shadow=longTimePicker shim=power::deepSleepPause
    function deepSleepPause(interval: uint32): void;

    /**
     * Do something repeatedy using a timer event.
     * The timer event is a deep sleep wake-up source.
     * @param interval time (in ms) for the timer.
     * @param body code to execute
     */
    //% block="on timer every $interval ms"
    //% blockId=on_timer_every
    //% group="micro:bit (V2)"
    //% blockAllowMultiple=1
    //% interval.shadow=longTimePicker
    //% afterOnStart=true
    //% weight=600
    //% help=power/on-timer-every shim=power::onTimerEvery
    function onTimerEvery(interval: uint32, body: () => void): void;

    /**
     * Block or allow power down during deepSleep
     * Block and allow requests should occur in pairs.
     * The default is to allow.
     */
    //% help=power/power-down
    //% blockGap=8
    //% group="micro:bit (V2)"
    //% weight=500
    //% block="%choice power down" shim=power::powerDown
    function powerDown(choice: PowerDownChoice): void;

    /**
     * Determine if power down during deepSleep is enabled
     */
    //% help=power/power-down-enabled
    //% group="micro:bit (V2)" shim=power::powerDownIsEnabled
    function powerDownIsEnabled(): boolean;

    /**
     * Set whether the source should trigger power save wake-up.
     * @param source the source to set
     * @param wake true to trigger wake-up or false for no wake-up
     */
    //% help=power/wake-on
    //% group="micro:bit (V2)" shim=power::wakeOn
    function wakeOn(source: PowerWakeup, wake: boolean): void;

    /**
     * Set the source to trigger power save wake-up.
     * @param source the source to set
     */
    //% help=power/wake-on
    //% blockGap=8
    //% group="micro:bit (V2)"
    //% weight=900
    //% block="wake on %source" shim=power::wakeOnEnable
    function wakeOnEnable(source: PowerWakeup): void;

    /**
     * Determine if the source will trigger power save wake-up.
     * @param source the source to set
     * @return true is wake-up is enabled
     */
    //% help=power/wake-on-enabled shim=power::wakeOnIsEnabled
    function wakeOnIsEnabled(source: PowerWakeup): boolean;
}

// Auto-generated. Do not edit. Really.