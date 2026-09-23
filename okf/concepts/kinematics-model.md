---
okf_version: "0.2"
type: Class
title: Kinematics Model
resource: urn:ngm:class:kinematics-model
domain: robotics
description: KinematicsModel is a mathematical representation of the geometric relationships between a robot's joint configuration space and its end-effector pose in Cartesian workspace coordinates, abstracting away forces and inertial effects to describe pure motion geometry.
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:rigid-body-dynamics
  - urn:ngm:class:robot-model
  - urn:ngm:class:mathematical-model
  - urn:ngm:class:motion-model
  - urn:ngm:class:geometric-model
hasPart:
  - urn:ngm:class:denavit-hartenberg-parameters
  - urn:ngm:class:jacobian-matrix
  - urn:ngm:class:redundancy-resolution
  - urn:ngm:class:singularity-analysis
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:screw-theory
  - urn:ngm:class:joint-space
  - urn:ngm:class:cartesian-space
requires:
  - urn:ngm:class:homogeneous-transformation
  - urn:ngm:class:joint-configuration
  - urn:ngm:class:reference-frames
  - urn:ngm:class:robot-description-format
  - urn:ngm:class:se-3-lie-group
enables:
  - urn:ngm:class:impedance-control
  - urn:ngm:class:calibration
  - urn:ngm:class:visual-servoing
  - urn:ngm:class:force-control
  - urn:ngm:class:motion-planning
  - urn:ngm:class:robot-control
  - urn:ngm:class:teleoperation
  - urn:ngm:class:rb-1007-trajectory-generation
  - urn:ngm:class:visual-servoing
  - urn:ngm:class:calibration
  - urn:ngm:class:impedance-control
dependsOn:
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:differential-geometry
  - urn:ngm:class:lie-group-theory
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:optimisation
implements:
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:product-of-exponentials
  - urn:ngm:class:dh-convention
  - urn:ngm:class:iterative-jacobian-solver
  - urn:ngm:class:closed-form-ik
  - urn:ngm:class:inverse-kinematics
contrastsWith:
  - urn:ngm:class:dynamics-model
  - urn:ngm:class:kinetics-model
  - urn:ngm:class:deformable-body-model
bridgesTo:
  - urn:ngm:class:data-management
uses:
  - urn:ngm:class:drake
  - urn:ngm:class:gazebo-simulator
  - urn:ngm:class:mu-jo-co
  - urn:ngm:class:ros
  - urn:ngm:class:sdf
  - urn:ngm:class:urdf
  - urn:ngm:class:pinocchio-library
  - urn:ngm:class:gazebo-simulator
supports:
  - urn:ngm:class:autonomous-mobile-robots
  - urn:ngm:class:exoskeleton-control
  - urn:ngm:class:industrial-manipulation
  - urn:ngm:class:legged-locomotion
  - urn:ngm:class:space-robotics
  - urn:ngm:class:surgical-robotics
standardizedBy:
  - urn:ngm:class:ieee-robotics-and-automation-society
  - urn:ngm:class:ros-industrial
  - urn:ngm:class:urdf
  - urn:ngm:class:ros-industrial
  - urn:ngm:class:urdf
relatedTo:
  - urn:ngm:class:calibration
  - urn:ngm:class:rb-0032-manipulability
  - urn:ngm:class:task-space-control
  - urn:ngm:class:workspace-analysis
  - urn:ngm:class:collision-detection
  - urn:ngm:class:rb-0032-manipulability
---

# Kinematics Model

KinematicsModel is a mathematical representation of the geometric relationships between a robot's joint configuration space and its end-effector pose in Cartesian workspace coordinates, abstracting away forces and inertial effects to describe pure motion geometry.
