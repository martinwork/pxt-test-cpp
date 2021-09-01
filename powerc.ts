/**
 * (c) 2021, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */


namespace powerc {

    /**
     * Request power-down when the next idle, and wait until a power-up event occurs 
     */
    //% shim=powerc::powerDownAndWait
    function powerDownAndWait(): void { 
        basic.pause(0)
    }

    /**
     * Request power-down when the next idle, then return immediately
     */
    //% shim=powerc::powerDownAndContinue
    function powerDownAndContinue(): void {
        basic.pause(0)
    }

    /**
     * Pause for a fixed interval, requesting power-down when next idle.
     * @param interval The period of time to pause, in milliseconds.
     */
    //% shim=powerc::powerDownAndPause
    function powerDownAndPause(interval: int32): void {
        basic.pause(interval)
    }

    /**
     * Disable power-down requests.
     * Disable and enable requests should occur in pairs.
     * The default is enabled.
     */
    //% shim=powerc::powerDownDisable
    function powerDownDisable(): void {
        basic.pause(0)
    }

    /**
     * Enable power-down requests.
     * Disable and enable requests should occur in pairs.
     * The default is enabled.
     */
    //% shim=powerc::powerDownEnable
    function powerDownEnable(): void {
        basic.pause(0)
    }

    /**
     * Determine if power-down requests are enabled
     */
    //% shim=powerc::powerDownIsEnabled
    function powerDownIsEnabled(): boolean {
        return false
    }

    /**
     * Do something repeatedy using a power-up timer.
     * @param interval time (in ms) for the timer.
     * @param body code to execute
     */
    //% shim=powerc::powerUpEvery
    function powerUpEvery(interval: int32, body: () => void): void {
        loops.everyInterval(interval, body)
    }

    /**
     * Set whether the source should trigger power-up.
     * @param sourceID the ID of the source to set (MICROBIT_ID_BUTTON_A, MICROBIT_ID_BUTTON_B, MICROBIT_ID_IO_P0, MICROBIT_ID_IO_P1, MICROBIT_ID_IO_P2).
     * @param enable true to trigger power-up or false for no power-up.
     */
    //% shim=powerc::powerUpEnable
    function powerUpEnable(sourceID: int32, enable: boolean): void {
        basic.pause(0)
    }

    /**
     * Determine if the source will trigger power-up.
     * @param sourceID the ID of the source to set (MICROBIT_ID_BUTTON_A, MICROBIT_ID_BUTTON_B, MICROBIT_ID_IO_P0, MICROBIT_ID_IO_P1, MICROBIT_ID_IO_P2).
     * @return true if power-up is enabled
     */
    //% shim=powerc::powerUpIsEnabled
    function powerUpIsEnabled(sourceID: int32): boolean {
        return false
    }
}
