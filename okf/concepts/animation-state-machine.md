---
okf_version: "0.2"
type: Class
title: Animation State Machine
resource: urn:ngm:class:animation-state-machine
domain: spatial-computing
description: An animation state machine is a graph of discrete animation states and the transitions between them, used in real-time engines to drive a character or object's motion based on game logic, input and parameters. Each state references a clip or blend tree, and transitions carry conditions, blend durations and interruption rules that govern how one motion flows into another. It separates high-level be
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:state-machine
hasPart:
  - urn:ngm:class:blend-tree
requires:
  - urn:ngm:class:skeletal-animation
enables:
  - urn:ngm:class:character-animation
dependsOn:
  - urn:ngm:class:game-engine
implements:
  - urn:ngm:class:finite-state-machine
contrastsWith:
  - urn:ngm:class:blend-tree
bridgesTo:
  - urn:ngm:class:unreal-engine
uses:
  - urn:ngm:class:blend-tree
supports:
  - urn:ngm:class:game-engine
standardizedBy:
  - urn:ngm:class:game-engine
partOf:
  - urn:ngm:class:character-animation
relatedTo:
  - urn:ngm:class:skeletal-animation
  - urn:ngm:class:finite-state-machine
---

# Animation State Machine

An animation state machine is a graph of discrete animation states and the transitions between them, used in real-time engines to drive a character or object's motion based on game logic, input and parameters. Each state references a clip or blend tree, and transitions carry conditions, blend durations and interruption rules that govern how one motion flows into another. It separates high-level behaviour authoring from low-level pose evaluation, making locomotion and action systems tractable to build and tune.
