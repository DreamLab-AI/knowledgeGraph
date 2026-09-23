---
okf_version: "0.2"
type: Class
title: Cryptographic Sortition
resource: urn:ngm:class:cryptographic-sortition
domain: blockchain
description: Cryptographic sortition is a technique for randomly and unpredictably selecting a subset of participants from a larger population to perform a role such as block proposal or committee membership, using a verifiable random function so the outcome cannot be predicted or manipulated in advance. Each participant can privately determine whether they were selected and prove it to others without revealin
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:consensus-mechanism
requires:
  - urn:ngm:class:consensus-mechanism
---

# Cryptographic Sortition

Cryptographic sortition is a technique for randomly and unpredictably selecting a subset of participants from a larger population to perform a role such as block proposal or committee membership, using a verifiable random function so the outcome cannot be predicted or manipulated in advance. Each participant can privately determine whether they were selected and prove it to others without revealing information that would let an adversary target them beforehand. It underpins consensus protocols such as Algorand's, allowing large validator populations to reach agreement with low communication overhead and strong resistance to targeted attacks.
