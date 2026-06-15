public:: true

# Qualified Electronic Signature

```json
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:qualified-electronic-signature", "@type": "Page", "title": "Qualified Electronic Signature", "vc:slug": "qualified-electronic-signature", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:qualified-electronic-signature",
  "@type": "Class",
  "label": "Qualified Electronic Signature",
  "definition": "A qualified electronic signature (QES) is the highest-assurance class of electronic signature defined by the European Union's eIDAS regulation, created with a qualified signature-creation device and backed by a qualified certificate issued by an accredited trust service provider. It is legally equivalent to a handwritten signature across the EU and provides strong guarantees of signer identity and document integrity. QES underpins cross-border legal acts requiring the highest evidentiary weight.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:electronic-signature",
      "label": "Electronic Signature"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:electronic-signature",
        "label": "Electronic Signature"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:eidas-regulation",
        "label": "eIDAS Regulation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:eidas-regulation",
        "label": "eIDAS Regulation"
      },
      {
        "@id": "urn:ngm:class:electronic-signature",
        "label": "Electronic Signature"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:biometric-authentication",
        "label": "Biometric Authentication"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A qualified electronic signature (QES) is the highest-assurance class of electronic signature defined by the European Union's eIDAS regulation, created with a qualified signature-creation device and backed by a qualified certificate issued by an accredited trust service provider. It is legally equivalent to a handwritten signature across the EU and provides strong guarantees of signer identity and document integrity. QES underpins cross-border legal acts requiring the highest evidentiary weight.
  - Related concepts: [[Electronic Signature]], [[Public Key Infrastructure]], [[Cryptography]], [[Certificate Authority]], [[Digital Signature]], [[Identity Verification]]
- ### Overview
  - Qualified electronic signatures sit at the apex of the eIDAS trust pyramid, above simple and advanced electronic signatures. Their legal equivalence to wet-ink signatures and their reliance on accredited qualified trust service providers make them the instrument of choice for high-stakes contracts and public-sector procedures across the European single market.
- ### Mechanisms
  - Creation on a certified qualified signature-creation device
  - Binding to a qualified certificate from an accredited trust service provider
  - Public-key cryptography ensuring authenticity and integrity
  - Cross-border legal recognition mandated by eIDAS
- ### Applications
  - Cross-border contract execution within the EU
  - Public-sector and e-government procedures
  - High-value financial and notarial documents
  - Trusted remote signing in digital identity wallets
- ### Relationships
  - subClassOf:: [[Electronic Signature]]
  - partOf:: [[Electronic Signature]]
  - uses:: [[Public Key Infrastructure]]
  - uses:: [[Cryptography]]
  - uses:: [[Certificate Authority]]
  - requires:: [[Digital Signature]]
  - requires:: [[Public Key Infrastructure]]
  - requires:: [[Identity Verification]]
  - enables:: [[Authentication]]
  - enables:: [[Digital Identity]]
  - standardizedBy:: [[eIDAS Regulation]]
  - implements:: [[Digital Signature]]
  - supports:: [[Compliance]]
  - bridgesTo:: [[Digital Identity]]
  - relatedTo:: [[eIDAS Regulation]]
  - relatedTo:: [[Electronic Signature]]
  - relatedTo:: [[Digital Signature]]
  - contrastsWith:: [[Biometric Authentication]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - generatedAt:: 2026-06-15T00:00:00Z
  - updated:: 2026-06-15
