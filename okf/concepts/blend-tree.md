---
okf_version: "0.2"
type: Class
title: Blend Tree
resource: urn:ngm:class:blend-tree
domain: spatial-computing
description: A blend tree is a structure within an animation system that smoothly blends multiple animation clips according to one or more continuous parameters, producing a single output pose. It is commonly used for locomotion, where clips such as idle, walk and run are interpolated by speed and direction to avoid abrupt transitions. Blend trees are typically composed within an animation controller alongside
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:animation
hasPart:
  - urn:ngm:class:keyframe-animation
requires:
  - urn:ngm:class:animation-controller
enables:
  - urn:ngm:class:locomotion
  - urn:ngm:class:procedural-animation
dependsOn:
  - urn:ngm:class:game-engine
implements:
  - urn:ngm:class:real-time-rendering
uses:
  - urn:ngm:class:skeletal-animation
  - urn:ngm:class:keyframe-animation
supports:
  - urn:ngm:class:character-animation
partOf:
  - urn:ngm:class:animation-controller
relatedTo:
  - urn:ngm:class:motion-capture
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:unity
  - urn:ngm:class:unreal-engine
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Blend Tree

A blend tree is a structure within an animation system that smoothly blends multiple animation clips according to one or more continuous parameters, producing a single output pose. It is commonly used for locomotion, where clips such as idle, walk and run are interpolated by speed and direction to avoid abrupt transitions. Blend trees are typically composed within an animation controller alongside state machines that govern when each tree is active.
