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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Audio Driver

An audio driver is the low-level software component that mediates between an operating system's audio subsystem and physical sound hardware, translating generic playback and capture requests into device-specific commands. It manages buffering, sample-rate conversion, latency and device enumeration, and is a prerequisite for any higher-level audio pipeline to reach speakers, headphones or microphones. In spatial and immersive computing, driver latency and buffer size directly affect the achievable audio-visual synchronisation.
