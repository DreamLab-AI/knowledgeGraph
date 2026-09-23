---
okf_version: "0.2"
type: Class
title: Virtual Production
resource: urn:ngm:class:virtual-production
domain: spatial-computing
description: Real-time filmmaking technique combining LED Volume stages, game engine rendering, and in-camera visual effects (ICVFX) to create photorealistic virtual environments during live-action production, enabling directors to see final composited imagery on set. It integrates motion capture, photogrammetry, and neural rendering to compress post-production timelines and allow creative decisions to be made
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:sc-display-and-rendering
hasPart:
  - urn:ngm:class:virtual-production-pipeline
  - urn:ngm:class:virtual-production-volume
  - urn:ngm:class:virtual-stage
  - urn:ngm:class:virtual-production-workflow
bridgesTo:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:computer-vision
uses:
  - urn:ngm:class:game-engine
  - urn:ngm:class:motion-capture
  - urn:ngm:class:real-time-rendering-pipeline
  - urn:ngm:class:neural-rendering
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:display-hardware
relatedTo:
  - urn:ngm:class:film-production
  - urn:ngm:class:vfx-tools
  - urn:ngm:class:volumetric-capture
---

# Virtual Production

Real-time filmmaking technique combining LED Volume stages, game engine rendering, and in-camera visual effects (ICVFX) to create photorealistic virtual environments during live-action production, enabling directors to see final composited imagery on set. It integrates motion capture, photogrammetry, and neural rendering to compress post-production timelines and allow creative decisions to be made on set rather than in post.
