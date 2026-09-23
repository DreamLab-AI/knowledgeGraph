---
okf_version: "0.2"
type: Class
title: Quantum Gate
resource: urn:ngm:class:quantum-gate
domain: infrastructure
description: A reversible, unitary operation applied to a small number of qubits that transforms their joint quantum state, serving as the fundamental building block of quantum circuits in the gate-based model of quantum computation. Quantum gates are the analogue of classical logic gates but, being unitary matrices acting on complex state vectors, they can create superposition and entanglement, and any quantu
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:quantum-computation-paradigm
enables:
  - urn:ngm:class:quantum-error-correction
dependsOn:
  - urn:ngm:class:quantum-mechanics
  - urn:ngm:class:linear-algebra
partOf:
  - urn:ngm:class:quantum-computation-paradigm
---

# Quantum Gate

A reversible, unitary operation applied to a small number of qubits that transforms their joint quantum state, serving as the fundamental building block of quantum circuits in the gate-based model of quantum computation. Quantum gates are the analogue of classical logic gates but, being unitary matrices acting on complex state vectors, they can create superposition and entanglement, and any quantum algorithm can be decomposed into sequences drawn from a small universal gate set.
