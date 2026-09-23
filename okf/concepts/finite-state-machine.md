---
okf_version: "0.2"
type: Class
title: Finite State Machine
resource: urn:ngm:class:finite-state-machine
domain: artificial-intelligence
description: A finite state machine (FSM) is an abstract computational model consisting of a finite set of states, a set of input events, and a transition function that maps a current state and input to a next state. At any moment the machine occupies exactly one state, and its behaviour is fully determined by its current state and the inputs it receives. FSMs are widely used to specify control logic, protocol
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:state-machine
hasPart:
  - urn:ngm:class:state-machine
  - urn:ngm:class:regular-expression
enables:
  - urn:ngm:class:protocol-design
  - urn:ngm:class:workflow-engine
dependsOn:
  - urn:ngm:class:automata-theory
implements:
  - urn:ngm:class:game-ai
  - urn:ngm:class:behaviour-tree
contrastsWith:
  - urn:ngm:class:turing-machine
  - urn:ngm:class:behaviour-tree
uses:
  - urn:ngm:class:regular-expression
supports:
  - urn:ngm:class:protocol-design
partOf:
  - urn:ngm:class:automata-theory
relatedTo:
  - urn:ngm:class:automata-theory
  - urn:ngm:class:game-ai
---

# Finite State Machine

A finite state machine (FSM) is an abstract computational model consisting of a finite set of states, a set of input events, and a transition function that maps a current state and input to a next state. At any moment the machine occupies exactly one state, and its behaviour is fully determined by its current state and the inputs it receives. FSMs are widely used to specify control logic, protocol behaviour, and reactive systems.
