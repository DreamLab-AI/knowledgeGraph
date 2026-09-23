---
okf_version: "0.2"
type: Class
title: Identity Attestation
resource: urn:ngm:class:identity-attestation
domain: security
description: Identity attestation is a cryptographically signed claim, issued by a trusted party, that vouches for an attribute or fact about a digital identity, such as personhood, credential possession or eligibility. It is verified through digital-signature verification against the issuer's public key, allowing a relying party to trust the claim without contacting the issuer directly. Attestation schemes ar
maturity: emerging
quality: 0.55
is-a:
  - urn:ngm:class:digital-identity
---

# Identity Attestation

Identity attestation is a cryptographically signed claim, issued by a trusted party, that vouches for an attribute or fact about a digital identity, such as personhood, credential possession or eligibility. It is verified through digital-signature verification against the issuer's public key, allowing a relying party to trust the claim without contacting the issuer directly. Attestation schemes are used in decentralised identity systems and in platforms such as Gitcoin to establish sybil-resistant, verifiable identity without revealing underlying personal data.
