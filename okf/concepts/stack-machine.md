---
okf_version: "0.2"
type: Class
title: Stack Machine
resource: urn:ngm:class:stack-machine
domain: blockchain
description: A stack machine is an execution model in which operands and intermediate results are held on a last-in-first-out stack rather than in named registers, with instructions implicitly consuming their inputs from the top of the stack and pushing their outputs back onto it. The model yields compact, position-independent bytecode and a simple deterministic evaluator, which is why it underpins many script
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:execution-model
requires:
  - urn:ngm:class:bytecode
enables:
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
dependsOn:
  - urn:ngm:class:execution-model
implements:
  - urn:ngm:class:execution-model
contrastsWith:
  - urn:ngm:class:virtual-machine
bridgesTo:
  - urn:ngm:class:virtual-machine
uses:
  - urn:ngm:class:bytecode
supports:
  - urn:ngm:class:script
partOf:
  - urn:ngm:class:virtual-machine
relatedTo:
  - urn:ngm:class:taproot
  - urn:ngm:class:bitcoin
---

# Stack Machine

A stack machine is an execution model in which operands and intermediate results are held on a last-in-first-out stack rather than in named registers, with instructions implicitly consuming their inputs from the top of the stack and pushing their outputs back onto it. The model yields compact, position-independent bytecode and a simple deterministic evaluator, which is why it underpins many scripting languages and blockchain virtual machines such as Bitcoin Script and the Ethereum Virtual Machine.
