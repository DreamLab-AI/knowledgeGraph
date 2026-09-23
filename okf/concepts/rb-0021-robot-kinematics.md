---
okf_version: "0.2"
type: Class
title: rb 0021 robot kinematics
resource: urn:ngm:class:rb-0021-robot-kinematics
domain: robotics
description: Robot kinematics is the study of the geometry and motion of robot mechanisms — particularly manipulator arms — without regard to the forces or torques that cause motion. It encompasses forward kinematics (computing end-effector pose from joint configurations), inverse kinematics (computing joint configurations for a desired end-effector pose), Jacobian analysis relating joint velocities to Cartesi
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
hasPart:
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:rb-0030-jacobian-matrix
enables:
  - urn:ngm:class:rb-0049-motion-planning
  - urn:ngm:class:rb-0064-computed-torque-control
relatedTo:
  - urn:ngm:class:rb-0022-robot-dynamics
  - urn:ngm:class:rb-0023-degrees-of-freedom
  - urn:ngm:class:rb-0031-singularity
---

# rb 0021 robot kinematics

Robot kinematics is the study of the geometry and motion of robot mechanisms — particularly manipulator arms — without regard to the forces or torques that cause motion. It encompasses forward kinematics (computing end-effector pose from joint configurations), inverse kinematics (computing joint configurations for a desired end-effector pose), Jacobian analysis relating joint velocities to Cartesian velocities, and singularity analysis. Kinematic models are foundational inputs to motion planning, trajectory generation, and control law design.
