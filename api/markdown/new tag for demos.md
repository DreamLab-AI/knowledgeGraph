public:: true

# new tag for demos
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:743177ce37d184677f27ae163795d580f2836df5325b1df269656e505e0a9eb1",
  "@type": "Page",
  "vc:slug": "new-tag-for-demos",
  "title": "new tag for demos",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:open-ai",
      "vc:label": "OpenAI"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "new tag for demos"
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
  "@id": "urn:ngm:class:new-tag-for-demos",
  "@type": "Class",
  "label": "new tag for demos",
  "definition": "A placeholder tagging concept used within the knowledge graph to label pages or artefacts intended for demonstration purposes. It serves as a lightweight organisational marker allowing authors to filter, surface, or present selected graph nodes during product demonstrations or stakeholder presentations without altering the underlying ontological structure.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "quality": 0.7,
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:generative-ai", "label": "Generative AI"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:infra-software-engineering", "label": "Software Engineering"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:new-tag-for-demos:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:743177ce37d184677f27ae163795d580f2836df5325b1df269656e505e0a9eb1"
  },
  "vc:resolutions": [
    {
      "raw": "[[OpenAI]]",
      "resolved": "urn:visionflow:owl:class:open-ai",
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
  - A lightweight organisational tag used within the knowledge graph to mark pages or artefacts that should be included when preparing demonstration content for stakeholders. Pages carrying this tag can be surfaced selectively during product demos without modifying the underlying ontological hierarchy. The concept reflects common knowledge-management practice of maintaining curated views over a larger graph.

- ### Semantic Classification
  - owl-class:: infrastructure:NewTagForDemos
  - owl-role:: Concept

- ### Relationships
  - Related to: Knowledge Graph, Generative AI, Large Language Models
  - Uses: Software Engineering

- ### Content
  - [[OpenAI]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
