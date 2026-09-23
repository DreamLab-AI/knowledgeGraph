---
okf_version: "0.2"
type: Class
title: Distributed Systems Security
resource: urn:ngm:class:distributed-systems-security
domain: security
description: Distributed systems security is the discipline of protecting confidentiality, integrity and availability across systems whose components run on separate machines and communicate over untrusted networks. It addresses threats unique to distribution, including partial failure, Byzantine participants, replay and partition attacks, and the absence of a single trusted authority. Techniques span authenti
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:security
hasPart:
  - urn:ngm:class:access-control
  - urn:ngm:class:authentication
requires:
  - urn:ngm:class:cryptography
  - urn:ngm:class:consensus-algorithm
enables:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:fault-tolerance
dependsOn:
  - urn:ngm:class:cryptography
  - urn:ngm:class:threat-model
bridgesTo:
  - urn:ngm:class:blockchain-security
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:network-security
supports:
  - urn:ngm:class:replication
  - urn:ngm:class:intrusion-detection
partOf:
  - urn:ngm:class:distributed-systems
relatedTo:
  - urn:ngm:class:network-security
---

# Distributed Systems Security

Distributed systems security is the discipline of protecting confidentiality, integrity and availability across systems whose components run on separate machines and communicate over untrusted networks. It addresses threats unique to distribution, including partial failure, Byzantine participants, replay and partition attacks, and the absence of a single trusted authority. Techniques span authenticated and encrypted channels, fault-tolerant consensus, access control and threat modelling tailored to the multi-node setting.
