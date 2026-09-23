---
okf_version: "0.2"
type: Class
title: Byzantine Fault Tolerance
resource: urn:ngm:class:byzantine-fault-tolerance
domain: distributed-systems
description: The feature of a distributed network to reach consensus on the same value even when some nodes fail to respond or respond with incorrect information. Enables networks to function correctly despite malicious or faulty nodes comprising less than one-third of the network. Derived from the Byzantine Generals Problem; the fundamental theorem states consensus is achievable if and only if more than two-t
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:distributed-agreement
hasPart:
  - urn:ngm:class:finality-gadget
  - urn:ngm:class:leader-election
  - urn:ngm:class:voting-round
requires:
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:message-authentication
  - urn:ngm:class:quorum
  - urn:ngm:class:distributed-agreement
enables:
  - urn:ngm:class:consensus
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:deterministic-finality
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:malicious-node-handling
  - urn:ngm:class:consensus
dependsOn:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:network-synchrony
implements:
  - urn:ngm:class:practical-byzantine-fault-tolerance
  - urn:ngm:class:hotstuff-protocol
contrastsWith:
  - urn:ngm:class:crash-fault-tolerance
  - urn:ngm:class:proof-of-work
bridgesTo:
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:ai-energy-optimisation
  - urn:ngm:class:distributed-systems
partOf:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:validator-set
  - urn:ngm:class:casper-ffg
---

# Byzantine Fault Tolerance

The feature of a distributed network to reach consensus on the same value even when some nodes fail to respond or respond with incorrect information. Enables networks to function correctly despite malicious or faulty nodes comprising less than one-third of the network. Derived from the Byzantine Generals Problem; the fundamental theorem states consensus is achievable if and only if more than two-thirds of participants are honest.
