---
okf_version: "0.2"
type: Class
title: TEE
resource: urn:ngm:class:tee
domain: security
description: A trusted execution environment, a secure area of a processor that isolates code and data so that they are protected from the rest of the system, including a compromised operating system. It provides confidentiality and integrity for sensitive computation.
maturity: established
quality: 0.6
requires:
  - urn:ngm:class:hardware
enables:
  - urn:ngm:class:data-confidentiality
bridgesTo:
  - urn:ngm:class:tee
---

# TEE

A trusted execution environment, a secure area of a processor that isolates code and data so that they are protected from the rest of the system, including a compromised operating system. It provides confidentiality and integrity for sensitive computation.
