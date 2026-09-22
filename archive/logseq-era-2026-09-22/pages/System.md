public:: true

# System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9107e4859d2c61e25c205494e12ca35a748777c0bef473443ab5975ef6b89927",
  "@type": "Page",
  "vc:slug": "system",
  "title": "System",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0831"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "System"
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
  "@id": "urn:ngm:class:system",
  "@type": "Class",
  "label": "System",
  "definition": "A bounded, purposeful arrangement of components—hardware, software, data, and processes—that interact to perform functions beyond those of any individual component. In AI contexts, a system integrates models, inference engines, data pipelines, and interfaces into deployable solutions that operate within broader sociotechnical environments.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:ai-system-component", "label": "AI System Component"},
      {"@id": "urn:ngm:class:control-system", "label": "Control System"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"},
      {"@id": "urn:ngm:class:autonomous-system", "label": "Autonomous System"},
      {"@id": "urn:ngm:class:distributed-system", "label": "Distributed System"},
      {"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"},
      {"@id": "urn:ngm:class:aisystem", "label": "AISystem"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-deployment", "label": "AI Deployment"},
      {"@id": "urn:ngm:class:embedded-ai-frameworks", "label": "Embedded AI Frameworks"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:inference", "label": "Inference"}
    ]
  },
  "quality": 0.8,
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
  "@id": "urn:visionflow:annotation:link-resolutions:system:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9107e4859d2c61e25c205494e12ca35a748777c0bef473443ab5975ef6b89927"
  },
  "vc:resolutions": [
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
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
  - System is a concept within the ai domain.
- ### Semantic Classification
  - owl-class:: artificial-intelligence:System
  - owl-role:: Concept
  - belongs-to-domain:: [[Artificial Intelligence]]
- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
- ### Content
  System — content pending enrichment.
- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
