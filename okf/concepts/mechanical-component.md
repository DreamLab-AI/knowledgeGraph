---
okf_version: "0.2"
type: Class
title: Mechanical Component
resource: urn:ngm:class:mechanical-component
domain: robotics
description: MechanicalComponent is the ontological superclass for all physical structural, kinematic, and power-transmission elements constituting robotic hardware systems.
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:kinematic-chain
  - urn:ngm:class:robot-hardware
  - urn:ngm:class:physical-system
  - urn:ngm:class:mechatronic-system
  - urn:ngm:class:manufacturing-product
hasPart:
  - urn:ngm:class:actuator
  - urn:ngm:class:ball-screw
  - urn:ngm:class:bearing
  - urn:ngm:class:cable-drive
  - urn:ngm:class:coupling
  - urn:ngm:class:cycloidal-drive
  - urn:ngm:class:flexure
  - urn:ngm:class:harmonic-drive
  - urn:ngm:class:mounting-interface
  - urn:ngm:class:planetary-gearbox
  - urn:ngm:class:sensor-housing
  - urn:ngm:class:structural-frame
  - urn:ngm:class:transmission
  - urn:ngm:class:end-effector
requires:
  - urn:ngm:class:fatigue-analysis
  - urn:ngm:class:finite-element-analysis
  - urn:ngm:class:lubrication
  - urn:ngm:class:manufacturing-process
  - urn:ngm:class:material-science
  - urn:ngm:class:surface-finishing
  - urn:ngm:class:tolerance-stack-analysis
  - urn:ngm:class:tribology
enables:
  - urn:ngm:class:backdrivability
  - urn:ngm:class:payload-capacity
  - urn:ngm:class:positional-accuracy
  - urn:ngm:class:quasi-direct-drive
  - urn:ngm:class:series-elastic-actuation
  - urn:ngm:class:force-control
  - urn:ngm:class:impedance-control
  - urn:ngm:class:robot-dynamics
  - urn:ngm:class:robot-kinematics
dependsOn:
  - urn:ngm:class:mechanical-engineering
  - urn:ngm:class:tribology
  - urn:ngm:class:control-theory
  - urn:ngm:class:thermal-management
  - urn:ngm:class:lubrication
  - urn:ngm:class:finite-element-analysis
  - urn:ngm:class:material-science
  - urn:ngm:class:manufacturing-process
implements:
  - urn:ngm:class:ball-screw-mechanism
  - urn:ngm:class:cable-drive
  - urn:ngm:class:cycloidal-drive
  - urn:ngm:class:harmonic-drive
  - urn:ngm:class:planetary-gearbox
  - urn:ngm:class:quasi-direct-drive
  - urn:ngm:class:series-elastic-actuation
  - urn:ngm:class:strain-wave-gearing
contrastsWith:
  - urn:ngm:class:electronic-component
  - urn:ngm:class:component
  - urn:ngm:class:sensor
  - urn:ngm:class:computation-hardware
  - urn:ngm:class:hydraulic-actuator
bridgesTo:
  - urn:ngm:class:software-engineering
uses:
  - urn:ngm:class:additive-manufacturing
  - urn:ngm:class:aluminium-alloy
  - urn:ngm:class:carbon-fibre-composite
  - urn:ngm:class:cfrp-laminate
  - urn:ngm:class:elastomer
  - urn:ngm:class:piezoelectric-material
  - urn:ngm:class:shape-memory-alloy
  - urn:ngm:class:steel-alloy
  - urn:ngm:class:titanium-alloy
supports:
  - urn:ngm:class:collaborative-systems-modality-robot
  - urn:ngm:class:humanoid-robot
  - urn:ngm:class:industrial-robot
  - urn:ngm:class:legged-robotics
  - urn:ngm:class:prosthetics
  - urn:ngm:class:space-robotics
  - urn:ngm:class:surgical-robotics
  - urn:ngm:class:delta-robot
  - urn:ngm:class:soft-robotics
  - urn:ngm:class:collaborative-systems-modality-robot
  - urn:ngm:class:industrial-robot
  - urn:ngm:class:humanoid-robots
standardizedBy:
  - urn:ngm:class:din-3960-gear-standards
  - urn:ngm:class:ieee-robotics-standards
  - urn:ngm:class:iso-10218
  - urn:ngm:class:iso-281-bearing-life
  - urn:ngm:class:iso-9283
  - urn:ngm:class:iso-ts-15066
relatedTo:
  - urn:ngm:class:additive-manufacturing
  - urn:ngm:class:force-sensing
  - urn:ngm:class:proprioceptive-sensing
  - urn:ngm:class:robot-design
  - urn:ngm:class:topology-optimisation
  - urn:ngm:class:digital-twin
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:predictive-maintenance
---

# Mechanical Component

MechanicalComponent is the ontological superclass for all physical structural, kinematic, and power-transmission elements constituting robotic hardware systems.
