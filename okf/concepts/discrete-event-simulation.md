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
---

# Discrete Event Simulation

Discrete event simulation is a modelling technique that represents a system as a sequence of distinct events occurring at specific points in time, advancing the simulation clock directly from one event to the next rather than in fixed time steps. Each event triggers state changes and may schedule further events, typically processed in timestamp order via a priority queue. It is widely used to model queuing systems, logistics networks, and multi-agent interactions where continuous-time simulation would be computationally wasteful.
