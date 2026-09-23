---
okf_version: "0.2"
type: Class
title: Attestation
resource: urn:ngm:class:attestation
domain: blockchain
description: Attestation is the act of producing verifiable, signed evidence that a claim, state, or property is true, allowing a relying party to trust it without re-deriving it. In blockchain proof-of-stake consensus, validators broadcast attestations voting on the head of the chain and on checkpoints, and the aggregate of these signed votes drives finalisation. More broadly, remote attestation lets a truste
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cryptographic-proof
hasPart:
  - urn:ngm:class:cryptographic-proof
requires:
  - urn:ngm:class:validator
  - urn:ngm:class:cryptography
enables:
  - urn:ngm:class:finality
  - urn:ngm:class:economic-finality
dependsOn:
  - urn:ngm:class:slashing
uses:
  - urn:ngm:class:cryptography
  - urn:ngm:class:cryptographic-proof
supports:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:tee
relatedTo:
  - urn:ngm:class:consensus
  - urn:ngm:class:validator
  - urn:ngm:class:remote-attestation
---

# Attestation

Attestation is the act of producing verifiable, signed evidence that a claim, state, or property is true, allowing a relying party to trust it without re-deriving it. In blockchain proof-of-stake consensus, validators broadcast attestations voting on the head of the chain and on checkpoints, and the aggregate of these signed votes drives finalisation. More broadly, remote attestation lets a trusted execution environment cryptographically prove its identity and integrity to a remote verifier. Attestations are typically cryptographic signatures over structured claims, and they underpin trust, accountability, and slashing-based security.
