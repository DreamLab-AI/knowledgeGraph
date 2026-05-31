public:: true

# EU HLEG AI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f383e2e43bf4dcb05e45052eb515078444ca4fb373b3a891d26ca9a52bf70997",
  "@type": "Page",
  "vc:slug": "eu-hleg-ai",
  "title": "EU HLEG AI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-ethics",
      "vc:label": "AI Ethics"
    },
    {
      "@id": "urn:visionflow:linked:ai-regulation",
      "vc:label": "AI Regulation"
    },
    {
      "@id": "urn:visionflow:linked:trustworthy-ai",
      "vc:label": "Trustworthy AI"
    },
    {
      "@id": "urn:visionflow:linked:ai-governance",
      "vc:label": "AI Governance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "EU HLEG AI"
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
  "@id": "urn:ngm:class:eu-hleg-ai",
  "@type": "Class",
  "label": "EU HLEG AI",
  "definition": "The European Commission High-Level Expert Group on Artificial Intelligence, an advisory body convened in 2018 that produced the Ethics Guidelines for Trustworthy AI and related policy recommendations.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance",
      "label": "AI Governance"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ai-ethics",
        "label": "AI Ethics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ai-regulation",
        "label": "AI Regulation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:eu-hleg-ai:ee703a02901b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f383e2e43bf4dcb05e45052eb515078444ca4fb373b3a891d26ca9a52bf70997"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Ethics]]",
      "resolved": "urn:visionflow:linked:ai-ethics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Regulation]]",
      "resolved": "urn:visionflow:linked:ai-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Trustworthy AI]]",
      "resolved": "urn:visionflow:linked:trustworthy-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Governance]]",
      "resolved": "urn:visionflow:linked:ai-governance",
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
  - The European Commission High-Level Expert Group on Artificial Intelligence, an advisory body convened in 2018 that produced the Ethics Guidelines for Trustworthy AI and related policy recommendations.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:EUHLEGAI
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[AI Governance]]
  - bridges-to:: [[Trustworthy AI]]
  - requires:: [[AI Ethics]]
  - enables:: [[AI Regulation]]

- ### Content
  - The High-Level Expert Group on AI brought together experts from industry, academia and civil society to advise the European Commission. Its 2019 Ethics Guidelines for Trustworthy AI set out seven requirements, including human oversight, technical robustness, privacy, transparency and accountability.
  - The group also produced an assessment list for self-evaluation and policy recommendations that informed later European Union work on AI regulation. Its output shaped much of the vocabulary used in subsequent European debates on trustworthy and human-centric AI.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
