---
okf_version: "0.2"
type: Class
title: Discrete Event Simulation
resource: urn:ngm:class:discrete-event-simulation
domain: artificial-intelligence
description: Discrete event simulation is a modelling technique that represents a system as a sequence of distinct events occurring at specific points in time, advancing the simulation clock directly from one event to the next rather than in fixed time steps. Each event triggers state changes and may schedule further events, typically processed in timestamp order via a priority queue. It is widely used to mode
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:simulation
enables:
  - urn:ngm:class:agent-based-modelling
uses:
  - urn:ngm:class:priority-queue
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Discrete Event Simulation

Discrete event simulation is a modelling technique that represents a system as a sequence of distinct events occurring at specific points in time, advancing the simulation clock directly from one event to the next rather than in fixed time steps. Each event triggers state changes and may schedule further events, typically processed in timestamp order via a priority queue. It is widely used to model queuing systems, logistics networks, and multi-agent interactions where continuous-time simulation would be computationally wasteful.
