---
okf_version: "0.2"
type: Class
title: AluVM
resource: urn:ngm:class:alu-vm
domain: blockchain
description: A purely functional, register-based virtual machine designed for deterministic execution of smart-contract validation logic within client-side validated Bitcoin protocol layers, notably the RGB Protocol. AluVM operates without mutable global state, using a RISC-like instruction set that guarantees bounded execution time and reproducible results across heterogeneous computing environments. Its arch
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:virtual-machine
implements:
  - urn:ngm:class:rgb-protocol
uses:
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:taproot
relatedTo:
  - urn:ngm:class:rgb-and-client-side-validation
  - urn:ngm:class:layer-2-solutions
---

# AluVM

A purely functional, register-based virtual machine designed for deterministic execution of smart-contract validation logic within client-side validated Bitcoin protocol layers, notably the RGB Protocol. AluVM operates without mutable global state, using a RISC-like instruction set that guarantees bounded execution time and reproducible results across heterogeneous computing environments. Its architecture is specifically optimised for the constraints of client-side validation, where contract logic must execute identically across all validating parties without access to a shared blockchain state machine.
