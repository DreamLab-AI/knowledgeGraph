
Certificate Revocation is the process by which a Certificate Authority (CA) invalidates a previously issued digital certificate before its natural expiry, typically due to key compromise, CA compromise, or change in the certificate holder's status. Revocation information is distributed via Certificate Revocation Lists (CRLs) or the Online Certificate Status Protocol (OCSP). It is a critical component of public key infrastructure (PKI) lifecycle management.

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

- ### Provenance

