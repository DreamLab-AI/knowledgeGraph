---
okf_version: "0.2"
type: Class
title: Kinematics
resource: urn:ngm:class:kinematics
domain: robotics
description: Kinematics is the branch of mechanics that studies the geometry and mathematics of motion — positions, velocities, accelerations, and trajectories of bodies — without consideration of the forces or torques that cause that motion. In robotics and spatial computing, it encompasses forward kinematics (mapping joint-space parameters to Cartesian end-effector pose via homogeneous transformation matrice
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:robo-navigation-and-planning
hasPart:
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:differential-kinematics
  - urn:ngm:class:jacobian-matrix
requires:
  - urn:ngm:class:homogeneous-transformation
  - urn:ngm:class:denavit-hartenberg-parameters
  - urn:ngm:class:coordinate-frame
enables:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:robot-dynamics
  - urn:ngm:class:rb-1007-trajectory-generation
  - urn:ngm:class:workspace-analysis
  - urn:ngm:class:collision-avoidance
dependsOn:
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:rigid-body-dynamics
  - urn:ngm:class:rigid-body-dynamics
contrastsWith:
  - urn:ngm:class:dynamics
  - urn:ngm:class:statics
bridgesTo:
  - urn:ngm:class:computer-animation
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:robot-joint
  - urn:ngm:class:manipulator
  - urn:ngm:class:end-effector
  - urn:ngm:class:kinematic-chain
relatedTo:
  - urn:ngm:class:biomechanics
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:autonomous-vehicle
---

# Kinematics

Kinematics is the branch of mechanics that studies the geometry and mathematics of motion — positions, velocities, accelerations, and trajectories of bodies — without consideration of the forces or torques that cause that motion. In robotics and spatial computing, it encompasses forward kinematics (mapping joint-space parameters to Cartesian end-effector pose via homogeneous transformation matrices and Denavit-Hartenberg conventions) and inverse kinematics (solving the reverse mapping from desired pose to joint configurations). Kinematic analysis underpins motion planning, trajectory generation, workspace characterisation, collision avoidance, and animation systems across robotics, biomechanics, computer graphics, and autonomous vehicles.
