public:: true

# Knowledge Based Authentication

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:knowledge-based-authentication",
  "@type": "Page",
  "title": "Knowledge Based Authentication",
  "vc:slug": "knowledge-based-authentication",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:knowledge-based-authentication",
  "@type": "Class",
  "label": "Knowledge Based Authentication",
  "definition": "Knowledge-Based Authentication (KBA) verifies identity by challenging a user to supply information presumed known only to them, such as a password, PIN, or answers to security questions. Static KBA uses pre-registered secrets, while dynamic KBA generates questions from third-party records at challenge time. Because the underlying secrets can be guessed, phished, or harvested through social engineering, KBA is increasingly supplemented or replaced by possession- and biometric-based factors.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:multi-factor-authentication",
      "label": "Multi-Factor Authentication"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:password-authentication",
        "label": "Password Authentication"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:biometric-authentication",
        "label": "Biometric Authentication"
      },
      {
        "@id": "urn:ngm:class:zero-trust",
        "label": "Zero Trust"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:password-authentication",
        "label": "Password Authentication"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:biometric-authentication",
        "label": "Biometric Authentication"
      },
      {
        "@id": "urn:ngm:class:social-engineering",
        "label": "Social Engineering"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:security",
        "label": "Security"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:multi-factor-authentication",
        "label": "Multi-Factor Authentication"
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
  - Knowledge-Based Authentication (KBA) verifies identity by challenging a user to supply information presumed known only to them, such as a password, PIN, or answers to security questions. Static KBA uses pre-registered secrets, while dynamic KBA generates questions from third-party records at challenge time. Because the underlying secrets can be guessed, phished, or harvested through social engineering, KBA is increasingly supplemented or replaced by possession- and biometric-based factors.
  - Core concepts: [[Multi-Factor Authentication]], [[Password Authentication]], [[Biometric Authentication]], [[Identity Verification]]
- ### Overview
  - **Knowledge Based Authentication** sits within the [[Multi-Factor Authentication]] area of the security domain.
  - It is referenced by existing classes in the knowledge graph and is materialised here as a defined, rooted node so those edges resolve.
- ### Key aspects
  - Establishes a precise, shared meaning for knowledge based authentication usable across coordinating components.
  - Integrates with neighbouring concepts through the relations enumerated below.
  - Maturity assessed as established based on established practice and literature.
- ### Mechanisms
  - Operates through the dependencies and components captured in its `requires`, `uses`, and `hasPart` relations.
  - Produces the capabilities captured in its `enables` and `supports` relations.
- ### Applications
  - Applied wherever security systems need the function described above.
  - Connects to broader workflows via the bridging relations listed below.
- ### Relationships
  - subClassOf:: [[Multi-Factor Authentication]]
  - hasPart:: [[Password Authentication]]
  - contrastsWith:: [[Biometric Authentication]]
  - contrastsWith:: [[Zero Trust]]
  - uses:: [[Identity Verification]]
  - enables:: [[Identity Verification]]
  - supports:: [[Access Control]]
  - requires:: [[Password Authentication]]
  - relatedTo:: [[Biometric Authentication]]
  - relatedTo:: [[Social Engineering]]
  - relatedTo:: [[Access Control]]
  - partOf:: [[Security]]
  - bridgesTo:: [[Multi-Factor Authentication]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
