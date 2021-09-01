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


enum class PowerUpSource {
    A  = MICROBIT_ID_BUTTON_A,
    B  = MICROBIT_ID_BUTTON_B,
    P0 = MICROBIT_ID_IO_P0,
    P1 = MICROBIT_ID_IO_P1,
    P2 = MICROBIT_ID_IO_P2
};


enum class PowerDownControl {
    prevent,
    allow
};


enum class PowerDownMode {
    //%continue
    proceed,
    wait
};


namespace power {

#if MICROBIT_CODAL
int timerEventValue  = 1;
#endif // MICROBIT_CODAL

/**
  * Request power-down when the next idle
  */
//% blockHidden=true
//%
void deepSleepAsync() {
#if MICROBIT_CODAL
    uBit.power.deepSleepAsync();
#else
    uBit.sleep(0);
#endif
}

/**
  * Request power-down when the next idle and wait
  */
//% blockHidden=true
//%
void deepSleep() {
#if MICROBIT_CODAL
    uBit.power.deepSleep();
#else
    uBit.sleep(0);
#endif
}

/**
  * Request power-down when the next idle
  * @param mode If continue, then return immediately; if wait, then pause until a power-up event occurs 
  */
//%
void powerDownRequest(PowerDownMode mode) {
#if MICROBIT_CODAL
    switch ( mode)
    {
        case PowerDownMode::proceed:
            uBit.power.deepSleepAsync();
            break;

        case PowerDownMode::wait:
            uBit.power.deepSleep();
            break;
    }
#else
    uBit.sleep(0);
#endif
}


/**
  * Pause for a fixed interval, requesting power-down when next idle.
  * @param interval The period of time to pause, in milliseconds.
  */
//%
void powerDownFor(int interval) {
#if MICROBIT_CODAL
    uBit.power.deepSleep(interval);
#else
    uBit.sleep(interval);
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
  * Prevent or allow power-down during deepSleep.
  * Prevent and allow requests should occur in pairs.
  * The default is to allow.
*/
//%
void powerDownControl(PowerDownControl control) {
#if MICROBIT_CODAL
    switch ( control)
    {
        case PowerDownControl::prevent:
            uBit.power.powerDownDisable();
            break;

        case PowerDownControl::allow:
            uBit.power.powerDownEnable();
            break;

        default:
            break;
    }
#endif
}


/**
  * Determine if power-down during deepSleep is allowed
*/
//%
bool powerDownIsAllowed() {
#if MICROBIT_CODAL
    return uBit.power.powerDownIsEnabled();
#else
    return false;
#endif
}


/**
  * Set whether the source should trigger power-up.
  * @param source the PowerUpSource to set
  * @param enable true to trigger power-up or false for no power-up
  */
//%
void powerUpEnable(PowerUpSource source, bool enable) {
#if MICROBIT_CODAL
    switch ( source)
    {
        case PowerUpSource::A:
          uBit.buttonA.wakeOnActive(enable ? 1 : 0);
          break;

        case PowerUpSource::B:
          uBit.buttonB.wakeOnActive(enable ? 1 : 0);
          break;

        case PowerUpSource::P0:
        case PowerUpSource::P1:
        case PowerUpSource::P2:
        {
            MicroBitPin *pin = getPin((int)source);
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
  * @param source the source to check
  * @return true if power-up is enabled
  */
//%
bool powerUpIsEnabled(PowerUpSource source) {
#if MICROBIT_CODAL
    switch ( source)
    {
        case PowerUpSource::A:
          return uBit.buttonA.isWakeOnActive() ? true : false;
          break;

        case PowerUpSource::B:
          return uBit.buttonB.isWakeOnActive() ? true : false;
          break;
        
        case PowerUpSource::P0:
        case PowerUpSource::P1:
        case PowerUpSource::P2:
        {
            MicroBitPin *pin = getPin((int)source);
            return pin->isWakeOnActive() ? true : false;
            break;
        }
        default:
          break;
    }
#endif
    return false;
}


/**
  * Set the source to trigger power-up.
  * @param source the source to set
  */
//%
void powerUpOn(PowerUpSource source) {
    powerUpEnable(source, true);
}


} // namespace power
