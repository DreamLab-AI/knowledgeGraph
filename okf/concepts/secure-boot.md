---
okf_version: "0.2"
type: Class
title: Secure Boot
resource: urn:ngm:class:secure-boot
domain: security
description: Secure Boot is a platform security mechanism that verifies the cryptographic signature of each component loaded during system start-up, allowing only software trusted by an established chain of keys to execute. By validating firmware, bootloaders, and the operating system loader before handing over control, it prevents persistent low-level malware such as bootkits from running. Secure Boot establi
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:security
hasPart:
  - urn:ngm:class:firmware
requires:
  - urn:ngm:class:cryptography
  - urn:ngm:class:sha-256
enables:
  - urn:ngm:class:security
dependsOn:
  - urn:ngm:class:firmware
  - urn:ngm:class:hardware
implements:
  - urn:ngm:class:authentication
contrastsWith:
  - urn:ngm:class:authorization
bridgesTo:
  - urn:ngm:class:supply-chain
uses:
  - urn:ngm:class:cryptography
supports:
  - urn:ngm:class:infrastructure
standardizedBy:
  - urn:ngm:class:standards
relatedTo:
  - urn:ngm:class:security
  - urn:ngm:class:firmware
  - urn:ngm:class:cryptography
  - urn:ngm:class:hardware
---

# Secure Boot

Secure Boot is a platform security mechanism that verifies the cryptographic signature of each component loaded during system start-up, allowing only software trusted by an established chain of keys to execute. By validating firmware, bootloaders, and the operating system loader before handing over control, it prevents persistent low-level malware such as bootkits from running. Secure Boot establishes a hardware-anchored chain of trust from power-on through to the operating system.
