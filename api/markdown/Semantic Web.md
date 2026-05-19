public:: true

# Semantic Web
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c3a572eee306fd6cf890ca9efafbaa02734fc22acc2e58f487060a41e3e65030",
  "@type": "Page",
  "vc:slug": "semantic-web",
  "title": "Semantic Web",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:information-extraction",
      "vc:label": "Information Extraction"
    },
    {
      "@id": "urn:visionflow:linked:linked-data",
      "vc:label": "Linked Data"
    },
    {
      "@id": "urn:visionflow:linked:ontology",
      "vc:label": "Ontology"
    },
    {
      "@id": "urn:visionflow:owl:class:knowledge-graph",
      "vc:label": "Knowledge Graph"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-9030"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Semantic Web"
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
  "@id": "urn:ngm:class:semantic-web",
  "@type": "Class",
  "label": "Semantic Web",
  "definition": "Semantic Web extends the World Wide Web with machine-readable metadata, ontologies, and linked data to enable intelligent information discovery, integration, and reasoning.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  },
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-research-area",
      "label": "AI Research Area"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:semantic-web:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c3a572eee306fd6cf890ca9efafbaa02734fc22acc2e58f487060a41e3e65030"
  },
  "vc:resolutions": [
    {
      "raw": "[[Information Extraction]]",
      "resolved": "urn:visionflow:linked:information-extraction",
      "kind": "StubLink"
    },
    {
      "raw": "[[Linked Data]]",
      "resolved": "urn:visionflow:linked:linked-data",
      "kind": "StubLink"
    },
    {
      "raw": "[[Ontology]]",
      "resolved": "urn:visionflow:linked:ontology",
      "kind": "StubLink"
    },
    {
      "raw": "[[Knowledge Graph]]",
      "resolved": "urn:visionflow:owl:class:knowledge-graph",
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
  - Semantic Web extends the World Wide Web with machine-readable metadata, ontologies, and linked data to enable intelligent information discovery, integration, and reasoning. Core technologies include RDF (Resource Description Framework), OWL (Web Ontology Language), SPARQL (query language), and knowledge graphs. AI techniques enhance semantic web systems through entity linking, relation extraction, ontology alignment, and reasoning engines. Applications include semantic search, intelligent assistants, data integration across heterogeneous sources, and automated knowledge discovery.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:SemanticWeb
  - owl-role:: concept

- ### Relationships
  - is-subclass-of:: ['owl:Thing']

- ### Content

  #### Key Characteristics
  - Represents knowledge using formal ontologies and schemas
  - Enables logical reasoning and inference over linked data
  - Supports interoperability across distributed data sources
  - Facilitates semantic search and question answering
  - Integrates symbolic AI with statistical learning methods

  ## Overview

  Semantic Web extends the World Wide Web with machine-readable metadata, ontologies, and linked data to enable intelligent information discovery, integration, and reasoning. Core technologies include RDF (Resource Description Framework), OWL (Web Ontology Language), SPARQL (query language), and knowledge graphs. AI techniques enhance semantic web systems through entity linking, relation extraction, ontology alignment, and reasoning engines. Applications include semantic search, intelligent assistants, data integration across heterogeneous sources, and automated knowledge discovery.

  #### Related Concepts
  - [[Knowledge Graph]]
  - [[Ontology]]
  - [[Linked Data]]
  - [[Information Extraction]]

  #### References
  - Berners-Lee, T. et al. (2001). The Semantic Web. Scientific American, 284(5), 34-43.
  - Hitzler, P. et al. (2009). Foundations of Semantic Web Technologies. Chapman & Hall/CRC.
  - Paulheim, H. (2017). Knowledge graph refinement: A survey of approaches and evaluation methods. Semantic Web, 8(3), 489-508.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
