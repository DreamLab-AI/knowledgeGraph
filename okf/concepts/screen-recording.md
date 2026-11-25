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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Screen Recording

Screen recording is the capture of pixel-level output from a computer display — including cursor movement, application windows, and system UI — encoded into a video stream for later playback, streaming, or analysis. It combines display capture with optional audio recording and may include region selection, frame-rate control, hardware-accelerated encoding, and metadata tagging.
