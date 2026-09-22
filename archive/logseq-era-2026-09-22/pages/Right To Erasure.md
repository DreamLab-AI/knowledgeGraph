public:: true

# Right To Erasure

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:right-to-erasure",
  "@type": "Page",
  "title": "Right To Erasure",
  "vc:slug": "right-to-erasure",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:right-to-erasure",
  "@type": "Class",
  "label": "Right To Erasure",
  "definition": "The right to erasure, also known as the right to be forgotten, is a data-subject right under the UK GDPR and EU GDPR that allows individuals to require a controller to delete their personal data in defined circumstances. It applies where data is no longer necessary, consent is withdrawn, processing is unlawful, or the data subject objects without overriding legitimate grounds. The right is qualified by exemptions such as freedom of expression, legal obligations, and the public interest.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-subject-rights",
      "label": "Data Subject Rights"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      },
      {
        "@id": "urn:ngm:class:privacy-by-design",
        "label": "Privacy By Design"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:consent-management",
        "label": "Consent Management"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-subject-rights",
        "label": "Data Subject Rights"
      },
      {
        "@id": "urn:ngm:class:right-to-be-forgotten",
        "label": "Right to Be Forgotten"
      },
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:uk-gdpr",
        "label": "UK GDPR"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      },
      {
        "@id": "urn:ngm:class:uk-gdpr",
        "label": "UK GDPR"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:privacy-by-design",
        "label": "Privacy By Design"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consent-management",
        "label": "Consent Management"
      }
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
  - The right to erasure, also known as the right to be forgotten, is a data-subject right under the UK GDPR and EU GDPR that allows individuals to require a controller to delete their personal data in defined circumstances. It applies where data is no longer necessary, consent is withdrawn, processing is unlawful, or the data subject objects without overriding legitimate grounds. The right is qualified by exemptions such as freedom of expression, legal obligations, and the public interest.
  - Related concepts: [[UK GDPR]], [[GDPR]], [[Data Protection]], [[Data Subject Rights]], [[Consent Management]].
- ### Overview
  - The right to erasure operationalises the principle that personal data should not be retained longer than necessary for its purpose.
  - It is one of several [[Data Subject Rights]] codified in the [[UK GDPR]] and is closely associated with the [[Right to Be Forgotten]].
  - It sits in tension with immutable architectures such as a [[Distributed Ledger]], where deletion is technically difficult.
- ### Key aspects
  - Grounds for erasure: data no longer necessary, withdrawn consent, unlawful processing, or objection.
  - Exemptions: freedom of expression, legal obligation, public-interest archiving, and legal claims.
  - Downstream notification: informing recipients and, where data was made public, other controllers.
  - Interaction with retention schedules and [[Consent Management]] systems.
  - Verification of identity before acting on an erasure request.
- ### Applications
  - Implementing deletion workflows across primary stores, backups, and logs.
  - Search-engine de-indexing requests for outdated or irrelevant results.
  - Designing [[Privacy By Design]] systems with built-in deletion capability.
  - Compliance auditing under [[Data Protection]] regimes.
- ### Relationships
  - enables:: [[Data Protection]]
  - enables:: [[Privacy By Design]]
  - hasPart:: [[Consent Management]]
  - contrastsWith:: [[Distributed Ledger]]
  - relatedTo:: [[Data Subject Rights]]
  - relatedTo:: [[Right to Be Forgotten]]
  - relatedTo:: [[GDPR]]
  - partOf:: [[UK GDPR]]
  - dependsOn:: [[GDPR]]
  - dependsOn:: [[UK GDPR]]
  - supports:: [[Governance]]
  - supports:: [[Data Protection]]
  - bridgesTo:: [[Privacy By Design]]
  - requires:: [[Consent Management]]
- ### Provenance
  - updated:: 2026-06-15
  - generatedBy:: GapMaterialisation
  - quality:: 0.62
