---
okf_version: "0.2"
type: Class
title: Synchronous Execution
resource: urn:ngm:class:synchronous-execution
domain: blockchain
description: Synchronous Execution is a computational execution model in which operations are performed sequentially, with each call blocking the invoking thread until a result is returned before the next operation begins. This model provides deterministic, predictable control flow and simplifies error handling, making it well-suited for transactional operations, authentication flows, and ACID-compliant databa
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:execution-model
enables:
  - urn:ngm:class:transaction-confirmation
  - urn:ngm:class:state-machine-replication
contrastsWith:
  - urn:ngm:class:asynchronous-execution
  - urn:ngm:class:event-driven-architecture
bridgesTo:
  - urn:ngm:class:execution-model
uses:
  - urn:ngm:class:smart-contract-execution
relatedTo:
  - urn:ngm:class:transaction-processing
  - urn:ngm:class:transaction-finality
  - urn:ngm:class:state-machine
  - urn:ngm:class:distributed-systems
---

# Synchronous Execution

Synchronous Execution is a computational execution model in which operations are performed sequentially, with each call blocking the invoking thread until a result is returned before the next operation begins. This model provides deterministic, predictable control flow and simplifies error handling, making it well-suited for transactional operations, authentication flows, and ACID-compliant database interactions, though it constrains throughput and scalability under high-concurrency workloads.
