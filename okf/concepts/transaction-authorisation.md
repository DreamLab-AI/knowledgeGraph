---
okf_version: "0.2"
type: Class
title: Transaction Authorisation
resource: urn:ngm:class:transaction-authorisation
domain: security
description: Transaction authorisation is the process of verifying that a party has the right to initiate a given transaction and that the transaction has been approved according to defined rules before it is executed. It typically relies on cryptographic proofs such as digital signatures to bind approval to a specific transaction payload, preventing tampering or replay. In financial and blockchain systems, tr
maturity: draft
quality: 0.55
is-a:
  - urn:ngm:class:authorisation
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Transaction Authorisation

Transaction authorisation is the process of verifying that a party has the right to initiate a given transaction and that the transaction has been approved according to defined rules before it is executed. It typically relies on cryptographic proofs such as digital signatures to bind approval to a specific transaction payload, preventing tampering or replay. In financial and blockchain systems, transaction authorisation is a prerequisite gate that must pass before settlement or state change occurs.
