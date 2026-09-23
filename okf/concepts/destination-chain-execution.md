---
okf_version: "0.2"
type: Class
title: Destination Chain Execution
resource: urn:ngm:class:destination-chain-execution
domain: blockchain
description: "Destination chain execution is the phase of a cross-chain operation in which a message or transaction validated from a source chain is finally executed on the target blockchain. After relayers and verification prove the source event, the destination chain mints, releases, or calls a contract to complete the bridged action. Correct execution requires replay protection, message ordering guarantees, "
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:cross-chain-bridge
relatedTo:
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:cross-chain-bridge
---

# Destination Chain Execution

Destination chain execution is the phase of a cross-chain operation in which a message or transaction validated from a source chain is finally executed on the target blockchain. After relayers and verification prove the source event, the destination chain mints, releases, or calls a contract to complete the bridged action. Correct execution requires replay protection, message ordering guarantees, and trust in the verification layer.
