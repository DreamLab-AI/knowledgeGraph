---
okf_version: "0.2"
type: Class
title: Transaction Throughput
resource: urn:ngm:class:transaction-throughput
domain: blockchain
description: Transaction throughput is the rate at which a system processes and finalises transactions, commonly expressed as transactions per second, and is a primary measure of a blockchain network's capacity and scalability. It is shaped by block size, block interval, consensus mechanism, and execution efficiency, and it trades off against decentralisation and security in protocol design. Improving throughp
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:scalability
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:blockchain-transaction
dependsOn:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:block-size
contrastsWith:
  - urn:ngm:class:latency
supports:
  - urn:ngm:class:optimistic-rollup
  - urn:ngm:class:zk-rollup
  - urn:ngm:class:sharding
partOf:
  - urn:ngm:class:performance
  - urn:ngm:class:scalability
relatedTo:
  - urn:ngm:class:transaction-finality
  - urn:ngm:class:state-channel
  - urn:ngm:class:sidechain
---

# Transaction Throughput

Transaction throughput is the rate at which a system processes and finalises transactions, commonly expressed as transactions per second, and is a primary measure of a blockchain network's capacity and scalability. It is shaped by block size, block interval, consensus mechanism, and execution efficiency, and it trades off against decentralisation and security in protocol design. Improving throughput is a central goal of layer-2 solutions and sharding.
