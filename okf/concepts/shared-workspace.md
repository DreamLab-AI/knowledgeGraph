---
okf_version: "0.2"
type: Class
title: Shared Workspace
resource: urn:ngm:class:shared-workspace
domain: distributed-collaboration
description: A shared workspace is a common digital environment in which multiple people can view, edit and organise shared artefacts together, whether simultaneously or over time. It provides a persistent space holding documents, boards, tasks or models alongside cues about who is present and what they are doing. Shared workspaces are a core construct of collaborative and groupware systems, turning individual
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:collaboration
  - urn:ngm:class:dc-workspace-tools
hasPart:
  - urn:ngm:class:presence
  - urn:ngm:class:awareness
requires:
  - urn:ngm:class:synchronisation
enables:
  - urn:ngm:class:remote-collaboration
  - urn:ngm:class:remote-work
dependsOn:
  - urn:ngm:class:synchronisation
uses:
  - urn:ngm:class:operational-transformation
  - urn:ngm:class:crdt
supports:
  - urn:ngm:class:version-control
partOf:
  - urn:ngm:class:distributed-collaboration
relatedTo:
  - urn:ngm:class:collaboration
  - urn:ngm:class:human-computer-interaction
---

# Shared Workspace

A shared workspace is a common digital environment in which multiple people can view, edit and organise shared artefacts together, whether simultaneously or over time. It provides a persistent space holding documents, boards, tasks or models alongside cues about who is present and what they are doing. Shared workspaces are a core construct of collaborative and groupware systems, turning individual tools into venues for coordinated teamwork.
