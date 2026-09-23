---
okf_version: "0.2"
type: Class
title: MuJoCo
resource: urn:ngm:class:mu-jo-co
domain: robotics
description: MuJoCo (Multi-Joint dynamics with Contact) is a high-speed, high-fidelity physics simulation engine designed for modelling articulated rigid-body systems with complex contact dynamics, widely used in robotics research and reinforcement learning. Developed by Emo Todorov at the University of Washington and commercialised by Roboti LLC, it was acquired by Google DeepMind in 2021 and made freely avai
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:physics-simulation
hasPart:
  - urn:ngm:class:contact-dynamics-model
requires:
  - urn:ngm:class:constraint-solver
  - urn:ngm:class:rigid-body-dynamics
enables:
  - urn:ngm:class:humanoid-robotics
  - urn:ngm:class:legged-locomotion
  - urn:ngm:class:dexterous-manipulation
  - urn:ngm:class:policy-gradient-methods
  - urn:ngm:class:domain-randomisation
dependsOn:
  - urn:ngm:class:openai-gym
  - urn:ngm:class:open-source-software
contrastsWith:
  - urn:ngm:class:gazebo-simulator
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:reinforcement-learning-algorithm
  - urn:ngm:class:proximal-policy-optimisation
  - urn:ngm:class:convex-optimisation
  - urn:ngm:class:lagrangian-dynamics
  - urn:ngm:class:xml-model-definition
relatedTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:embodied-ai-simulation
  - urn:ngm:class:physics-engine
  - urn:ngm:class:robot-learning
  - urn:ngm:class:sim-to-real-transfer
  - urn:ngm:class:continuous-control
  - urn:ngm:class:computational-neuroscience
  - urn:ngm:class:biomechanics
---

# MuJoCo

MuJoCo (Multi-Joint dynamics with Contact) is a high-speed, high-fidelity physics simulation engine designed for modelling articulated rigid-body systems with complex contact dynamics, widely used in robotics research and reinforcement learning. Developed by Emo Todorov at the University of Washington and commercialised by Roboti LLC, it was acquired by Google DeepMind in 2021 and made freely available as open-source software in 2022. MuJoCo excels at simulating musculoskeletal models, legged locomotion, dexterous manipulation, and other contact-rich robotic tasks that require accurate Lagrangian dynamics and constraint solvers. Its adoption as the standard benchmark environment for reinforcement learning algorithms—via OpenAI Gym and later Gymnasium wrappers—has made it the de facto substrate for sim-to-real transfer research in robotics.
