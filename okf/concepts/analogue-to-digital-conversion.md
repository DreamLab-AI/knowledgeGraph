---
okf_version: "0.2"
type: Class
title: Analogue To Digital Conversion
resource: urn:ngm:class:analogue-to-digital-conversion
domain: robotics
description: "Analogue-to-digital conversion is the process of transforming a continuous physical signal, such as voltage from a sensor, into a discrete sequence of numerical values that a digital system can store and process. It proceeds by sampling the signal at regular intervals and quantising each sample to a finite set of levels, with the sampling rate and bit depth determining how faithfully the original "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:signal-processing
hasPart:
  - urn:ngm:class:sampling
  - urn:ngm:class:analog-to-digital-converter
requires:
  - urn:ngm:class:signal-conditioning
  - urn:ngm:class:sensor
enables:
  - urn:ngm:class:digital-signal-processing
  - urn:ngm:class:data-acquisition
dependsOn:
  - urn:ngm:class:sensor
uses:
  - urn:ngm:class:analog-to-digital-converter
  - urn:ngm:class:sampling
supports:
  - urn:ngm:class:embedded-system
partOf:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:data-acquisition
relatedTo:
  - urn:ngm:class:signal-conditioning
  - urn:ngm:class:digital-signal-processing
  - urn:ngm:class:embedded-system
---

# Analogue To Digital Conversion

Analogue-to-digital conversion is the process of transforming a continuous physical signal, such as voltage from a sensor, into a discrete sequence of numerical values that a digital system can store and process. It proceeds by sampling the signal at regular intervals and quantising each sample to a finite set of levels, with the sampling rate and bit depth determining how faithfully the original is represented. In robotics and embedded systems it is the essential bridge between the analogue physical world and digital control and perception pipelines.
