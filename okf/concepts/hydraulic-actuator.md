---
okf_version: "0.2"
type: Class
title: Hydraulic Actuator
resource: urn:ngm:class:hydraulic-actuator
domain: robotics
description: HydraulicActuator is a mechanical transduction device that converts the energy stored in pressurised hydraulic fluid into controlled mechanical work—linear force and stroke via hydraulic cylinders, continuous rotational torque and speed via hydraulic motors, or limited angular displacement via ro...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:actuator
  - urn:ngm:class:fluid-power-system
  - urn:ngm:class:mechanical-transducer
  - urn:ngm:class:motion-control-device
  - urn:ngm:class:force-control-system
hasPart:
  - urn:ngm:class:cryptographic-accumulator
  - urn:ngm:class:force-sensor
  - urn:ngm:class:position-sensor
  - urn:ngm:class:proportional-valve
  - urn:ngm:class:servo-valve
  - urn:ngm:class:hydraulic-cylinder
  - urn:ngm:class:hydraulic-pump
  - urn:ngm:class:cryptographic-accumulator
  - urn:ngm:class:pressure-relief-valve
  - urn:ngm:class:hydraulic-reservoir
  - urn:ngm:class:hydraulic-manifold
requires:
  - urn:ngm:class:feedback-sensor
  - urn:ngm:class:servo-control
  - urn:ngm:class:hydraulic-power-unit
  - urn:ngm:class:pressurised-fluid-supply
  - urn:ngm:class:servo-control
  - urn:ngm:class:hydraulic-fluid
  - urn:ngm:class:seal-system
  - urn:ngm:class:return-filter
  - urn:ngm:class:heat-exchanger
enables:
  - urn:ngm:class:force-control
  - urn:ngm:class:haptic-interface
  - urn:ngm:class:manipulation
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:legged-locomotion
  - urn:ngm:class:teleoperation
  - urn:ngm:class:legged-locomotion
  - urn:ngm:class:manipulation
  - urn:ngm:class:flight-simulation
  - urn:ngm:class:exoskeleton-actuation
  - urn:ngm:class:force-control
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:deep-sea-robotics
dependsOn:
  - urn:ngm:class:fluid-mechanics
  - urn:ngm:class:control-theory
  - urn:ngm:class:tribology
  - urn:ngm:class:thermodynamics
  - urn:ngm:class:bernoulli-equation
  - urn:ngm:class:bulk-modulus
  - urn:ngm:class:pascal-law
implements:
  - urn:ngm:class:position-control
  - urn:ngm:class:impedance-control
  - urn:ngm:class:proportional-control
  - urn:ngm:class:series-elastic-actuation
  - urn:ngm:class:pascal-law-actuation
  - urn:ngm:class:position-control
  - urn:ngm:class:impedance-control
  - urn:ngm:class:electrohydrostatic-drive
  - urn:ngm:class:proportional-control
contrastsWith:
  - urn:ngm:class:electric-bldc-actuator
  - urn:ngm:class:pneumatic-actuator
  - urn:ngm:class:shape-memory-alloy-actuator
  - urn:ngm:class:piezoelectric-actuator
  - urn:ngm:class:series-elastic-actuator
  - urn:ngm:class:quasi-direct-drive-motor
uses:
  - urn:ngm:class:servo-valve
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:pid-control
  - urn:ngm:class:proportional-valve
  - urn:ngm:class:impedance-control
  - urn:ngm:class:servo-valve
  - urn:ngm:class:linear-variable-differential-transformer
  - urn:ngm:class:differential-pressure-sensing
supports:
  - urn:ngm:class:legged-locomotion
  - urn:ngm:class:boston-dynamics-bigdog
  - urn:ngm:class:boston-dynamics-atlas
  - urn:ngm:class:iit-hyq-family
  - urn:ngm:class:sarcos-guardian-xo
  - urn:ngm:class:darpa-robotics-challenge
  - urn:ngm:class:legged-locomotion
  - urn:ngm:class:nuclear-remote-handling
standardizedBy:
  - urn:ngm:class:iso-4413-hydraulics-safety
  - urn:ngm:class:nfpa-t3-fluid-power-standard
  - urn:ngm:class:din-24346-hydraulic-components
  - urn:ngm:class:sae-j2048-hydraulic-systems
  - urn:ngm:class:uk-hse-hsg244
relatedTo:
  - urn:ngm:class:exoskeleton
  - urn:ngm:class:industrial-robotics
  - urn:ngm:class:legged-robotics
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:digital-twin
  - urn:ngm:class:humanoid-robot
  - urn:ngm:class:construction-robotics
  - urn:ngm:class:subsea-robotics
---

# Hydraulic Actuator

HydraulicActuator is a mechanical transduction device that converts the energy stored in pressurised hydraulic fluid into controlled mechanical work—linear force and stroke via hydraulic cylinders, continuous rotational torque and speed via hydraulic motors, or limited angular displacement via ro...
