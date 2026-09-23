---
okf_version: "0.2"
type: Class
title: Quantum Error Correction
resource: urn:ngm:class:quantum-error-correction
domain: infrastructure
description: Quantum error correction is the set of techniques that protect quantum information against decoherence and operational noise by encoding a logical qubit redundantly across many physical qubits. Stabiliser measurements detect errors without collapsing the encoded state, allowing the system to diagnose and reverse bit-flip and phase-flip faults. It is the central prerequisite for fault-tolerant quan
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:quantum-computation-paradigm
hasPart:
  - urn:ngm:class:qubit
  - urn:ngm:class:quantum-gate
  - urn:ngm:class:error-correction
requires:
  - urn:ngm:class:qubit
  - urn:ngm:class:linear-algebra
enables:
  - urn:ngm:class:quantum-computation-paradigm
  - urn:ngm:class:quantum-cryptography
dependsOn:
  - urn:ngm:class:qubit
bridgesTo:
  - urn:ngm:class:post-quantum-cryptography
  - urn:ngm:class:fault-tolerance
uses:
  - urn:ngm:class:linear-algebra
supports:
  - urn:ngm:class:quantum-gate
  - urn:ngm:class:error-correction
partOf:
  - urn:ngm:class:quantum-computation-paradigm
relatedTo:
  - urn:ngm:class:quantum-computation-paradigm
  - urn:ngm:class:infrastructure
---

# Quantum Error Correction

Quantum error correction is the set of techniques that protect quantum information against decoherence and operational noise by encoding a logical qubit redundantly across many physical qubits. Stabiliser measurements detect errors without collapsing the encoded state, allowing the system to diagnose and reverse bit-flip and phase-flip faults. It is the central prerequisite for fault-tolerant quantum computation, where logical error rates can be driven arbitrarily low provided physical error rates fall below a threshold.
