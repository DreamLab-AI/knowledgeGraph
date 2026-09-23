---
okf_version: "0.2"
type: Class
title: Batch Verification
resource: urn:ngm:class:batch-verification
domain: security
description: Batch verification is a cryptographic technique that checks the validity of many signatures or proofs together using a single, combined computation, rather than verifying each one independently. It exploits algebraic structure in schemes such as Schnorr signatures and Bulletproofs to amortise the cost of verification across a batch, giving large speed-ups when many proofs must be checked, for exam
maturity: established
quality: 0.65
is-a:
  - urn:ngm:class:cryptographic-verification
requires:
  - urn:ngm:class:cryptographic-verification
---

# Batch Verification

Batch verification is a cryptographic technique that checks the validity of many signatures or proofs together using a single, combined computation, rather than verifying each one independently. It exploits algebraic structure in schemes such as Schnorr signatures and Bulletproofs to amortise the cost of verification across a batch, giving large speed-ups when many proofs must be checked, for example during blockchain block validation. The trade-off is that a failing batch identifies only that some element is invalid, not which one, without additional bisection.
