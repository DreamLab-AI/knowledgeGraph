---
okf_version: "0.2"
type: Class
title: Motion Model
resource: urn:ngm:class:motion-model
domain: robotics
description: A motion model is a mathematical or learned representation that describes how the state of a moving entity—a robot, vehicle, or articulated body—evolves over time given control inputs and noise. In probabilistic robotics it forms the prediction step of filters such as Kalman and particle filters, characterising uncertainty in state transitions. Motion models range from simple kinematic approximati
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:kinematics-model
hasPart:
  - urn:ngm:class:state-transition-function
requires:
  - urn:ngm:class:state-space-representation
enables:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:state-estimation
  - urn:ngm:class:trajectory-tracking
  - urn:ngm:class:robot-localisation
implements:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:monte-carlo-localization
contrastsWith:
  - urn:ngm:class:observation-model
  - urn:ngm:class:sensor-model
bridgesTo:
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:neural-network
uses:
  - urn:ngm:class:kinematics
  - urn:ngm:class:rigid-body-dynamics
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:differential-equations
supports:
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:model-predictive-control
relatedTo:
  - urn:ngm:class:motion-control
  - urn:ngm:class:robot-dynamics
  - urn:ngm:class:newton-euler-dynamics
  - urn:ngm:class:odometry
---

# Motion Model

A motion model is a mathematical or learned representation that describes how the state of a moving entity—a robot, vehicle, or articulated body—evolves over time given control inputs and noise. In probabilistic robotics it forms the prediction step of filters such as Kalman and particle filters, characterising uncertainty in state transitions. Motion models range from simple kinematic approximations (constant velocity, unicycle) to full rigid-body dynamic equations and learned neural representations derived from data. Accuracy of the motion model directly determines the quality of localisation, planning, and control outcomes.
