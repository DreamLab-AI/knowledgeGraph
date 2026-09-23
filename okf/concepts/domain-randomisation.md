---
okf_version: "0.2"
type: Class
title: Domain Randomisation
resource: urn:ngm:class:domain-randomisation
domain: robotics
description: Domain randomisation is a technique for training robot and agent policies in simulation by randomising the parameters of the simulated environment, such as textures, lighting, dynamics, masses and sensor noise, so that the real world appears as just another variation. By forcing a policy to be robust across a wide distribution of simulated conditions, the approach narrows the reality gap and impro
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robo-actuation-and-control
requires:
  - urn:ngm:class:reinforcement-learning
enables:
  - urn:ngm:class:deep-reinforcement-learning
  - urn:ngm:class:domain-adaptation
contrastsWith:
  - urn:ngm:class:system-identification
uses:
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:simulation
  - urn:ngm:class:robot-simulation
  - urn:ngm:class:procedural-generation
supports:
  - urn:ngm:class:robotics
  - urn:ngm:class:perception
partOf:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robo-actuation-and-control
relatedTo:
  - urn:ngm:class:curriculum-learning
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:machine-learning-discipline
---

# Domain Randomisation

Domain randomisation is a technique for training robot and agent policies in simulation by randomising the parameters of the simulated environment, such as textures, lighting, dynamics, masses and sensor noise, so that the real world appears as just another variation. By forcing a policy to be robust across a wide distribution of simulated conditions, the approach narrows the reality gap and improves zero-shot or few-shot transfer of policies trained purely in simulation to physical hardware.
