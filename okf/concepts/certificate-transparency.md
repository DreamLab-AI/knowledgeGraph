---
okf_version: "0.2"
type: Class
title: Certificate Transparency
resource: urn:ngm:class:certificate-transparency
domain: security
description: Certificate Transparency (CT) is an open framework and internet standard (RFC 6962 and RFC 9162) that creates a publicly auditable, append-only log of all TLS certificates issued by certificate authorities, enabling domain owners, browser vendors, and security researchers to detect misissued or fraudulent certificates rapidly. CT logs use Merkle hash trees to provide cryptographic proofs of inclus
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-infrastructure
requires:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:append-only-log
enables:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:audit-trail
  - urn:ngm:class:security-monitoring
  - urn:ngm:class:threat-intelligence
dependsOn:
  - urn:ngm:class:domain-name-system
contrastsWith:
  - urn:ngm:class:ocsp
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:supply-chain-security
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:audit-log
  - urn:ngm:class:tls
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:digital-signature
  - urn:ngm:class:x-509-certificate
standardizedBy:
  - urn:ngm:class:ca-browser-forum
  - urn:ngm:class:ietf
relatedTo:
  - urn:ngm:class:tls-1-3
  - urn:ngm:class:public-key-cryptography
---

# Certificate Transparency

Certificate Transparency (CT) is an open framework and internet standard (RFC 6962 and RFC 9162) that creates a publicly auditable, append-only log of all TLS certificates issued by certificate authorities, enabling domain owners, browser vendors, and security researchers to detect misissued or fraudulent certificates rapidly. CT logs use Merkle hash trees to provide cryptographic proofs of inclusion and consistency, guaranteeing that any certificate added to a log cannot be subsequently removed or altered. Major browsers enforce CT by requiring certificates to carry signed certificate timestamps (SCTs) from recognised logs, making unauthorised certificate issuance immediately detectable.
