public:: true

# Component
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:507d37c7d85bf59ec17c762240e19033af3b5016b42fed7d2d0297d4b667cf35",
  "@type": "Page",
  "vc:slug": "component",
  "title": "Component",
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
      "vc:value": "AI-0834"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Component"
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
  "@id": "urn:ngm:class:component",
  "@type": "Class",
  "label": "Component",
  "definition": "A discrete, modular unit within an AI system or infrastructure that provides a specific capability, can be developed and tested independently, and interacts with other components through defined interfaces. Components include hardware accelerators, software modules, model artefacts, data pipelines, and monitoring subsystems.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-infrastructure",
      "label": "AI Infrastructure"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:hardware-component", "label": "Hardware Component"},
      {"@id": "urn:ngm:class:ai-system-component", "label": "AI System Component"},
      {"@id": "urn:ngm:class:neural-network-component", "label": "Neural Network Component"},
      {"@id": "urn:ngm:class:neural-network-layer", "label": "Neural Network Layer"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-framework", "label": "AI Framework"},
      {"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"},
      {"@id": "urn:ngm:class:machine-learning-discipline-pipeline", "label": "Machine Learning Pipeline"},
      {"@id": "urn:ngm:class:machine-learning-discipline-framework", "label": "Machine Learning Framework"},
      {"@id": "urn:ngm:class:embedded-systems", "label": "Embedded Systems"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:ai-system-eu-definition", "label": "AI System (EU Definition)"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:component:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:507d37c7d85bf59ec17c762240e19033af3b5016b42fed7d2d0297d4b667cf35"
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
  - Component is a concept within the ai domain.
- ### Semantic Classification
  - owl-class:: artificial-intelligence:Component
  - owl-role:: Concept
  - belongs-to-domain:: [[Artificial Intelligence]]
- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
- ### Content
  Component — content pending enrichment.
- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
