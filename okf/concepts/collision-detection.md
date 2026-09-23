---
okf_version: "0.2"
type: Class
title: Collision Detection
resource: urn:ngm:class:collision-detection
domain: spatial-computing
description: Collision Detection is the computational discipline of determining when two or more geometric primitives, rigid bodies, deformable meshes, articulated kinematic chains, or volumetric fields occupy overlapping regions of a shared spatial domain, decomposed canonically into a broad phase that rapid...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:sc-platform-and-environment
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:spatial-computing-paradigm
  - urn:ngm:class:computational-geometry
  - urn:ngm:class:geometric-algorithm
  - urn:ngm:class:real-time-algorithm
hasPart:
  - urn:ngm:class:bounding-volume-hierarchy
  - urn:ngm:class:broad-phase-detection
  - urn:ngm:class:narrow-phase-detection
  - urn:ngm:class:contact-resolution
  - urn:ngm:class:time-of-impact
  - urn:ngm:class:contact-manifold
  - urn:ngm:class:separating-axis-theorem
  - urn:ngm:class:penetration-depth
requires:
  - urn:ngm:class:coordinate-frame
  - urn:ngm:class:floating-point-arithmetic
  - urn:ngm:class:geometric-primitive
  - urn:ngm:class:spatial-partitioning
  - urn:ngm:class:numerical-robustness
enables:
  - urn:ngm:class:cloth-simulation
  - urn:ngm:class:safety-certification
  - urn:ngm:class:collision-avoidance
  - urn:ngm:class:haptic-feedback
  - urn:ngm:class:motion-planning
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:predictive-maintenance
  - urn:ngm:class:quality-assurance
  - urn:ngm:class:ragdoll-animation
dependsOn:
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:convex-optimization
  - urn:ngm:class:minkowski-sum
  - urn:ngm:class:quaternion-math
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:control-theory
  - urn:ngm:class:risk-assessment
implements:
  - urn:ngm:class:bsp-tree
  - urn:ngm:class:signed-distance-function
  - urn:ngm:class:gjk-algorithm
  - urn:ngm:class:epa-algorithm
  - urn:ngm:class:sweep-and-prune
  - urn:ngm:class:spatial-hashing
  - urn:ngm:class:signed-distance-function
  - urn:ngm:class:continuous-collision-detection
  - urn:ngm:class:conservative-advancement
contrastsWith:
  - urn:ngm:class:ray-casting
  - urn:ngm:class:occlusion-culling
  - urn:ngm:class:visibility-determination
  - urn:ngm:class:frustum-culling
  - urn:ngm:class:path-planning
uses:
  - urn:ngm:class:box2-d
  - urn:ngm:class:brax
  - urn:ngm:class:bullet-physics
  - urn:ngm:class:drake
  - urn:ngm:class:fcl
  - urn:ngm:class:havok-physics
  - urn:ngm:class:jolt-physics
  - urn:ngm:class:mu-jo-co
  - urn:ngm:class:nvidia-corporation-flex
  - urn:ngm:class:nvidia-corporation-phys-x
  - urn:ngm:class:nvidia-corporation-warp
  - urn:ngm:class:open-dynamics-engine
  - urn:ngm:class:rapier-physics
  - urn:ngm:class:nvidia-physx
  - urn:ngm:class:box2d
  - urn:ngm:class:nvidia-warp
  - urn:ngm:class:nvidia-flex
supports:
  - urn:ngm:class:animation
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:cad-software
  - urn:ngm:class:surgical-simulation
  - urn:ngm:class:video-games
  - urn:ngm:class:vr-ar
  - urn:ngm:class:digital-twin
  - urn:ngm:class:robotics
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:crash-simulation
standardizedBy:
  - urn:ngm:class:iso-iec-18039
  - urn:ngm:class:khronos-open-xr
  - urn:ngm:class:ros-rep
  - urn:ngm:class:urdf
  - urn:ngm:class:usd-physics-schema
  - urn:ngm:class:w-3-c-web-xr
  - urn:ngm:class:mjcf
relatedTo:
  - urn:ngm:class:cloth-simulation
  - urn:ngm:class:deep-sdf
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:neural-implicit-surface
  - urn:ngm:class:fluid-simulation
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:motion-planning
  - urn:ngm:class:rigid-body-dynamics
  - urn:ngm:class:soft-body-dynamics
  - urn:ngm:class:training-data
  - urn:ngm:class:deepsdf
---

# Collision Detection

Collision Detection is the computational discipline of determining when two or more geometric primitives, rigid bodies, deformable meshes, articulated kinematic chains, or volumetric fields occupy overlapping regions of a shared spatial domain, decomposed canonically into a broad phase that rapid...
