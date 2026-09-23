---
okf_version: "0.2"
type: Class
title: Time-of-Flight Sensor
resource: urn:ngm:class:time-of-flight-sensor
domain: robotics
description: A time-of-flight (ToF) sensor measures distance by emitting a light signal, typically infrared, and timing how long it takes to reflect back from a surface, yielding a per-pixel depth map. Because it directly measures travel time, it produces depth in real time without the baseline geometry needed by stereo cameras. ToF sensors are widely used for hand and gesture tracking, scene reconstruction, a
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:sensor
relatedTo:
  - urn:ngm:class:mixed-reality
  - urn:ngm:class:hand-tracking
---

# Time-of-Flight Sensor

A time-of-flight (ToF) sensor measures distance by emitting a light signal, typically infrared, and timing how long it takes to reflect back from a surface, yielding a per-pixel depth map. Because it directly measures travel time, it produces depth in real time without the baseline geometry needed by stereo cameras. ToF sensors are widely used for hand and gesture tracking, scene reconstruction, and mixed-reality depth sensing.
