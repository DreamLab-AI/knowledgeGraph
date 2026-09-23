---
okf_version: "0.2"
type: Class
title: Byzantine Agreement
resource: urn:ngm:class:byzantine-agreement
domain: blockchain
description: Byzantine Agreement is a class of distributed consensus protocols that guarantee correct operation even when a subset of participating nodes behave arbitrarily — sending conflicting, malicious, or unpredictable messages. Originating from the Byzantine Generals Problem formalised by Lamport, Shostak, and Pease in 1982, these protocols ensure that all honest nodes reach the same decision provided th
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:consensus-mechanism
hasPart:
  - urn:ngm:class:voting-round
enables:
  - urn:ngm:class:blockchain-data
  - urn:ngm:class:smart-contract
dependsOn:
  - urn:ngm:class:cryptographic-hash
implements:
  - urn:ngm:class:consensus-mechanism
contrastsWith:
  - urn:ngm:class:crash-fault-tolerance
bridgesTo:
  - urn:ngm:class:security
uses:
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:peer-to-peer-network
standardizedBy:
  - urn:ngm:class:distributed-computing-research
relatedTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:blockchain
---

# Byzantine Agreement

Byzantine Agreement is a class of distributed consensus protocols that guarantee correct operation even when a subset of participating nodes behave arbitrarily — sending conflicting, malicious, or unpredictable messages. Originating from the Byzantine Generals Problem formalised by Lamport, Shostak, and Pease in 1982, these protocols ensure that all honest nodes reach the same decision provided the number of faulty nodes does not exceed one-third of the total. Byzantine Agreement is foundational to blockchain consensus mechanisms and safety-critical distributed systems.
