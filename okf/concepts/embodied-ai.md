---
okf_version: "0.2"
type: Class
title: Embodied AI
resource: urn:ngm:class:embodied-ai
domain: artificial-intelligence
description: Embodied AI is a research paradigm holding that intelligence emerges from the continuous sensorimotor interaction of an agent with its physical or simulated environment, rather than from purely symbolic or disembodied language-based reasoning. Embodied agents perceive the world through sensors — cameras, proprioceptive IMUs, force-torque sensors, tactile arrays — and act upon it through actuators,
maturity: emerging
quality: 0.74
is-a:
  - urn:ngm:class:ai-research-area
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:robotics
hasPart:
  - urn:ngm:class:sim-to-real-transfer
  - urn:ngm:class:robot-learning
  - urn:ngm:class:domain-randomisation
  - urn:ngm:class:affordance-learning
  - urn:ngm:class:world-model
  - urn:ngm:class:embodied-ai-simulation
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:robotic-manipulation
requires:
  - urn:ngm:class:simulation
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:physics-engine
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:markov-decision-process
enables:
  - urn:ngm:class:robot-learning
  - urn:ngm:class:sim-to-real-transfer
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:robotic-manipulation
  - urn:ngm:class:grounded-language-understanding
  - urn:ngm:class:autonomous-robot
  - urn:ngm:class:collaborative-systems-modality-robot
  - urn:ngm:class:agricultural-robotics
  - urn:ngm:class:surgical-robotics
dependsOn:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:deep-learning
  - urn:ngm:class:imitation-learning
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:transformer-architecture
implements:
  - urn:ngm:class:sensorimotor-loop
  - urn:ngm:class:situated-cognition
  - urn:ngm:class:active-perception
  - urn:ngm:class:imitation-learning
contrastsWith:
  - urn:ngm:class:symbolic-ai
  - urn:ngm:class:disembodied-language-model
  - urn:ngm:class:passive-learning
  - urn:ngm:class:supervised-learning
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:digital-twin
  - urn:ngm:class:extended-reality
uses:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:vision-language-model
  - urn:ngm:class:domain-randomisation
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:embeddings
  - urn:ngm:class:reinforcement-learning-from-human-feedback
supports:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:robotic-manipulation
  - urn:ngm:class:surgical-robotics
  - urn:ngm:class:agricultural-robotics
  - urn:ngm:class:autonomous-mobile-robots
standardizedBy:
  - urn:ngm:class:ros
  - urn:ngm:class:openai-research-organisation
  - urn:ngm:class:open-x-embodiment-dataset
relatedTo:
  - urn:ngm:class:embodied-ai-simulation
  - urn:ngm:class:robotics
  - urn:ngm:class:situated-cognition
  - urn:ngm:class:cognitive-science
  - urn:ngm:class:world-model
  - urn:ngm:class:affordance-learning
  - urn:ngm:class:digital-twin
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:multi-agent-system
---

# Embodied AI

Embodied AI is a research paradigm holding that intelligence emerges from the continuous sensorimotor interaction of an agent with its physical or simulated environment, rather than from purely symbolic or disembodied language-based reasoning. Embodied agents perceive the world through sensors — cameras, proprioceptive IMUs, force-torque sensors, tactile arrays — and act upon it through actuators, learning to navigate, manipulate objects, and cooperate via reinforcement learning or imitation learning in physics simulators. The field unifies robotics, cognitive science, and deep learning, with applications spanning household manipulation, autonomous navigation, humanoid motor control, and grounded natural language understanding. A central hypothesis is that richer, more transferable representations arise from interactive physical engagement with an environment rather than from passive statistical learning over corpora.
