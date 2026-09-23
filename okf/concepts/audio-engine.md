---
okf_version: "0.2"
type: Class
title: Audio Engine
resource: urn:ngm:class:audio-engine
domain: metaverse
description: An Audio Engine is a software subsystem that manages the real-time synthesis, processing, mixing, and spatialisation of sound within an interactive or generative application. It abstracts hardware audio interfaces, schedules audio computation on dedicated threads or hardware DSP units, and exposes higher-level APIs for triggering, routing, and modulating sound objects in response to application ev
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:audio-system
enables:
  - urn:ngm:class:spatial-audio
  - urn:ngm:class:audio-spatialization
  - urn:ngm:class:procedural-audio-generator
uses:
  - urn:ngm:class:audio-signal-processing
  - urn:ngm:class:digital-signal-processing
relatedTo:
  - urn:ngm:class:game-engine
---

# Audio Engine

An Audio Engine is a software subsystem that manages the real-time synthesis, processing, mixing, and spatialisation of sound within an interactive or generative application. It abstracts hardware audio interfaces, schedules audio computation on dedicated threads or hardware DSP units, and exposes higher-level APIs for triggering, routing, and modulating sound objects in response to application events.
