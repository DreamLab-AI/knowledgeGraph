---
okf_version: "0.2"
type: Class
title: Client-Side Validation Theory
resource: urn:ngm:class:client-side-validation-theory
domain: blockchain
description: Client-side validation theory is the conceptual framework in which the validity of state transitions is verified by the affected parties themselves rather than by every node of a global consensus layer, with the blockchain used only to commit to and order single-use seals. Data and proofs are kept off-chain and shared peer-to-peer, so the base chain provides ordering and double-spend prevention wi
maturity: experimental
quality: 0.72
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
relatedTo:
  - urn:ngm:class:rgb-and-client-side-validation
---

# Client-Side Validation Theory

Client-side validation theory is the conceptual framework in which the validity of state transitions is verified by the affected parties themselves rather than by every node of a global consensus layer, with the blockchain used only to commit to and order single-use seals. Data and proofs are kept off-chain and shared peer-to-peer, so the base chain provides ordering and double-spend prevention without learning transaction contents. It matters because it underpins scalable, private smart-contract systems such as RGB that inherit Bitcoin's security without bloating its chain.
