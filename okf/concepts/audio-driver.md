---
okf_version: "0.2"
type: Class
title: Audio Driver
resource: urn:ngm:class:audio-driver
domain: spatial-computing
description: An audio driver is the low-level software component that mediates between an operating system's audio subsystem and physical sound hardware, translating generic playback and capture requests into device-specific commands. It manages buffering, sample-rate conversion, latency and device enumeration, and is a prerequisite for any higher-level audio pipeline to reach speakers, headphones or microphon
maturity: established
quality: 0.65
is-a:
  - urn:ngm:class:audio-system
requires:
  - urn:ngm:class:audio-system
---

# Audio Driver

An audio driver is the low-level software component that mediates between an operating system's audio subsystem and physical sound hardware, translating generic playback and capture requests into device-specific commands. It manages buffering, sample-rate conversion, latency and device enumeration, and is a prerequisite for any higher-level audio pipeline to reach speakers, headphones or microphones. In spatial and immersive computing, driver latency and buffer size directly affect the achievable audio-visual synchronisation.
