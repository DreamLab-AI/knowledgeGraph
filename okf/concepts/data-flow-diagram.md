---
okf_version: "0.2"
type: Class
title: Data Flow Diagram
resource: urn:ngm:class:data-flow-diagram
domain: security
description: A data flow diagram (DFD) is a visual representation of how data moves through a system, showing processes, data stores, external entities, and the trust boundaries between them. In security practice it is the standard input artefact for threat modelling, since attack surfaces and applicable threats are identified by walking each flow and boundary crossing in the diagram. It is a structural tool r
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:threat-modelling
partOf:
  - urn:ngm:class:threat-modelling
---

# Data Flow Diagram

A data flow diagram (DFD) is a visual representation of how data moves through a system, showing processes, data stores, external entities, and the trust boundaries between them. In security practice it is the standard input artefact for threat modelling, since attack surfaces and applicable threats are identified by walking each flow and boundary crossing in the diagram. It is a structural tool rather than a behavioural one, deliberately omitting control flow and timing to keep the focus on where data moves and where it is trusted less.
