public:: true

# Institutional Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8dbb0c4647934f713c479ac0e2bfa46c32af0fb18c08b8e333b70b5a5d1d440d",
  "@type": "Page",
  "vc:slug": "institutional-layer",
  "title": "Institutional Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:governance-layer",
      "vc:label": "Governance Layer"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-layer",
      "vc:label": "Regulatory Layer"
    },
    {
      "@id": "urn:visionflow:linked:organisational-layer",
      "vc:label": "Organisational Layer"
    },
    {
      "@id": "urn:visionflow:linked:social-layer",
      "vc:label": "Social Layer"
    },
    {
      "@id": "urn:visionflow:linked:institutional-economics",
      "vc:label": "Institutional Economics"
    },
    {
      "@id": "urn:visionflow:linked:principal-agent-problem",
      "vc:label": "Principal-Agent Problem"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Institutional Layer"
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
  "@id": "urn:ngm:class:institutional-layer",
  "@type": "Class",
  "label": "Institutional Layer",
  "definition": "The Institutional Layer is the cross-cutting stratum that represents the organisations, roles, and durable arrangements through which a system operates in the wider world. It sits above the Governance Layer, embodying its decisions in standing bodies, and depends on regulatory and compliance structures. It contains organisational entities, mandates, and the relationships between them.",
  "domain": "finance",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Infra Legal And Regulatory"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:governance-layer",
        "label": "Governance Layer"
      },
      {
        "@id": "urn:ngm:class:regulatory-layer",
        "label": "Regulatory Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:organisational-layer",
        "label": "Organisational Layer"
      },
      {
        "@id": "urn:ngm:class:social-layer",
        "label": "Social Layer"
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
  "@id": "urn:visionflow:annotation:link-resolutions:institutional-layer:b940f0bad79c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8dbb0c4647934f713c479ac0e2bfa46c32af0fb18c08b8e333b70b5a5d1d440d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Governance Layer]]",
      "resolved": "urn:visionflow:linked:governance-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Layer]]",
      "resolved": "urn:visionflow:linked:regulatory-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Organisational Layer]]",
      "resolved": "urn:visionflow:linked:organisational-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Social Layer]]",
      "resolved": "urn:visionflow:linked:social-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Institutional Economics]]",
      "resolved": "urn:visionflow:linked:institutional-economics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Principal-Agent Problem]]",
      "resolved": "urn:visionflow:linked:principal-agent-problem",
      "kind": "StubLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - The Institutional Layer is the cross-cutting stratum that represents the organisations, roles, and durable arrangements through which a system operates in the wider world. It sits above the Governance Layer, embodying its decisions in standing bodies, and depends on regulatory and compliance structures. It contains organisational entities, mandates, and the relationships between them.

- ### Semantic Classification
  - owl-class:: inst:InstitutionalLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Institutional Economics]], [[Principal-Agent Problem]]
  - requires:: [[Governance Layer]], [[Regulatory Layer]]
  - enables:: [[Organisational Layer]], [[Social Layer]]

- ### Content
  - The Institutional Layer captures the standing organisations and formal arrangements that give a system continuity beyond any single decision. Typical members include legal entities, mandated roles, treasuries, and inter-organisational agreements that persist over time. It represents who holds responsibility in durable form.
  - It requires the Governance Layer for the decisions that create and empower institutions, and the Regulatory Layer for the legal recognition they depend on. It enables the Organisational and Social Layers, where day-to-day structure and community norms take shape.
  - The layer bridges to institutional economics and the principal-agent problem, which explain how incentives and delegation shape institutional behaviour. Accountability defined here determines whether commitments made above are honoured in practice.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
