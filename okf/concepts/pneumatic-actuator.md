---
okf_version: "0.2"
type: Class
title: Pneumatic Actuator
resource: urn:ngm:class:pneumatic-actuator
domain: robotics
description: PneumaticActuator is a mechanical device that converts compressed-air energy into controlled mechanical motion — linear (cylinders, bellows), rotary (vane motors, semi-rotary actuators), or contractile (McKibben muscles, fibre-reinforced elastomers, Festo fluidic muscles) — and serves as the prim...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:fluid-power-device
  - urn:ngm:class:actuator
  - urn:ngm:class:robotic-actuator
  - urn:ngm:class:compliant-mechanism
  - urn:ngm:class:soft-robotics
hasPart:
  - urn:ngm:class:directional-control-valve
  - urn:ngm:class:mc-kibben-muscle
  - urn:ngm:class:pneumatic-network
  - urn:ngm:class:position-sensor
  - urn:ngm:class:pressure-regulator
  - urn:ngm:class:proportional-valve
  - urn:ngm:class:pneumatic-cylinder
  - urn:ngm:class:mckibben-muscle
  - urn:ngm:class:air-supply-system
  - urn:ngm:class:elastomeric-chamber
  - urn:ngm:class:fibre-reinforcement
requires:
  - urn:ngm:class:directional-control-valves
  - urn:ngm:class:pressure-regulation
  - urn:ngm:class:compressed-air-supply
  - urn:ngm:class:air-compressor
  - urn:ngm:class:pneumatic-tubing
  - urn:ngm:class:filter-regulator-lubricator-unit
enables:
  - urn:ngm:class:robotic-grasping
  - urn:ngm:class:rehabilitation-robotics
  - urn:ngm:class:safe-human-robot-interaction
  - urn:ngm:class:locomotion
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:safe-human-robot-interaction
  - urn:ngm:class:robotic-grasping
  - urn:ngm:class:locomotion
  - urn:ngm:class:hazardous-environment-operation
  - urn:ngm:class:explosion-proof-actuation
dependsOn:
  - urn:ngm:class:fluid-mechanics
  - urn:ngm:class:elasticity-theory
  - urn:ngm:class:control-theory
  - urn:ngm:class:pneumatic-circuit-design
  - urn:ngm:class:material-science
  - urn:ngm:class:thermodynamics
implements:
  - urn:ngm:class:iso
  - urn:ngm:class:mckibben-muscle-mechanics
  - urn:ngm:class:pneunet-architecture
  - urn:ngm:class:fibre-reinforced-elastomer-actuation
  - urn:ngm:class:iso
  - urn:ngm:class:iso-6432-standard
  - urn:ngm:class:fluidic-muscle-principle
contrastsWith:
  - urn:ngm:class:electric-servo-motor
  - urn:ngm:class:hydraulic-actuator
  - urn:ngm:class:shape-memory-alloy-actuator
  - urn:ngm:class:dielectric-elastomer-actuator
  - urn:ngm:class:electromagnetic-actuator
uses:
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:pid-control
  - urn:ngm:class:proportional-control
  - urn:ngm:class:compressed-air
  - urn:ngm:class:elastomeric-materials
  - urn:ngm:class:carbon-fibre-reinforcement
  - urn:ngm:class:proportional-control
  - urn:ngm:class:festo-fluidic-muscle
  - urn:ngm:class:smc-cylinders
  - urn:ngm:class:parker-hannifin
  - urn:ngm:class:comsol-multiphysics
  - urn:ngm:class:abaqus-fea
  - urn:ngm:class:mu-jo-co
  - urn:ngm:class:isaacgym
  - urn:ngm:class:amesim
  - urn:ngm:class:matlab-simhydraulics
  - urn:ngm:class:harvard-soft-robotics-toolkit
  - urn:ngm:class:openfoam
supports:
  - urn:ngm:class:agricultural-robotics
  - urn:ngm:class:collaborative-systems-modality-robotics
  - urn:ngm:class:exoskeleton
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:medical-robotics
  - urn:ngm:class:pick-and-place
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:pick-and-place
  - urn:ngm:class:exoskeleton
  - urn:ngm:class:soft-gripper-systems
standardizedBy:
  - urn:ngm:class:emc-standard
  - urn:ngm:class:iso
  - urn:ngm:class:iso
  - urn:ngm:class:iso-6432
  - urn:ngm:class:iso-4414-pneumatic-fluid-power
  - urn:ngm:class:nfpa-t3-21-3
  - urn:ngm:class:emc-standard
partOf:
  - urn:ngm:class:soft-robotics
  - urn:ngm:class:fluid-power
  - urn:ngm:class:mechanical-engineering
  - urn:ngm:class:industrial-automation
relatedTo:
  - urn:ngm:class:series-elastic-actuator
  - urn:ngm:class:variable-stiffness-actuator
  - urn:ngm:class:robot-compliance
  - urn:ngm:class:soft-matter-physics
  - urn:ngm:class:fluidic-logic
  - urn:ngm:class:actuator
  - urn:ngm:class:compliant-mechanism
  - urn:ngm:class:mckibben-muscle
  - urn:ngm:class:soft-robotics
  - urn:ngm:class:fluidic-elastomers
  - urn:ngm:class:pneunet
  - urn:ngm:class:pneumatic-cylinder
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:exoskeleton
  - urn:ngm:class:rehabilitation-robotics
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:compressed-air-supply
  - urn:ngm:class:proportional-valve
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:fibre-reinforced-elastomers
  - urn:ngm:class:iso
  - urn:ngm:class:iso-6432
  - urn:ngm:class:iso-4414
  - urn:ngm:class:hse-hsg244
  - urn:ngm:class:eu-ecodesign-regulation-2019-1781
  - urn:ngm:class:atex-directive-2014-34-eu
  - urn:ngm:class:bsi-bs-en-iso-15552-2021
  - urn:ngm:class:uk-noise-at-work-regulations-2005
  - urn:ngm:class:whitesides-research-group-harvard
  - urn:ngm:class:mit-csail-rus-group
  - urn:ngm:class:festo-bioniclearning-network
  - urn:ngm:class:imperial-college-hamlyn-centre
  - urn:ngm:class:bristol-robotics-laboratory
  - urn:ngm:class:university-of-manchester-compliant-systems
  - urn:ngm:class:edinburgh-centre-for-robotics
  - urn:ngm:class:ucl-hawkes-group
  - urn:ngm:class:norgren-imi-precision-engineering
  - urn:ngm:class:amrc-sheffield
---

# Pneumatic Actuator

PneumaticActuator is a mechanical device that converts compressed-air energy into controlled mechanical motion — linear (cylinders, bellows), rotary (vane motors, semi-rotary actuators), or contractile (McKibben muscles, fibre-reinforced elastomers, Festo fluidic muscles) — and serves as the prim...
