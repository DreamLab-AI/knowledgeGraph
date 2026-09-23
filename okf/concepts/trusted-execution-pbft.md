---
okf_version: "0.2"
type: Class
title: Trusted Execution PBFT
resource: urn:ngm:class:trusted-execution-pbft
domain: blockchain
description: Trusted Execution PBFT is a variant of Practical Byzantine Fault Tolerance that leverages Trusted Execution Environments (TEEs), specifically Intel SGX, to implement a Unique Sequential Identifier Generator (USIG) that reduces the protocol to two message phases rather than the standard three. By anchoring sequence number generation inside a tamper-resistant enclave, it eliminates the view-change o
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:practical-byzantine-fault-tolerance
hasPart:
  - urn:ngm:class:consensus-mechanism
requires:
  - urn:ngm:class:tee
  - urn:ngm:class:byzantine-fault-tolerance
enables:
  - urn:ngm:class:finality
  - urn:ngm:class:blockchain-scalability
uses:
  - urn:ngm:class:secure-enclave
  - urn:ngm:class:digital-signature
relatedTo:
  - urn:ngm:class:node
  - urn:ngm:class:validator-node
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:blockchain-protocol
---

# Trusted Execution PBFT

Trusted Execution PBFT is a variant of Practical Byzantine Fault Tolerance that leverages Trusted Execution Environments (TEEs), specifically Intel SGX, to implement a Unique Sequential Identifier Generator (USIG) that reduces the protocol to two message phases rather than the standard three. By anchoring sequence number generation inside a tamper-resistant enclave, it eliminates the view-change overhead of classical PBFT while preserving Byzantine fault safety up to f < n/3 faulty replicas.
