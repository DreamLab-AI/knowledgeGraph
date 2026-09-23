---
okf_version: "0.2"
type: Class
title: Proof of Publication
resource: urn:ngm:class:proof-of-publication
domain: blockchain
description: "Proof of publication is a cryptographic guarantee that a given message has been published to, and ordered within, an append-only medium visible to all relevant parties, such that the publisher cannot later equivocate or hide it. Together with single-use seals it forms one of the two foundations of client-side validation: the publication medium (most commonly the Bitcoin blockchain, but also a Nost"
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-protocol
enables:
  - urn:ngm:class:single-use-seals
  - urn:ngm:class:client-side-validation
  - urn:ngm:class:block-trails
dependsOn:
  - urn:ngm:class:distributed-consensus
bridgesTo:
  - urn:ngm:class:nostr
uses:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-network
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:trusted-timestamping
relatedTo:
  - urn:ngm:class:censorship-resistance
  - urn:ngm:class:data-availability
  - urn:ngm:class:blockchain
  - urn:ngm:class:rgb-protocol
---

# Proof of Publication

Proof of publication is a cryptographic guarantee that a given message has been published to, and ordered within, an append-only medium visible to all relevant parties, such that the publisher cannot later equivocate or hide it. Together with single-use seals it forms one of the two foundations of client-side validation: the publication medium (most commonly the Bitcoin blockchain, but also a Nostr relay set or other consensus system) provides ordering and non-equivocation, while seals bind specific messages to spendable objects. It is the property that lets off-chain smart-contract systems trust that a seal closure was witnessed once and only once.
