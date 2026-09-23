---
okf_version: "0.2"
type: Class
title: Autonomous Driving
resource: urn:ngm:class:autonomous-driving
domain: artificial-intelligence
description: Autonomous driving is the technical capability enabling a vehicle to perceive its environment, predict the behaviour of surrounding agents, plan a safe trajectory, and execute actuator commands without direct human intervention. The system architecture decomposes into perception (camera, Lidar, radar fusion), localisation (HD map matching, SLAM), prediction (probabilistic motion modelling), planni
maturity: emerging
quality: 0.88
is-a:
  - urn:ngm:class:ai-application
  - urn:ngm:class:robotics
  - urn:ngm:class:safety-critical-systems
hasPart:
  - urn:ngm:class:autonomous-driving-perception
  - urn:ngm:class:motion-planning
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:hd-maps
  - urn:ngm:class:path-planning
  - urn:ngm:class:behaviour-prediction
  - urn:ngm:class:vehicle-control
requires:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:lidar
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:object-detection
  - urn:ngm:class:hd-maps
  - urn:ngm:class:autonomous-driving-perception
  - urn:ngm:class:gnss
  - urn:ngm:class:functional-safety
  - urn:ngm:class:edge-computing
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:robotaxi
  - urn:ngm:class:last-mile-delivery
  - urn:ngm:class:smart-city-infrastructure
  - urn:ngm:class:autonomous-freight
  - urn:ngm:class:autonomous-shuttle
dependsOn:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:v2x-communication
  - urn:ngm:class:gnss
  - urn:ngm:class:functional-safety
  - urn:ngm:class:hd-maps
  - urn:ngm:class:gpu-compute
implements:
  - urn:ngm:class:sae-j-3016
  - urn:ngm:class:occupancy-prediction
  - urn:ngm:class:end-to-end-driving
  - urn:ngm:class:sensor-fusion
contrastsWith:
  - urn:ngm:class:advanced-driver-assistance-system
  - urn:ngm:class:teleoperation
  - urn:ngm:class:advanced-driver-assistance-system
  - urn:ngm:class:manual-driving
bridgesTo:
  - urn:ngm:class:smart-city-infrastructure
  - urn:ngm:class:digital-twin
  - urn:ngm:class:5-g-network
  - urn:ngm:class:robotics
uses:
  - urn:ngm:class:path-planning
  - urn:ngm:class:deep-learning
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:motion-planning
  - urn:ngm:class:bayesian-inference
supports:
  - urn:ngm:class:smart-city-infrastructure
  - urn:ngm:class:digital-twin
  - urn:ngm:class:5-g-network
  - urn:ngm:class:zero-emission-vehicles
standardizedBy:
  - urn:ngm:class:sae-j-3016
  - urn:ngm:class:iso-26262
  - urn:ngm:class:un-ece-wp-29
  - urn:ngm:class:iso-sae-pas-21448
relatedTo:
  - urn:ngm:class:safety-critical-systems
  - urn:ngm:class:functional-safety
  - urn:ngm:class:digital-twin
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:robotics
---

# Autonomous Driving

Autonomous driving is the technical capability enabling a vehicle to perceive its environment, predict the behaviour of surrounding agents, plan a safe trajectory, and execute actuator commands without direct human intervention. The system architecture decomposes into perception (camera, Lidar, radar fusion), localisation (HD map matching, SLAM), prediction (probabilistic motion modelling), planning (route, behaviour, and motion planning layers), and control (longitudinal and lateral actuation). Safety assurance draws on formal verification, simulation, and real-world validation mileage, with regulatory oversight governed by frameworks such as SAE J3016, ISO 26262, and UN ECE WP.29. The field bridges robotics, machine learning, embedded systems, and transport infrastructure.
