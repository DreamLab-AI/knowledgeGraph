---
okf_version: "0.2"
type: Class
title: Workspace Analysis
resource: urn:ngm:class:workspace-analysis
domain: robotics
description: Workspace analysis determines the set of poses a robot's end-effector can reach, characterising the reachable and dexterous workspaces of a manipulator. It uses forward kinematics and joint-limit constraints to map the volume and shape of attainable positions and orientations. Workspace analysis guides robot selection, cell layout, task placement and reachability assessment for a given manipulator
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:kinematics
requires:
  - urn:ngm:class:kinematics-model
enables:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:trajectory-planning
dependsOn:
  - urn:ngm:class:forward-kinematics
contrastsWith:
  - urn:ngm:class:singularity-analysis
bridgesTo:
  - urn:ngm:class:end-effector
uses:
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:kinematics-model
supports:
  - urn:ngm:class:robot-control
  - urn:ngm:class:manipulator
partOf:
  - urn:ngm:class:kinematics
relatedTo:
  - urn:ngm:class:singularity-analysis
  - urn:ngm:class:forward-kinematics
---

# Workspace Analysis

Workspace analysis determines the set of poses a robot's end-effector can reach, characterising the reachable and dexterous workspaces of a manipulator. It uses forward kinematics and joint-limit constraints to map the volume and shape of attainable positions and orientations. Workspace analysis guides robot selection, cell layout, task placement and reachability assessment for a given manipulator.
