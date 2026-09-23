---
okf_version: "0.2"
type: Class
title: Open Source
resource: urn:ngm:class:open-source
domain: distributed-collaboration
description: Open source designates software whose source code is released under a licence conforming to the Open Source Definition, granting anyone the rights to use, study, modify, and redistribute the code and derivative works. It is a development paradigm rooted in decentralised, community-driven collaboration where peer review, transparent workflows, and shared governance replace proprietary, closed devel
maturity: mature
quality: 0.75
is-a:
  - urn:ngm:class:software-development
hasPart:
  - urn:ngm:class:open-source-licence
  - urn:ngm:class:version-control
  - urn:ngm:class:code-review
  - urn:ngm:class:package-management
requires:
  - urn:ngm:class:version-control
  - urn:ngm:class:open-source-licence
enables:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:reproducible-research
  - urn:ngm:class:supply-chain-transparency
  - urn:ngm:class:collaborative-development
contrastsWith:
  - urn:ngm:class:proprietary-software
  - urn:ngm:class:closed-source
bridgesTo:
  - urn:ngm:class:open-source-ai
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:federated-learning
uses:
  - urn:ngm:class:git
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:issue-tracking
supports:
  - urn:ngm:class:decentralised-governance
  - urn:ngm:class:software-supply-chain
  - urn:ngm:class:ai-model-transparency
standardizedBy:
  - urn:ngm:class:open-source-initiative
  - urn:ngm:class:free-software-foundation
partOf:
  - urn:ngm:class:software-development
  - urn:ngm:class:commons-based-peer-production
relatedTo:
  - urn:ngm:class:inner-source
  - urn:ngm:class:software-bill-of-materials
  - urn:ngm:class:open-hardware
---

# Open Source

Open source designates software whose source code is released under a licence conforming to the Open Source Definition, granting anyone the rights to use, study, modify, and redistribute the code and derivative works. It is a development paradigm rooted in decentralised, community-driven collaboration where peer review, transparent workflows, and shared governance replace proprietary, closed development. Open source underpins the majority of modern computing infrastructure — from operating systems and compilers to cloud platforms and AI frameworks — and has expanded beyond software into hardware designs, datasets, models, and scientific research artefacts. Licences range from permissive (MIT, Apache 2.0) to copyleft (GPL, AGPL), with the choice of licence shaping how downstream users may integrate the code.
