---
okf_version: "0.2"
type: Class
title: Sim-to-Real Transfer
resource: urn:ngm:class:sim-to-real-transfer
domain: robotics
description: "Sim-to-real transfer is the set of techniques and methodologies for training robotic policies, perception models, and control algorithms inside physics simulators and then deploying the resulting models on physical hardware with acceptable performance degradation. The fundamental barrier is the reality gap: discrepancies in physics fidelity, contact dynamics, sensor noise characteristics, visual a"
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:robot-learning
requires:
  - urn:ngm:class:physics-engine
  - urn:ngm:class:robot-simulation
  - urn:ngm:class:robot-simulation
enables:
  - urn:ngm:class:robot-learning
  - urn:ngm:class:legged-locomotion
  - urn:ngm:class:autonomous-manipulation
  - urn:ngm:class:autonomous-navigation
dependsOn:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:domain-adaptation
contrastsWith:
  - urn:ngm:class:imitation-learning
  - urn:ngm:class:real-world-robot-learning
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:embodied-ai
uses:
  - urn:ngm:class:simulation
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:domain-randomisation
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:system-identification
relatedTo:
  - urn:ngm:class:policy-gradient-methods
  - urn:ngm:class:model-based-reinforcement-learning
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:photorealistic-rendering
  - urn:ngm:class:reality-gap
  - urn:ngm:class:policy-gradient-methods
---

# Sim-to-Real Transfer

Sim-to-real transfer is the set of techniques and methodologies for training robotic policies, perception models, and control algorithms inside physics simulators and then deploying the resulting models on physical hardware with acceptable performance degradation. The fundamental barrier is the reality gap: discrepancies in physics fidelity, contact dynamics, sensor noise characteristics, visual appearance, and actuator latency cause policies optimised entirely in simulation to fail on real systems. Mitigation strategies include domain randomisation, domain adaptation, system identification, adaptive dynamics models, and photorealistic rendering to progressively close this gap. The field sits at the intersection of reinforcement learning, robot learning, and transfer learning, and underpins practical large-scale autonomous system deployment.
