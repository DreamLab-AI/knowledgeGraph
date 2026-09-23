---
okf_version: "0.2"
type: Class
title: State Transition Function
resource: urn:ngm:class:state-transition-function
domain: blockchain
description: "A state transition function is the deterministic rule of a blockchain protocol that maps a current ledger state and a validated block of transactions to the next state, defining exactly how balances, contract storage, and other state evolve. Because every honest node applies the same function to the same inputs, all nodes converge on identical state, which is the basis of replicated consensus. It "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
relatedTo:
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:blockchain-protocol
---

# State Transition Function

A state transition function is the deterministic rule of a blockchain protocol that maps a current ledger state and a validated block of transactions to the next state, defining exactly how balances, contract storage, and other state evolve. Because every honest node applies the same function to the same inputs, all nodes converge on identical state, which is the basis of replicated consensus. It is the formal heart of a blockchain understood as a replicated state machine.
