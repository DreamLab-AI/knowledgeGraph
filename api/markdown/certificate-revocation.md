- ### Definition
  - [[Certificate Revocation]] is the mechanism by which a [[Certificate Authority]] invalidates a [[Digital Certificate]] before expiry.
  - Triggered by key compromise, mis-issuance, or change in subscriber status.
  - Distributed via [[Certificate Revocation List]] (CRL) or [[OCSP]] (Online Certificate Status Protocol).
  - Standardised under [[X.509]] and [[RFC 5280]] as part of [[Public Key Infrastructure]] lifecycle management.

- ### Overview
  - Certificates encode a binding between a public key and an identity with a finite validity period.
  - When that binding is no longer trustworthy, revocation propagates distrust to all relying parties.
  - CRLs are periodically published signed lists; OCSP provides real-time per-certificate status queries.
  - OCSP Stapling allows the server to cache and present a signed OCSP response, reducing latency.

- ### Key Aspects
  - **CRL**: signed, time-stamped list of revoked serial numbers published by the CA at a known URI.
  - **OCSP**: real-time protocol where the client queries a responder for a specific certificate's status.
  - **Revocation reason codes**: key compromise, CA compromise, affiliation changed, superseded, cessation of operation.
  - **Soft-fail vs hard-fail**: client policy when revocation check is unavailable.

- ### Mechanisms
  - CA maintains a database of revoked certificates and signs CRL or OCSP responses.
  - Clients verify TLS certificates by fetching and checking the appropriate revocation data.
  - [[Zero Trust Architecture]] mandates short validation windows and often prefers [[Short-Lived Certificate]] over revocation.
  - [[Key Management]] systems trigger revocation workflows when private key compromise is detected.

- ### Applications
  - Web [[TLS]]/[[HTTPS]] certificate lifecycle management.
  - [[Identity Management]] in enterprise PKI environments.
  - Code signing certificate revocation in software supply chains.
  - [[Incident Response]] procedures after credential compromise events.
  - IoT device certificate management in constrained networks.

- ### Relationships
  - relatedTo:: [[Public Key Infrastructure]]
  - relatedTo:: [[Digital Certificate]]
  - relatedTo:: [[Certificate Authority]]
  - implements:: [[PKI]]
  - implements:: [[Trust Management]]
  - requires:: [[Certificate Authority]]
  - requires:: [[Cryptographic Protocol]]
  - enables:: [[Identity Management]]
  - enables:: [[Zero Trust Architecture]]
  - hasPart:: [[Certificate Revocation List]]
  - hasPart:: [[OCSP]]
  - standardizedBy:: [[X.509]]
  - supports:: [[TLS]]
  - supports:: [[HTTPS]]
  - contrastsWith:: [[Certificate Transparency]]
  - contrastsWith:: [[Short-Lived Certificate]]
  - relatedTo:: [[Key Management]]
  - relatedTo:: [[Incident Response]]

- ### Provenance
  - updated:: 2026-06-15