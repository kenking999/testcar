pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
basic.forever(function () {
    IdeaKitMaker.MotorRun(IdeaKitMaker.Motors.M2A, 250)
    IdeaKitMaker.MotorRun(IdeaKitMaker.Motors.M1A, 250)
})
