---
okf_version: "0.2"
type: Class
title: Meta-Transaction
resource: urn:ngm:class:meta-transaction
domain: blockchain
description: A meta-transaction is a blockchain transaction that a user signs off-chain but does not submit or pay gas for directly; instead a relayer submits it on the user's behalf and covers the transaction fee. It relies on a standard such as EIP-712 for structured, verifiable off-chain message signing so the relayer and receiving contract can authenticate the original signer. It enables gasless user exper
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:transaction
requires:
  - urn:ngm:class:eip-712
---

# Meta-Transaction

A meta-transaction is a blockchain transaction that a user signs off-chain but does not submit or pay gas for directly; instead a relayer submits it on the user's behalf and covers the transaction fee. It relies on a standard such as EIP-712 for structured, verifiable off-chain message signing so the relayer and receiving contract can authenticate the original signer. It enables gasless user experiences, letting applications abstract away native token fee requirements.
