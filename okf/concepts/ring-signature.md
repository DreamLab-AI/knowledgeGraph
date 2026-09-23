---
okf_version: "0.2"
type: Class
title: Ring Signature
resource: urn:ngm:class:ring-signature
domain: security
description: A ring signature is a digital signature produced by one member of a group such that verifiers learn the signature came from the group but cannot identify which member signed. It provides signer anonymity within an ad hoc set.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:cryptography
requires:
  - urn:ngm:class:cryptography
enables:
  - urn:ngm:class:pseudonymity
bridgesTo:
  - urn:ngm:class:zero-knowledge-proof
---

# Ring Signature

A ring signature is a digital signature produced by one member of a group such that verifiers learn the signature came from the group but cannot identify which member signed. It provides signer anonymity within an ad hoc set.
