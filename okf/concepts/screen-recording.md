---
okf_version: "0.2"
type: Class
title: Screen Recording
resource: urn:ngm:class:screen-recording
domain: infrastructure
description: Screen recording is the capture of pixel-level output from a computer display — including cursor movement, application windows, and system UI — encoded into a video stream for later playback, streaming, or analysis. It combines display capture with optional audio recording and may include region selection, frame-rate control, hardware-accelerated encoding, and metadata tagging.
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:screen-capture
hasPart:
  - urn:ngm:class:audio-capture
requires:
  - urn:ngm:class:codec
enables:
  - urn:ngm:class:compliance-monitoring
contrastsWith:
  - urn:ngm:class:live-streaming
  - urn:ngm:class:screenshot
bridgesTo:
  - urn:ngm:class:accessibility
uses:
  - urn:ngm:class:screen-capture-api
  - urn:ngm:class:video-encoding
supports:
  - urn:ngm:class:video-conferencing
  - urn:ngm:class:asynchronous-communication
  - urn:ngm:class:remote-collaboration
relatedTo:
  - urn:ngm:class:display-capture
  - urn:ngm:class:application-window-capture
  - urn:ngm:class:browser-based-screen-capture
---

# Screen Recording

Screen recording is the capture of pixel-level output from a computer display — including cursor movement, application windows, and system UI — encoded into a video stream for later playback, streaming, or analysis. It combines display capture with optional audio recording and may include region selection, frame-rate control, hardware-accelerated encoding, and metadata tagging.
