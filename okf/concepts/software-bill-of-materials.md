---
okf_version: "0.2"
type: Class
title: Software Bill of Materials
resource: urn:ngm:class:software-bill-of-materials
domain: distributed-collaboration
description: A software bill of materials is a formal, machine-readable inventory of the components, libraries and dependencies that make up a software artefact, together with their versions, suppliers and relationships. It provides transparency into what a piece of software actually contains, enabling vulnerability tracking, licence auditing and provenance verification across the supply chain. Standard format
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:supply-chain-security
hasPart:
  - urn:ngm:class:provenance
  - urn:ngm:class:vulnerability
requires:
  - urn:ngm:class:continuous-integration
enables:
  - urn:ngm:class:vulnerability-management
  - urn:ngm:class:transparency
bridgesTo:
  - urn:ngm:class:supply-chain-security
uses:
  - urn:ngm:class:provenance
  - urn:ngm:class:continuous-integration
supports:
  - urn:ngm:class:vulnerability-management
  - urn:ngm:class:dev-sec-ops
  - urn:ngm:class:transparency
partOf:
  - urn:ngm:class:supply-chain-security
relatedTo:
  - urn:ngm:class:open-source
  - urn:ngm:class:vulnerability
  - urn:ngm:class:dev-sec-ops
---

# Software Bill of Materials

A software bill of materials is a formal, machine-readable inventory of the components, libraries and dependencies that make up a software artefact, together with their versions, suppliers and relationships. It provides transparency into what a piece of software actually contains, enabling vulnerability tracking, licence auditing and provenance verification across the supply chain. Standard formats such as SPDX and CycloneDX let an SBOM be generated, exchanged and consumed automatically by tooling.
