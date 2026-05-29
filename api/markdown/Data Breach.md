public:: true

# Data Breach
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bc5b3977c4e3ee4d02a584046914b118795e23f93739b899984b783a680ddcd5",
  "@type": "Page",
  "vc:slug": "data-breach",
  "title": "Data Breach",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:risk",
      "vc:label": "Risk"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0863"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Breach"
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
  "@id": "urn:ngm:class:data-breach",
  "@type": "Class",
  "label": "Data Breach",
  "definition": "A Data Breach is a security incident in which sensitive, protected, or confidential data is accessed, disclosed, copied, transmitted, or destroyed by an unauthorised actor, whether through external attack, insider threat, or accidental exposure. In AI contexts, data breaches can compromise training datasets, model weights, inference outputs, or user interaction logs, triggering GDPR notification obligations (within 72 hours to supervisory authorities), regulatory penalties, and reputational damage. AI systems increase both the attack surface (by aggregating and processing large personal-data collections) and the potential for novel breach vectors such as model-inversion attacks and membership-inference attacks that reconstruct or identify individuals from model outputs without direct database access.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    },
    {
      "@id": "urn:ngm:class:risk",
      "label": "Risk"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:security", "label": "Security"},
      {"@id": "urn:ngm:class:vulnerability", "label": "Vulnerability"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:privacy", "label": "Privacy"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:membership-inference", "label": "Membership Inference"},
      {"@id": "urn:ngm:class:model-inversion", "label": "Model Inversion"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"},
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"},
      {"@id": "urn:ngm:class:data-protection", "label": "Data Protection"},
      {"@id": "urn:ngm:class:audit-trail", "label": "Audit Trail"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"},
      {"@id": "urn:ngm:class:privacy-preserving-data-mining", "label": "Privacy Preserving Data Mining"},
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"}
    ]
  },
  "qualityScore": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:data-breach:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:bc5b3977c4e3ee4d02a584046914b118795e23f93739b899984b783a680ddcd5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Risk]]",
      "resolved": "urn:visionflow:owl:class:risk",
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
  - Data Breach is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:DataBreach
  - owl-role:: Concept
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - is-subclass-of:: [[Risk]]

- ### Content
  Data Breach — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
