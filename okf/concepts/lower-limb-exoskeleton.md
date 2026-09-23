---
okf_version: "0.2"
type: Class
title: Lower Limb Exoskeleton
resource: urn:ngm:class:lower-limb-exoskeleton
domain: robotics
description: A Lower Limb Exoskeleton is a wearable robotic device that attaches externally to the legs and pelvis to assist, augment, or rehabilitate walking and lower-body movements by generating torques at hip, knee, and ankle joints. Devices span fully-active systems driven by electric actuators or hydraulics, passive systems using spring and damping elements to redirect energy, and hybrid configurations c
maturity: established
quality: 0
is-a:
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:exoskeleton-robot
requires:
  - urn:ngm:class:sensor
  - urn:ngm:class:actuator
  - urn:ngm:class:imu
  - urn:ngm:class:torque
enables:
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:safety
uses:
  - urn:ngm:class:variable-impedance-control
  - urn:ngm:class:force-control
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:motion-planning
relatedTo:
  - urn:ngm:class:collaborative-systems-modality-robot
  - urn:ngm:class:embodied-ai
  - urn:ngm:class:iso-10218
  - urn:ngm:class:collision-avoidance
---

# Lower Limb Exoskeleton

A Lower Limb Exoskeleton is a wearable robotic device that attaches externally to the legs and pelvis to assist, augment, or rehabilitate walking and lower-body movements by generating torques at hip, knee, and ankle joints. Devices span fully-active systems driven by electric actuators or hydraulics, passive systems using spring and damping elements to redirect energy, and hybrid configurations combining both. Applications include stroke rehabilitation (restoring gait through repetitive, robot-guided movement therapy), spinal-cord-injury locomotion assistance, load-carrying augmentation for industrial and military tasks, and fall prevention in elderly populations. Control strategies range from finite-state machines triggered by gait-phase detection through inertial measurement units and pressure sensors, to intent-recognition systems integrating electromyography and machine learning.
