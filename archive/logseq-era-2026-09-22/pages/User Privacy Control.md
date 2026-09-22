public:: true

# User Privacy Control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:29f4900c3793c803475f990c09d75403b17e56cde34a9ff690db05c97ea4ee24",
  "@type": "Page",
  "vc:slug": "user-privacy-control",
  "title": "User Privacy Control",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:privacy-mechanism",
      "vc:label": "Privacy Mechanism"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-4017"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "User Privacy Control"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:user-privacy-control",
  "@type": "Class",
  "label": "User Privacy Control",
  "definition": "User privacy controls are interface and systemic mechanisms that allow individuals to view, modify, restrict, or delete their personal data held by an AI or data-driven system. They operationalise data subject rights such as the right to be forgotten, consent withdrawal, and data portability mandated by regulations like GDPR. Effective privacy controls combine technical enforcement — such as deletion pipelines and audit trails — with accessible user interfaces.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    },
    {
      "@id": "urn:ngm:class:privacy-mechanism",
      "label": "Privacy Mechanism"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  },
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:right-to-be-forgotten", "label": "Right to Be Forgotten"},
      {"@id": "urn:ngm:class:data-minimisation", "label": "Data Minimisation"},
      {"@id": "urn:ngm:class:transparency", "label": "Transparency"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:consent-management", "label": "Consent Management"},
      {"@id": "urn:ngm:class:gdpr-compliance", "label": "GDPR Compliance"},
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:privacy-by-design", "label": "Privacy By Design"},
      {"@id": "urn:ngm:class:privacy-framework", "label": "Privacy Framework"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:data-protection", "label": "Data Protection"},
      {"@id": "urn:ngm:class:algorithmic-accountability", "label": "Algorithmic Accountability"},
      {"@id": "urn:ngm:class:privacy-impact-assessment", "label": "Privacy Impact Assessment"},
      {"@id": "urn:ngm:class:user-interface", "label": "User Interface"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:personal-data-store", "label": "Personal Data Store"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:user-privacy-control:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:29f4900c3793c803475f990c09d75403b17e56cde34a9ff690db05c97ea4ee24"
  },
  "vc:resolutions": [
    {
      "raw": "[[Privacy Mechanism]]",
      "resolved": "urn:visionflow:owl:class:privacy-mechanism",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A user privacy control component in the Artificial Intelligence domain that enables RightToBeForgotten.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:UserPrivacyControl
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Privacy Mechanism]]

- ### Content
  User privacy controls manifest as preference centres, consent dashboards, data-download portals, and account-deletion flows. They must be technically backed by deletion pipelines capable of propagating removal requests across all replicated and derived stores, including model fine-tuning checkpoints.

  Regulatory frameworks such as GDPR (Articles 17, 20) and the UK Data Protection Act impose enforceable timelines for honouring subject access and erasure requests. AI systems that incorporate personal data in training must additionally consider whether model unlearning techniques are required to fully honour such requests.

- ### Provenance
  - sources:: Generated from bridge validation
  - migration-date:: 2026-04-26T00:00:00Z
