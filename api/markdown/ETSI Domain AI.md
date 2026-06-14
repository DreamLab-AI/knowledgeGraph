public:: true

# ETSI Domain AI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:babbbc5e48be6ec89517066976a3c2d1e23b129b76c632478d3b7928a3f9ad6d",
  "@type": "Page",
  "vc:slug": "etsi-domain-ai",
  "title": "ETSI Domain AI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-service-classification",
      "vc:label": "AI Service Classification"
    },
    {
      "@id": "urn:visionflow:linked:etsi-domain-taxonomy",
      "vc:label": "ETSI Domain Taxonomy"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gs-mec",
      "vc:label": "ETSI GS MEC"
    },
    {
      "@id": "urn:visionflow:linked:intelligence-layer-categorization",
      "vc:label": "Intelligence Layer Categorization"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-research-area",
      "vc:label": "ComputationAndIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:etsi-domain-ai-creative-media",
      "vc:label": "ETSI Domain AI Creative Media"
    },
    {
      "@id": "urn:visionflow:owl:class:etsi-domain-ai-data-mgmt",
      "vc:label": "ETSI Domain AI Data Mgmt"
    },
    {
      "@id": "urn:visionflow:owl:class:etsi-domain-ai-governance",
      "vc:label": "ETSI Domain AI Governance"
    },
    {
      "@id": "urn:visionflow:owl:class:etsi-domain-ai-human-interface",
      "vc:label": "ETSI Domain AI Human Interface"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20330"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "ETSI Domain AI"
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
  "@id": "urn:ngm:class:etsi-domain-ai",
  "@type": "Class",
  "label": "ETSI Domain AI",
  "definition": "Domain marker concept for categorising metaverse components related to artificial intelligence, machine learning, and computational intelligence capabilities.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-research-area",
      "label": "AI Research Area"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:etsi-domain-ai-creative-media",
        "label": "ETSI Domain AI Creative Media"
      },
      {
        "@id": "urn:ngm:class:etsi-domain-ai-data-mgmt",
        "label": "ETSI Domain AI Data Mgmt"
      },
      {
        "@id": "urn:ngm:class:etsi-domain-ai-governance",
        "label": "ETSI Domain AI Governance"
      },
      {
        "@id": "urn:ngm:class:etsi-domain-ai-human-interface",
        "label": "ETSI Domain AI Human Interface"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ai-service-classification",
        "label": "AI Service Classification"
      },
      {
        "@id": "urn:ngm:class:intelligence-layer-categorization",
        "label": "Intelligence Layer Categorization"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:etsi-domain-taxonomy",
        "label": "ETSI Domain Taxonomy"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:etsi-domain-ai:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:babbbc5e48be6ec89517066976a3c2d1e23b129b76c632478d3b7928a3f9ad6d"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Service Classification]]",
      "resolved": "urn:visionflow:linked:ai-service-classification",
      "kind": "StubLink"
    },
    {
      "raw": "[[ETSI Domain Taxonomy]]",
      "resolved": "urn:visionflow:linked:etsi-domain-taxonomy",
      "kind": "StubLink"
    },
    {
      "raw": "[[ETSI GS MEC]]",
      "resolved": "urn:visionflow:linked:etsi-gs-mec",
      "kind": "StubLink"
    },
    {
      "raw": "[[Intelligence Layer Categorization]]",
      "resolved": "urn:visionflow:linked:intelligence-layer-categorization",
      "kind": "StubLink"
    },
    {
      "raw": "[[ApplicationLayer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ComputationAndIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-research-area",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ETSI Domain AI Creative Media]]",
      "resolved": "urn:visionflow:owl:class:etsi-domain-ai-creative-media",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ETSI Domain AI Data Mgmt]]",
      "resolved": "urn:visionflow:owl:class:etsi-domain-ai-data-mgmt",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ETSI Domain AI Governance]]",
      "resolved": "urn:visionflow:owl:class:etsi-domain-ai-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ETSI Domain AI Human Interface]]",
      "resolved": "urn:visionflow:owl:class:etsi-domain-ai-human-interface",
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
  - Domain marker concept for categorising metaverse components related to artificial intelligence, machine learning, and computational intelligence capabilities.

- ### Bridge-To
  - bridges-to:: [[Computer Vision]] (ai)

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ETSIDomainAI
  - owl-role:: Object
  - owl-inferred:: mv:VirtualObject
  - belongs-to-domain:: [[ComputationAndIntelligenceDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - has-part:: [[ETSI Domain AI Creative Media]], [[ETSI Domain AI Data Mgmt]], [[ETSI Domain AI Governance]], [[ETSI Domain AI Human Interface]]
  - is-part-of:: [[ETSI Domain Taxonomy]]
  - enables:: [[AI Service Classification]], [[Intelligence Layer Categorization]]
  - depends-on:: [[ComputationAndIntelligenceDomain]]

- ### Content
  ETSI Domain AI — content pending enrichment.

- ### Provenance
  - sources:: [[ETSI GS MEC]]
  - migration-date:: 2026-04-26T00:00:00Z
