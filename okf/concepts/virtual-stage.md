---
okf_version: "0.2"
type: Class
title: Virtual Stage
resource: urn:ngm:class:virtual-stage
domain: spatial-computing
description: A production environment surrounded by curved LED walls and floors displaying real-time computer-generated imagery, enabling in-camera visual effects (ICVFX) for film, television, and broadcast production. Digital backgrounds rendered by a game engine react dynamically to tracked camera movement, capturing realistic lighting and reflections directly on-sensor. Epic Games' StageCraft system and Unr
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-platform-and-environment
  - urn:ngm:class:production-facility
hasPart:
  - urn:ngm:class:virtual-production-volume
  - urn:ngm:class:virtual-camera
requires:
  - urn:ngm:class:vr-rendering-engine
  - urn:ngm:class:real-time-rendering
enables:
  - urn:ngm:class:virtual-production
  - urn:ngm:class:virtual-production-pipeline
bridgesTo:
  - urn:ngm:class:production-facility
uses:
  - urn:ngm:class:game-engine
  - urn:ngm:class:motion-capture
---

# Virtual Stage

A production environment surrounded by curved LED walls and floors displaying real-time computer-generated imagery, enabling in-camera visual effects (ICVFX) for film, television, and broadcast production. Digital backgrounds rendered by a game engine react dynamically to tracked camera movement, capturing realistic lighting and reflections directly on-sensor. Epic Games' StageCraft system and Unreal Engine power the majority of commercial installations, with facilities now exceeding 1,700 m² of LED surface area.
