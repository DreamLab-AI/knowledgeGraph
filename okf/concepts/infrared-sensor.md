---
okf_version: "0.2"
type: Class
title: InfraredSensor
resource: urn:ngm:class:infrared-sensor
domain: robotics
description: An optoelectronic sensor device that detects electromagnetic radiation in the infrared spectrum (wavelengths approximately 700 nanometers to 1 millimeter) to measure heat emission, enable proximity detection, support autonomous navigation, or facilitate object recognition in robotic systems, empl...
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:robo-perception
  - urn:ngm:class:exteroceptive-sensor
  - urn:ngm:class:optoelectronicdevice
  - urn:ngm:class:proximity-sensor
  - urn:ngm:class:thermalimager
hasPart:
  - urn:ngm:class:analog-to-digital-converter
  - urn:ngm:class:signal-amplifier
  - urn:ngm:class:iremitter
  - urn:ngm:class:irreceiver
  - urn:ngm:class:opticalfilter
  - urn:ngm:class:signalamplifier
  - urn:ngm:class:analog-to-digital-converter
  - urn:ngm:class:lensassembly
requires:
  - urn:ngm:class:calibration
  - urn:ngm:class:power-supply
  - urn:ngm:class:signal-processing
  - urn:ngm:class:power-supply
  - urn:ngm:class:signal-processing
  - urn:ngm:class:opticalalignment
  - urn:ngm:class:temperaturecompensation
enables:
  - urn:ngm:class:gesture-recognition
  - urn:ngm:class:obstacle-avoidance
  - urn:ngm:class:presence-detection
  - urn:ngm:class:obstacle-avoidance
  - urn:ngm:class:linefollowing
  - urn:ngm:class:gesture-recognition
  - urn:ngm:class:presence-detection
  - urn:ngm:class:thermalinspection
  - urn:ngm:class:navigationcontrol
---

# InfraredSensor

An optoelectronic sensor device that detects electromagnetic radiation in the infrared spectrum (wavelengths approximately 700 nanometers to 1 millimeter) to measure heat emission, enable proximity detection, support autonomous navigation, or facilitate object recognition in robotic systems, empl...
