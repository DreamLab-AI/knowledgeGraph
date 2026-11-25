---
okf_version: "0.2"
type: Class
title: Quantum Computing
resource: urn:ngm:class:quantum-computing
domain: infrastructure
description: The engineering discipline and technology stack that performs computation using quantum-mechanical phenomena — superposition, entanglement and interference — over registers of qubits, spanning hardware platforms (superconducting circuits, trapped ions, photonics, neutral atoms), error correction, and algorithms such as Shor's factoring and Grover's search that offer provable or conjectured speed-u
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:infra-computing-and-cloud
hasPart:
  - urn:ngm:class:qubit
  - urn:ngm:class:quantum-gate
  - urn:ngm:class:quantum-error-correction
  - urn:ngm:class:quantum-circuit
requires:
  - urn:ngm:class:quantum-error-correction
enables:
  - urn:ngm:class:encryption
  - urn:ngm:class:quantum-key-distribution
  - urn:ngm:class:combinatorial-optimisation
  - urn:ngm:class:scientific-simulation
implements:
  - urn:ngm:class:shors-algorithm
  - urn:ngm:class:grovers-algorithm
contrastsWith:
  - urn:ngm:class:cryptography
  - urn:ngm:class:classical-computing
bridgesTo:
  - urn:ngm:class:combinatorial-optimisation
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:computational-complexity-theory
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:machine-learning
  - urn:ngm:class:deep-learning
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Quantum Computing

The engineering discipline and technology stack that performs computation using quantum-mechanical phenomena — superposition, entanglement and interference — over registers of qubits, spanning hardware platforms (superconducting circuits, trapped ions, photonics, neutral atoms), error correction, and algorithms such as Shor's factoring and Grover's search that offer provable or conjectured speed-ups over classical computation for specific problem classes including cryptanalysis, simulation of quantum systems and combinatorial optimisation.
