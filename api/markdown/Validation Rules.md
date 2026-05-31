public:: true

# Validation Rules
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5629502975e77529c195b938a46a18e5aff309f0aaafd6754d36eee710898697",
  "@type": "Page",
  "vc:slug": "validation-rules",
  "title": "Validation Rules",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:constraint",
      "vc:label": "Constraint"
    },
    {
      "@id": "urn:visionflow:linked:data-management",
      "vc:label": "Data Management"
    },
    {
      "@id": "urn:visionflow:linked:rule-based-systems",
      "vc:label": "Rule-Based Systems"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Validation Rules"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:validation-rules",
  "@type": "Class",
  "label": "Validation Rules",
  "definition": "Defined constraints that data or input must satisfy to be accepted, used to enforce correctness, consistency and integrity before processing or storage.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:constraint",
        "label": "Constraint"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:validation-rules:2e6bfb6a003e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5629502975e77529c195b938a46a18e5aff309f0aaafd6754d36eee710898697"
  },
  "vc:resolutions": [
    {
      "raw": "[[Constraint]]",
      "resolved": "urn:visionflow:linked:constraint",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Management]]",
      "resolved": "urn:visionflow:linked:data-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rule-Based Systems]]",
      "resolved": "urn:visionflow:linked:rule-based-systems",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Defined constraints that data or input must satisfy to be accepted, used to enforce correctness, consistency and integrity before processing or storage.

- ### Semantic Classification
  - owl-class:: general:ValidationRules
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Data Management]]
  - bridges-to:: [[Rule-Based Systems]]
  - requires:: [[Constraint]]
  - enables:: [[Data Management]]

- ### Content
  - Validation rules specify the conditions data must meet, such as type, range, format, uniqueness or cross-field consistency, and reject or flag input that fails them. They are applied at user interfaces, application logic and database layers to keep data trustworthy.
  - Expressed declaratively or as procedural checks, validation rules reduce errors and security risks from malformed input, and they form part of broader data quality and business rule management practices.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
