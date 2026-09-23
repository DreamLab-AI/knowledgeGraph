---
okf_version: "0.2"
type: Class
title: Real-Time Control
resource: urn:ngm:class:real-time-control
domain: robotics
description: Real-Time Control is the design and implementation of control systems that must respond to sensor inputs and actuator commands within bounded, deterministic time deadlines, where missing a deadline constitutes system failure. Hard real-time systems—common in aircraft fly-by-wire, automotive ABS, and surgical robotics—require guaranteed worst-case execution times measured in microseconds to millise
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:control-system
hasPart:
  - urn:ngm:class:control-loop
  - urn:ngm:class:deadline-scheduling
requires:
  - urn:ngm:class:task-scheduling
  - urn:ngm:class:priority-scheduling
  - urn:ngm:class:deterministic-networking
enables:
  - urn:ngm:class:robot-control
  - urn:ngm:class:motion-control
  - urn:ngm:class:closed-loop-control
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:industrial-automation
contrastsWith:
  - urn:ngm:class:batch-processing
bridgesTo:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:pid-controller
  - urn:ngm:class:actuator
  - urn:ngm:class:latency
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:state-estimation
relatedTo:
  - urn:ngm:class:feedback-control
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:real-time-operating-system
  - urn:ngm:class:determinism
  - urn:ngm:class:worst-case-execution-time
---

# Real-Time Control

Real-Time Control is the design and implementation of control systems that must respond to sensor inputs and actuator commands within bounded, deterministic time deadlines, where missing a deadline constitutes system failure. Hard real-time systems—common in aircraft fly-by-wire, automotive ABS, and surgical robotics—require guaranteed worst-case execution times measured in microseconds to milliseconds. Soft real-time systems tolerate occasional deadline misses with degraded performance rather than catastrophic failure. Real-time control relies on real-time operating systems (RTOS), dedicated hardware co-processors, and carefully bounded software to ensure predictable timing under all operating conditions.
