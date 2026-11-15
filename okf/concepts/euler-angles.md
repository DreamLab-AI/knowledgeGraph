---
okf_version: "0.2"
type: Class
title: Euler Angles
resource: urn:ngm:class:euler-angles
domain: robotics
description: "Euler angles are a representation of a rigid body's three-dimensional orientation as a sequence of three successive rotations about specified coordinate axes, such as roll, pitch, and yaw. They are compact and intuitive for human interpretation but suffer from gimbal lock, a loss of one rotational degree of freedom when two rotation axes align. Euler angles are widely used in inertial measurement "
maturity: mature
quality: 0.55
is-a:
  - urn:ngm:class:linear-algebra
contrastsWith:
  - urn:ngm:class:rotation-matrix
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Euler Angles

Euler angles are a representation of a rigid body's three-dimensional orientation as a sequence of three successive rotations about specified coordinate axes, such as roll, pitch, and yaw. They are compact and intuitive for human interpretation but suffer from gimbal lock, a loss of one rotational degree of freedom when two rotation axes align. Euler angles are widely used in inertial measurement unit output and robot pose description, often converted internally to rotation matrices or quaternions to avoid singularities.
