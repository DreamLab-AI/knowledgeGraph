---
okf_version: "0.2"
type: Class
title: Sigstore
resource: urn:ngm:class:sigstore
domain: security
description: Sigstore is an open-source project and set of services for signing, verifying, and proving the provenance of software artefacts using short-lived keys and a public transparency log. It removes the burden of long-term key management by issuing ephemeral signing certificates bound to OpenID Connect identities, recording signatures in an append-only log (Rekor) for auditability. Sigstore underpins so
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:supply-chain-security
requires:
  - urn:ngm:class:cryptographic-hash-function
enables:
  - urn:ngm:class:software-supply-chain
  - urn:ngm:class:content-provenance
implements:
  - urn:ngm:class:code-signing
bridgesTo:
  - urn:ngm:class:security
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:certificate-authority
supports:
  - urn:ngm:class:supply-chain-security
  - urn:ngm:class:software-supply-chain
partOf:
  - urn:ngm:class:supply-chain-security
relatedTo:
  - urn:ngm:class:ecdsa
  - urn:ngm:class:cryptographic-signature
---

# Sigstore

Sigstore is an open-source project and set of services for signing, verifying, and proving the provenance of software artefacts using short-lived keys and a public transparency log. It removes the burden of long-term key management by issuing ephemeral signing certificates bound to OpenID Connect identities, recording signatures in an append-only log (Rekor) for auditability. Sigstore underpins software supply-chain security through tools such as Cosign for container and artefact signing.
