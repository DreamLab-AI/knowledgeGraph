---
okf_version: "0.2"
type: Class
title: In Hand Manipulation
resource: urn:ngm:class:in-hand-manipulation
domain: robotics
description: In-hand manipulation is the robotic skill of repositioning or reorienting a grasped object using the fingers and palm of a hand, without placing it down or relying on the arm to reposition it. It demands coordinated finger control, tactile sensing and contact modelling to maintain stable grasps while controlled slip and finger gaiting move the object. It is a core capability of dexterous manipulat
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:dexterous-manipulation
hasPart:
  - urn:ngm:class:finger-gaiting
  - urn:ngm:class:object-reorientation
requires:
  - urn:ngm:class:tactile-sensing
  - urn:ngm:class:force-control
enables:
  - urn:ngm:class:autonomous-manipulation
  - urn:ngm:class:dexterity
dependsOn:
  - urn:ngm:class:grasping
  - urn:ngm:class:sensorimotor-control
contrastsWith:
  - urn:ngm:class:compliant-manipulation
uses:
  - urn:ngm:class:robot-hand
  - urn:ngm:class:proprioception
supports:
  - urn:ngm:class:manipulation-planning
partOf:
  - urn:ngm:class:dexterous-manipulation
relatedTo:
  - urn:ngm:class:multi-fingered-hand
  - urn:ngm:class:tactile-feedback
---

# In Hand Manipulation

In-hand manipulation is the robotic skill of repositioning or reorienting a grasped object using the fingers and palm of a hand, without placing it down or relying on the arm to reposition it. It demands coordinated finger control, tactile sensing and contact modelling to maintain stable grasps while controlled slip and finger gaiting move the object. It is a core capability of dexterous manipulation in multi-fingered robotic hands.
