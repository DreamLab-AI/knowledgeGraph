---
okf_version: "0.2"
type: Class
title: Air Gap
resource: urn:ngm:class:air-gap
domain: blockchain
description: An air gap is a security measure that physically isolates a computer or storage device from unsecured networks, including the public internet and any networked device. In the context of cryptocurrency custody, an air-gapped device holds private keys and signs transactions while never establishing a live network connection, transferring data only through media such as QR codes or removable storage.
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cold-storage
requires:
  - urn:ngm:class:hardware-security-module
enables:
  - urn:ngm:class:self-custody
dependsOn:
  - urn:ngm:class:private-key
contrastsWith:
  - urn:ngm:class:network-security
  - urn:ngm:class:hardware-wallet
bridgesTo:
  - urn:ngm:class:secure-enclave
uses:
  - urn:ngm:class:private-key
  - urn:ngm:class:cryptographic-key
supports:
  - urn:ngm:class:key-management
  - urn:ngm:class:security
partOf:
  - urn:ngm:class:cold-storage
relatedTo:
  - urn:ngm:class:self-custody
  - urn:ngm:class:threat-model
  - urn:ngm:class:multisignature
---

# Air Gap

An air gap is a security measure that physically isolates a computer or storage device from unsecured networks, including the public internet and any networked device. In the context of cryptocurrency custody, an air-gapped device holds private keys and signs transactions while never establishing a live network connection, transferring data only through media such as QR codes or removable storage. This isolation dramatically reduces the remote attack surface available to adversaries.
