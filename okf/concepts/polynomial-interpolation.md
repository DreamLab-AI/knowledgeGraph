---
okf_version: "0.2"
type: Class
title: Polynomial Interpolation
resource: urn:ngm:class:polynomial-interpolation
domain: security
description: Polynomial interpolation is the construction of the unique polynomial of degree at most n-1 that passes through n given data points, most commonly computed via Lagrange or Newton forms. It underlies Shamir secret sharing, where a secret is encoded as the constant term of a random polynomial and reconstructed only when enough evaluated points, or shares, are combined via interpolation. The same tec
maturity: mature
quality: 0.55
is-a:
  - urn:ngm:class:interpolation
requires:
  - urn:ngm:class:interpolation
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Polynomial Interpolation

Polynomial interpolation is the construction of the unique polynomial of degree at most n-1 that passes through n given data points, most commonly computed via Lagrange or Newton forms. It underlies Shamir secret sharing, where a secret is encoded as the constant term of a random polynomial and reconstructed only when enough evaluated points, or shares, are combined via interpolation. The same technique underlies Reed-Solomon error-correcting codes, which treat message symbols as polynomial coefficients and use redundant evaluated points to recover data despite loss or corruption.
