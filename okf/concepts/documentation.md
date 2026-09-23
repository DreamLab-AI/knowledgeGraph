---
okf_version: "0.2"
type: Class
title: Documentation
resource: urn:ngm:class:documentation
domain: data
description: Documentation is the structured body of written, diagrammatic, or interactive material that describes the purpose, design, behaviour, and use of a system, dataset, process, or software artefact. It serves as the primary medium through which knowledge about an artefact is transferred between its creators and its users, maintainers, and auditors. Effective documentation spans reference material, con
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data
hasPart:
  - urn:ngm:class:api-reference
  - urn:ngm:class:tutorial
requires:
  - urn:ngm:class:version-control
  - urn:ngm:class:metadata
enables:
  - urn:ngm:class:maintainability
  - urn:ngm:class:onboarding
dependsOn:
  - urn:ngm:class:data
contrastsWith:
  - urn:ngm:class:tribal-knowledge
uses:
  - urn:ngm:class:markdown
  - urn:ngm:class:static-site-generation
supports:
  - urn:ngm:class:reproducibility
  - urn:ngm:class:knowledge-management
standardizedBy:
  - urn:ngm:class:standards
relatedTo:
  - urn:ngm:class:technical-writing
  - urn:ngm:class:reproducible-research
---

# Documentation

Documentation is the structured body of written, diagrammatic, or interactive material that describes the purpose, design, behaviour, and use of a system, dataset, process, or software artefact. It serves as the primary medium through which knowledge about an artefact is transferred between its creators and its users, maintainers, and auditors. Effective documentation spans reference material, conceptual explanations, tutorials, and procedural guides, and is increasingly treated as a versioned, testable component of the artefact itself rather than an afterthought.
