---
okf_version: "0.2"
type: Class
title: Animation Clip
resource: urn:ngm:class:animation-clip
domain: spatial-computing
description: An animation clip is a discrete, reusable unit of animation data, typically a time-ordered sequence of keyframes or pose samples for a skeleton or property set, such as a walk cycle or a wave gesture. Animation controllers and state machines reference clips as the atomic assets they blend, sequence and transition between at runtime. Clips are commonly authored once and retargeted across multiple c
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:animation
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Animation Clip

An animation clip is a discrete, reusable unit of animation data, typically a time-ordered sequence of keyframes or pose samples for a skeleton or property set, such as a walk cycle or a wave gesture. Animation controllers and state machines reference clips as the atomic assets they blend, sequence and transition between at runtime. Clips are commonly authored once and retargeted across multiple character rigs that share a compatible skeleton.
