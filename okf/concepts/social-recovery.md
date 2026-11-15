---
okf_version: "0.2"
type: Class
title: Social Recovery
resource: urn:ngm:class:social-recovery
domain: blockchain
description: Social recovery is a wallet security mechanism that lets a user regain control of an account by relying on a set of trusted guardians rather than a single seed phrase. If a signing key is lost, a quorum of designated guardians can authorise a key rotation to a new owner address without ever holding the funds themselves. It mitigates catastrophic key loss while preserving self-custody, and is a fla
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:identity-management
relatedTo:
  - urn:ngm:class:account-abstraction
  - urn:ngm:class:multi-sig-governance
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Social Recovery

Social recovery is a wallet security mechanism that lets a user regain control of an account by relying on a set of trusted guardians rather than a single seed phrase. If a signing key is lost, a quorum of designated guardians can authorise a key rotation to a new owner address without ever holding the funds themselves. It mitigates catastrophic key loss while preserving self-custody, and is a flagship use case for smart-contract wallets.
