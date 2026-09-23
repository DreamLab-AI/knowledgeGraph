---
okf_version: "0.2"
type: Class
title: Supply Chain Security
resource: urn:ngm:class:supply-chain-security
domain: security
description: Supply chain security is the practice of protecting the integrity, provenance, and trustworthiness of the components, dependencies, and processes that compose a product, with particular emphasis on software supply chains. It addresses threats such as compromised dependencies, malicious build tooling, and tampered artefacts through measures like signed releases, software bills of materials, and rep
maturity: established
quality: 0.73
is-a:
  - urn:ngm:class:cybersecurity
hasPart:
  - urn:ngm:class:software-bill-of-materials
  - urn:ngm:class:reproducible-builds
  - urn:ngm:class:provenance
requires:
  - urn:ngm:class:cryptographic-signing
  - urn:ngm:class:code-signing
  - urn:ngm:class:vulnerability-management
enables:
  - urn:ngm:class:zero-trust-architecture
dependsOn:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:package-repository
implements:
  - urn:ngm:class:slsa-framework
contrastsWith:
  - urn:ngm:class:perimeter-security
bridgesTo:
  - urn:ngm:class:devops
  - urn:ngm:class:governance
uses:
  - urn:ngm:class:sigstore
  - urn:ngm:class:open-source-software
supports:
  - urn:ngm:class:compliance
  - urn:ngm:class:audit-trail
standardizedBy:
  - urn:ngm:class:nist-cybersecurity-framework
partOf:
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:risk-management
relatedTo:
  - urn:ngm:class:cyber-security-and-cryptography
  - urn:ngm:class:third-party-risk-management
  - urn:ngm:class:secure-boot
  - urn:ngm:class:hardware-security
---

# Supply Chain Security

Supply chain security is the practice of protecting the integrity, provenance, and trustworthiness of the components, dependencies, and processes that compose a product, with particular emphasis on software supply chains. It addresses threats such as compromised dependencies, malicious build tooling, and tampered artefacts through measures like signed releases, software bills of materials, and reproducible builds. It has become a critical discipline as systems increasingly assemble third-party code and hardware.
