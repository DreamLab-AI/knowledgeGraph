---
okf_version: "0.2"
type: Class
title: Twisted Edwards Curve
resource: urn:ngm:class:twisted-edwards-curve
domain: security
description: A twisted Edwards curve is a form of elliptic curve, defined by the equation ax squared plus y squared equals 1 plus dx squared y squared, whose complete addition law has no exceptional cases, making implementations naturally resistant to certain side-channel and invalid-curve attacks. Curve25519 in its twisted Edwards form, Ed25519, is the most widely deployed instance, chosen for its combination
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:elliptic-curve-cryptography
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Twisted Edwards Curve

A twisted Edwards curve is a form of elliptic curve, defined by the equation ax squared plus y squared equals 1 plus dx squared y squared, whose complete addition law has no exceptional cases, making implementations naturally resistant to certain side-channel and invalid-curve attacks. Curve25519 in its twisted Edwards form, Ed25519, is the most widely deployed instance, chosen for its combination of speed and misuse resistance. It is the underlying curve group over which the EdDSA signature scheme performs its arithmetic.
