public:: true

elevatedFrom:: [[mermaid]]
# Markdown Diagramming As Code Tool
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:090afcf2df196bbb9b54e9310d9e5689b7932847318a813bc5bc568c6f9e2b72",
  "@type": "Page",
  "vc:slug": "markdown-diagramming-as-code-tool",
  "title": "Markdown Diagramming As Code Tool",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "mermaid"
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
  "@id": "urn:ngm:class:markdown-diagramming-as-code-tool",
  "@type": "Class",
  "label": "Markdown Diagramming As Code Tool",
  "definition": "A JavaScript-based diagramming-as-code tool that renders flowcharts, sequence diagrams, Gantt charts, entity-relationship diagrams, and other diagram types from plain-text markup embedded in Markdown documents. Mermaid is widely adopted in developer documentation workflows, enabling version-controllable, maintainable diagrams without external tooling. It integrates natively with platforms such as GitHub, GitLab, Notion, and Logseq.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:software-engineering", "label": "Software Engineering"},
      {"@id": "urn:ngm:class:diagrams-as-code", "label": "Diagrams as Code"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:mermaid:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:090afcf2df196bbb9b54e9310d9e5689b7932847318a813bc5bc568c6f9e2b72"
  },
  "vc:resolutions": [],
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
  - A JavaScript-based diagramming-as-code tool that renders flowcharts, sequence diagrams, Gantt charts, entity-relationship diagrams, and other diagram types from plain-text markup embedded in Markdown. Mermaid enables version-controllable diagrams without external tooling, integrating natively with GitHub, GitLab, Notion, and Logseq.

- ### Semantic Classification
  - owl-class:: infrastructure:Mermaid
  - owl-role:: Concept

- ### Relationships
  - uses:: [[Software Engineering]], [[Diagrams as Code]]
  - enables:: [[Knowledge Graph]], [[Ontology]]
  - relatedTo:: [[Knowledge Representation]]

- ### Content
  - as and example
  - image of a horse

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
