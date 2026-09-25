The CA/Browser Forum (CA/B Forum) is a voluntary industry consortium of Certification Authorities (CAs), web browser vendors, and other relying parties that collaboratively develops and enforces minimum standards for the issuance and management of X.509 digital certificates used in TLS/HTTPS, code signing, and S/MIME email. Its Baseline Requirements documents define mandatory technical and procedural controls that CAs must meet to remain trusted by member browsers such as Chrome, Firefox, Safari, and Edge. Compliance is a prerequisite for inclusion in browser root stores, giving the Forum significant de facto regulatory power over internet PKI.

### Overview

- The CA/Browser Forum was founded in 2005 following concerns about inconsistent CA practices revealed by high-profile certificate mis-issuances.
- The SSL Baseline Requirements v1.0 (2012) established the first universal minimum standards for DV/OV TLS certificates.
- The Forum operates working groups: Server Certificate (TLS/HTTPS), S/MIME, Code Signing, and Network Security.
- Certificate Transparency (RFC 6962) logs — a Google initiative adopted into Baseline Requirements — provide public auditability of all issued certificates.
- 90-day maximum validity for TLS certificates was standardised; further reduction (47 days by 2029) is being phased in.

### Key aspects

- Domain Validation (DV), Organisation Validation (OV), and Extended Validation (EV) certificate types with escalating identity assurance.
- CAA DNS records allow domain owners to restrict which CAs may issue certificates for their domains.
- Revocation: CRL and OCSP mechanisms; browser-side soft-fail and OCSP stapling.
- WebPKI agility: Forum coordinates algorithm migration (e.g. SHA-1 deprecation, ECDSA adoption, post-quantum preparation).
- Ballot process: proposed changes circulate for 30-day review; two-thirds majority in both CA and browser groups required for adoption.

### Mechanisms

- Baseline Requirements and Network Security Requirements codify CA operational controls in auditable documents.
- Annual WebTrust or ETSI audits verify CA compliance; failures can trigger distrust by browser root stores.
- Certificate Transparency requires CAs to submit pre-certificates to public logs before issuance, enabling monitoring for mis-issuance.
- Automated certificate management via ACME protocol (RFC 8555) reduces human error in issuance and renewal.

### Applications

- Establishes trust anchor for HTTPS connections securing e-commerce, banking, and government services.
- Governs code-signing certificates preventing malware distribution under legitimate developer identities.
- S/MIME working group extends oversight to email encryption and signing.
- Sets precedent for quantum-safe cryptography migration timelines across the internet PKI.

### Provenance

