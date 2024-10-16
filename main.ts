OLED12864_I2C.init(60)
basic.forever(function () {
    OLED12864_I2C.showString(
    0,
    0,
    "Hello Plumbot",
    1
    )
    OLED12864_I2C.showNumber(
    0,
    1,
    pins.analogReadPin(AnalogReadWritePin.P3),
    1
    )
    OLED12864_I2C.showString(
    3,
    1,
    " ",
    1
    )
    OLED12864_I2C.showNumber(
    9,
    1,
    pins.analogReadPin(AnalogReadWritePin.P4),
    1
    )
    OLED12864_I2C.showNumber(
    5,
    2,
    sonar.ping(
    DigitalPin.P12,
    DigitalPin.P11,
    PingUnit.Centimeters
    ),
    1
    )
    if (pins.analogReadPin(AnalogReadWritePin.P3) > 750 && pins.analogReadPin(AnalogReadWritePin.P4) < 750) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else if (pins.analogReadPin(AnalogReadWritePin.P3) < 750 && pins.analogReadPin(AnalogReadWritePin.P4) > 750) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else if (pins.analogReadPin(AnalogReadWritePin.P3) > 750 && pins.analogReadPin(AnalogReadWritePin.P4) > 750) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
})
