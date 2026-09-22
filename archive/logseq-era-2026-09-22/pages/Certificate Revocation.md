public:: true

# Certificate Revocation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:certificate-revocation",
  "@type": "Page",
  "title": "Certificate Revocation",
  "vc:slug": "certificate-revocation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:certificate-revocation",
  "@type": "Class",
  "label": "Certificate Revocation",
  "definition": "Certificate Revocation is the process by which a Certificate Authority (CA) invalidates a previously issued digital certificate before its natural expiry, typically due to key compromise, CA compromise, or change in the certificate holder's status. Revocation information is distributed via Certificate Revocation Lists (CRLs) or the Online Certificate Status Protocol (OCSP). It is a critical component of public key infrastructure (PKI) lifecycle management.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:security", "label": "Security"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:public-key-infrastructure", "label": "Public Key Infrastructure"},
      {"@id": "urn:ngm:class:digital-certificate", "label": "Digital Certificate"},
      {"@id": "urn:ngm:class:certificate-authority", "label": "Certificate Authority"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:pki", "label": "PKI"},
      {"@id": "urn:ngm:class:trust-management", "label": "Trust Management"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:certificate-authority", "label": "Certificate Authority"},
      {"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:identity-management", "label": "Identity Management"},
      {"@id": "urn:ngm:class:zero-trust-architecture", "label": "Zero Trust Architecture"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:certificate-revocation-list", "label": "Certificate Revocation List"},
      {"@id": "urn:ngm:class:ocsp", "label": "OCSP"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:x509", "label": "X.509"},
      {"@id": "urn:ngm:class:rfc-5280", "label": "RFC 5280"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:tls", "label": "TLS"},
      {"@id": "urn:ngm:class:https", "label": "HTTPS"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:certificate-transparency", "label": "Certificate Transparency"},
      {"@id": "urn:ngm:class:short-lived-certificate", "label": "Short-Lived Certificate"}
    ],
    "relatedTo_2": [
      {"@id": "urn:ngm:class:key-management", "label": "Key Management"},
      {"@id": "urn:ngm:class:incident-response", "label": "Incident Response"}
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
