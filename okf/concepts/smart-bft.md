---
okf_version: "0.2"
type: Class
title: SMaRT-BFT
resource: urn:ngm:class:smart-bft
domain: blockchain
description: SMaRT-BFT is a Byzantine fault tolerant consensus approach built on the SMaRt (State Machine Replication) library, used to order transactions deterministically across a fixed set of validating nodes. It tolerates up to f faulty replicas out of 3f+1 total while guaranteeing safety and liveness under partial synchrony. It is commonly deployed in permissioned ledgers where validator identity is known
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:consensus-protocol
relatedTo:
  - urn:ngm:class:consortium-blockchain
  - urn:ngm:class:blockchain-as-a-service
  - urn:ngm:class:byzantine-fault-tolerance
---

# SMaRT-BFT

SMaRT-BFT is a Byzantine fault tolerant consensus approach built on the SMaRt (State Machine Replication) library, used to order transactions deterministically across a fixed set of validating nodes. It tolerates up to f faulty replicas out of 3f+1 total while guaranteeing safety and liveness under partial synchrony. It is commonly deployed in permissioned ledgers where validator identity is known and high throughput with finality is required.
