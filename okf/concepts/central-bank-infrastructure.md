---
okf_version: "0.2"
type: Class
title: Central Bank Infrastructure
resource: urn:ngm:class:central-bank-infrastructure
domain: finance
description: "Central bank infrastructure encompasses the systems, networks, and institutional arrangements through which a central bank fulfils its core functions: operating real-time gross settlement (RTGS) systems for interbank payments, managing the issuance and lifecycle of physical and digital currency, implementing monetary policy, maintaining financial stability, and serving as lender of last resort. It"
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:payment-infrastructure
enables:
  - urn:ngm:class:monetary-policy-implementation
  - urn:ngm:class:atomic-settlement
  - urn:ngm:class:cbdc-infrastructure
supports:
  - urn:ngm:class:financial-stability
  - urn:ngm:class:cross-border-settlement
relatedTo:
  - urn:ngm:class:central-bank
  - urn:ngm:class:monetary-policy
---

# Central Bank Infrastructure

Central bank infrastructure encompasses the systems, networks, and institutional arrangements through which a central bank fulfils its core functions: operating real-time gross settlement (RTGS) systems for interbank payments, managing the issuance and lifecycle of physical and digital currency, implementing monetary policy, maintaining financial stability, and serving as lender of last resort. It includes SWIFT connectivity, RTGS platforms (such as CHAPS, Fedwire, TARGET2), central securities depositories, and increasingly the digital and distributed ledger systems under evaluation for CBDC issuance. This infrastructure forms the foundation upon which all commercial banking and payment activity ultimately settles.
