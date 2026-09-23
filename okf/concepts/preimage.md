---
okf_version: "0.2"
type: Class
title: Preimage
resource: urn:ngm:class:preimage
domain: blockchain
description: A preimage is an input value that, when passed through a cryptographic hash function, produces a specified output digest. Preimage resistance, the computational infeasibility of finding such an input given only the digest, is a core security property required of cryptographic hash functions. In protocols such as hash time-locked contracts, revealing the preimage of a previously published hash is u
maturity: mature
quality: 0.55
is-a:
  - urn:ngm:class:cryptographic-hash-function
requires:
  - urn:ngm:class:cryptographic-hash-function
---

# Preimage

A preimage is an input value that, when passed through a cryptographic hash function, produces a specified output digest. Preimage resistance, the computational infeasibility of finding such an input given only the digest, is a core security property required of cryptographic hash functions. In protocols such as hash time-locked contracts, revealing the preimage of a previously published hash is used as cryptographic proof that a condition has been satisfied, enabling trustless conditional payments.
