// Auto-generated. Do not edit.
declare namespace power {

    /**
     * Request power-down when the next idle
     */
    //% blockHidden=true
    //% shim=power::deepSleepAsync
    function deepSleepAsync(): void;

    /**
     * Request power-down when the next idle and wait
     */
    //% blockHidden=true
    //% shim=power::deepSleep
    function deepSleep(): void;

    /**
     * Request power-down when the next idle
     * @param mode If continue, then return immediately; if wait, then pause until a power-up event occurs 
     */
    //% shim=power::powerDownRequest
    function powerDownRequest(mode: PowerDownMode): void;

    /**
     * Pause for a fixed interval, requesting power-down when next idle.
     * @param interval The period of time to pause, in milliseconds.
     */
    //% shim=power::powerDownFor
    function powerDownFor(interval: int32): void;

    /**
     * Do something repeatedy using a power-up timer.
     * @param interval time (in ms) for the timer.
     * @param body code to execute
     */
    //% shim=power::powerUpEvery
    function powerUpEvery(interval: int32, body: () => void): void;

    /**
     * Prevent or allow power-down during deepSleep.
     * Prevent and allow requests should occur in pairs.
     * The default is to allow.
     */
    //% shim=power::powerDownControl
    function powerDownControl(control: PowerDownControl): void;

    /**
     * Determine if power-down during deepSleep is allowed
     */
    //% shim=power::powerDownIsAllowed
    function powerDownIsAllowed(): boolean;

    /**
     * Set whether the source should trigger power-up.
     * @param source the PowerUpSource to set
     * @param enable true to trigger power-up or false for no power-up
     */
    //% shim=power::powerUpEnable
    function powerUpEnable(source: PowerUpSource, enable: boolean): void;

    /**
     * Determine if the source will trigger power-up.
     * @param source the source to check
     * @return true if power-up is enabled
     */
    //% shim=power::powerUpIsEnabled
    function powerUpIsEnabled(source: PowerUpSource): boolean;

    /**
     * Set the source to trigger power-up.
     * @param source the source to set
     */
    //% shim=power::powerUpOn
    function powerUpOn(source: PowerUpSource): void;
}

// Auto-generated. Do not edit. Really.
