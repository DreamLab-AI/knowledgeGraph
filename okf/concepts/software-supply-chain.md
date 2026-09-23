---
okf_version: "0.2"
type: Class
title: Software Supply Chain
resource: urn:ngm:class:software-supply-chain
domain: infrastructure
description: The software supply chain is the full set of components, processes, tools and actors involved in producing and delivering software, encompassing source code, third-party and open-source dependencies, build systems, package registries and deployment pipelines. Because modern applications assemble large amounts of external code, the integrity of every link matters for security and reliability. Secur
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:software-engineering
hasPart:
  - urn:ngm:class:software-bill-of-materials
  - urn:ngm:class:open-source
requires:
  - urn:ngm:class:provenance
  - urn:ngm:class:attestation
enables:
  - urn:ngm:class:supply-chain-security
dependsOn:
  - urn:ngm:class:open-source
bridgesTo:
  - urn:ngm:class:supply-chain-security
uses:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:open-source
supports:
  - urn:ngm:class:software-development
  - urn:ngm:class:continuous-integration
relatedTo:
  - urn:ngm:class:vulnerability
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:supply-chain
---

# Software Supply Chain

The software supply chain is the full set of components, processes, tools and actors involved in producing and delivering software, encompassing source code, third-party and open-source dependencies, build systems, package registries and deployment pipelines. Because modern applications assemble large amounts of external code, the integrity of every link matters for security and reliability. Securing it relies on practices such as software bills of materials, provenance attestation and dependency management.
