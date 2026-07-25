public:: true

# Ca Browser Forum

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:ca-browser-forum", "@type":"Page", "title":"Ca Browser Forum", "vc:slug":"ca-browser-forum", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ca-browser-forum",
  "@type": "Class",
  "label": "Ca Browser Forum",
  "definition": "The CA/Browser Forum (CA/B Forum) is a voluntary industry consortium of Certification Authorities (CAs), web browser vendors, and other relying parties that collaboratively develops and enforces minimum standards for the issuance and management of X.509 digital certificates used in TLS/HTTPS, code signing, and S/MIME email. Its Baseline Requirements documents define mandatory technical and procedural controls that CAs must meet to remain trusted by member browsers such as Chrome, Firefox, Safari, and Edge. Compliance is a prerequisite for inclusion in browser root stores, giving the Forum significant de facto regulatory power over internet PKI.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:security", "label": "Security"}],
  "relations": {
    "standardizedBy": [
      {"@id": "urn:ngm:class:certificate-authority", "label": "Certificate Authority"},
      {"@id": "urn:ngm:class:standards", "label": "Standards"}
    ],
    "governs": [
      {"@id": "urn:ngm:class:certificate-authority", "label": "Certificate Authority"},
      {"@id": "urn:ngm:class:tls", "label": "TLS"},
      {"@id": "urn:ngm:class:public-key-infrastructure", "label": "Public Key Infrastructure"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:web-security", "label": "Web Security"},
      {"@id": "urn:ngm:class:https", "label": "HTTPS"},
      {"@id": "urn:ngm:class:code-signing", "label": "Code Signing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:root-store", "label": "Root Store"},
      {"@id": "urn:ngm:class:x509", "label": "X.509"},
      {"@id": "urn:ngm:class:certificate-transparency", "label": "Certificate Transparency"},
      {"@id": "urn:ngm:class:extended-validation", "label": "Extended Validation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:audit-compliance", "label": "Audit Compliance"},
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:internet-security", "label": "Internet Security"},
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:ietf", "label": "IETF"},
      {"@id": "urn:ngm:class:w3c", "label": "W3C"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:public-key-infrastructure", "label": "Public Key Infrastructure"}
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - The [[Ca Browser Forum]] (CA/B Forum) is the voluntary industry body governing [[Certificate Authority]] behaviour and [[TLS]] certificate standards for [[Public Key Infrastructure]] on the public internet.
  - Its Baseline Requirements are adopted as mandatory policy by [[Root Store]] operators (browsers, OSes), giving them binding force despite lacking formal regulatory status.
  - Members include CAs (DigiCert, Sectigo, Let's Encrypt) and browsers (Apple, Google, Microsoft, Mozilla), with each group holding equal voting weight.

- ### Overview
  - The CA/Browser Forum was founded in 2005 following concerns about inconsistent CA practices revealed by high-profile certificate mis-issuances.
  - The SSL Baseline Requirements v1.0 (2012) established the first universal minimum standards for DV/OV TLS certificates.
  - The Forum operates working groups: Server Certificate (TLS/HTTPS), S/MIME, Code Signing, and Network Security.
  - Certificate Transparency (RFC 6962) logs — a Google initiative adopted into Baseline Requirements — provide public auditability of all issued certificates.
  - 90-day maximum validity for TLS certificates was standardised; further reduction (47 days by 2029) is being phased in.

- ### Key aspects
  - Domain Validation (DV), Organisation Validation (OV), and Extended Validation (EV) certificate types with escalating identity assurance.
  - CAA DNS records allow domain owners to restrict which CAs may issue certificates for their domains.
  - Revocation: CRL and OCSP mechanisms; browser-side soft-fail and OCSP stapling.
  - WebPKI agility: Forum coordinates algorithm migration (e.g. SHA-1 deprecation, ECDSA adoption, post-quantum preparation).
  - Ballot process: proposed changes circulate for 30-day review; two-thirds majority in both CA and browser groups required for adoption.

- ### Mechanisms
  - Baseline Requirements and Network Security Requirements codify CA operational controls in auditable documents.
  - Annual WebTrust or ETSI audits verify CA compliance; failures can trigger distrust by browser root stores.
  - Certificate Transparency requires CAs to submit pre-certificates to public logs before issuance, enabling monitoring for mis-issuance.
  - Automated certificate management via ACME protocol (RFC 8555) reduces human error in issuance and renewal.

- ### Applications
  - Establishes trust anchor for HTTPS connections securing e-commerce, banking, and government services.
  - Governs code-signing certificates preventing malware distribution under legitimate developer identities.
  - S/MIME working group extends oversight to email encryption and signing.
  - Sets precedent for quantum-safe cryptography migration timelines across the internet PKI.

- ### Relationships
  - standardizedBy:: [[Certificate Authority]]
  - governs:: [[Certificate Authority]]
  - governs:: [[TLS]]
  - governs:: [[Public Key Infrastructure]]
  - enables:: [[Web Security]]
  - enables:: [[HTTPS]]
  - enables:: [[Code Signing]]
  - relatedTo:: [[Root Store]]
  - relatedTo:: [[X.509]]
  - relatedTo:: [[Certificate Transparency]]
  - requires:: [[Audit Compliance]]
  - requires:: [[Cryptography]]
  - supports:: [[Internet Security]]
  - contrastsWith:: [[IETF]]

- ### Provenance
  - updated:: 2026-06-15
