/**
 * (c) 2021, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */

#include "pxt.h"

#if MICROBIT_CODAL

#include "Timer.h"
#include "MicroBitCompat.h"

#ifndef MICROBIT_ID_MAKECODE_POWER
#define MICROBIT_ID_MAKECODE_POWER 9000
#endif

#endif // MICROBIT_CODAL


namespace powerc {

#if MICROBIT_CODAL
int timerEventValue  = 1;
#endif // MICROBIT_CODAL


/**
  * Request power-down when the next idle, and wait until a power-up event occurs 
  */
//%
void powerDownAndWait() {
#if MICROBIT_CODAL
    uBit.power.deepSleep();
#else
    uBit.sleep(0);
#endif
}


/**
  * Request power-down when the next idle, then return immediately
  */
//%
void powerDownAndContinue() {
#if MICROBIT_CODAL
    uBit.power.deepSleepAsync();
#else
    uBit.sleep(0);
#endif
}


/**
  * Pause for a fixed interval, requesting power-down when next idle.
  * @param interval The period of time to pause, in milliseconds.
  */
//%
void powerDownAndPause(int interval) {
#if MICROBIT_CODAL
    uBit.power.deepSleep(interval);
#else
    uBit.sleep(interval);
#endif
}


/**
  * Disable power-down requests.
  * Disable and enable requests should occur in pairs.
  * The default is enabled.
*/
//%
void powerDownDisable() {
#if MICROBIT_CODAL
    uBit.power.powerDownDisable();
#endif
}


/**
  * Enable power-down requests.
  * Disable and enable requests should occur in pairs.
  * The default is enabled.
*/
//%
void powerDownEnable() {
#if MICROBIT_CODAL
    uBit.power.powerDownEnable();
#endif
}


/**
  * Determine if power-down requests are enabled
*/
//%
bool powerDownIsEnabled() {
#if MICROBIT_CODAL
    return uBit.power.powerDownIsEnabled();
#else
    return false;
#endif
}


/**
  * Do something repeatedy using a power-up timer.
  * @param interval time (in ms) for the timer.
  * @param body code to execute
  */
//%
void powerUpEvery(int interval, Action body) {
#if MICROBIT_CODAL
    registerWithDal( MICROBIT_ID_MAKECODE_POWER, timerEventValue, body);
    // CODAL_TIMER_EVENT_FLAGS_WAKEUP makes the timer event trigger power-up
    system_timer_event_after( 0, MICROBIT_ID_MAKECODE_POWER, timerEventValue, CODAL_TIMER_EVENT_FLAGS_WAKEUP);
    system_timer_event_every( interval, MICROBIT_ID_MAKECODE_POWER, timerEventValue++, CODAL_TIMER_EVENT_FLAGS_WAKEUP);
#else
    target_panic(PANIC_VARIANT_NOT_SUPPORTED);
#endif
}


/**
  * Set whether the source should trigger power-up.
  * @param sourceID the ID of the source to set (MICROBIT_ID_BUTTON_A, MICROBIT_ID_BUTTON_B, MICROBIT_ID_IO_P0, MICROBIT_ID_IO_P1, MICROBIT_ID_IO_P2).
  * @param enable true to trigger power-up or false for no power-up.
  */
//%
void powerUpEnable(int sourceID, bool enable) {
#if MICROBIT_CODAL
    switch ( sourceID)
    {
        case MICROBIT_ID_BUTTON_A:
          uBit.buttonA.wakeOnActive(enable ? 1 : 0);
          break;

        case MICROBIT_ID_BUTTON_B:
          uBit.buttonB.wakeOnActive(enable ? 1 : 0);
          break;

        case MICROBIT_ID_IO_P0:
        case MICROBIT_ID_IO_P1:
        case MICROBIT_ID_IO_P2:
        {
            MicroBitPin *pin = getPin(sourceID);
            pin->wakeOnActive(enable ? 1 : 0);
            break;
        }
        default:
            break;
    }
#endif
}


/**
  * Determine if the source will trigger power-up.
  * @param sourceID the ID of the source to set (MICROBIT_ID_BUTTON_A, MICROBIT_ID_BUTTON_B, MICROBIT_ID_IO_P0, MICROBIT_ID_IO_P1, MICROBIT_ID_IO_P2).
  * @return true if power-up is enabled
  */
//%
bool powerUpIsEnabled(int sourceID) {
#if MICROBIT_CODAL
    switch (sourceID)
    {
        case MICROBIT_ID_BUTTON_A:
          return uBit.buttonA.isWakeOnActive() ? true : false;
          break;

        case MICROBIT_ID_BUTTON_B:
          return uBit.buttonB.isWakeOnActive() ? true : false;
          break;
        
        case MICROBIT_ID_IO_P0:
        case MICROBIT_ID_IO_P1:
        case MICROBIT_ID_IO_P2:
        {
            MicroBitPin *pin = getPin(sourceID);
            return pin->isWakeOnActive() ? true : false;
            break;
        }
        default:
          break;
    }
#endif
    return false;
}


} // namespace powerc
