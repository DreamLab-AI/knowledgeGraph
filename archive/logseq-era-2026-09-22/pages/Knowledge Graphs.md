public:: true

# Knowledge Graphs
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b93ee167b182e4b1a4e6a340599c8ddd0bf3e9169cd3e71267e1181d4c66c14c",
  "@type": "Page",
  "vc:slug": "knowledge-graphs",
  "title": "Knowledge Graphs",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:knowledge-representation",
      "vc:label": "Knowledge Representation"
    },
    {
      "@id": "urn:visionflow:linked:rdf",
      "vc:label": "RDF"
    },
    {
      "@id": "urn:visionflow:linked:inference",
      "vc:label": "Inference"
    },
    {
      "@id": "urn:visionflow:linked:semantic-web",
      "vc:label": "Semantic Web"
    },
    {
      "@id": "urn:visionflow:linked:graph-database",
      "vc:label": "Graph Database"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Knowledge Graphs"
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
  "@id": "urn:ngm:class:knowledge-graphs",
  "@type": "Class",
  "label": "Knowledge Graphs",
  "definition": "Structured representations of knowledge as entities and the typed relationships between them, expressed as a graph of nodes and labelled edges grounded in an ontology, enabling querying, reasoning, and inference over heterogeneous data.",
  "domain": "data",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:knowledge-representation",
    "label": "Knowledge Representation"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      },
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      },
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:graph-database",
        "label": "Graph Database"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      },
      {
        "@id": "urn:ngm:class:question-answering",
        "label": "Question Answering"
      },
      {
        "@id": "urn:ngm:class:semantic-search",
        "label": "Semantic Search"
      },
      {
        "@id": "urn:ngm:class:recommendation-systems",
        "label": "Recommendation Systems"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:entity",
        "label": "Entity"
      },
      {
        "@id": "urn:ngm:class:relation",
        "label": "Relation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sparql",
        "label": "SPARQL"
      },
      {
        "@id": "urn:ngm:class:owl",
        "label": "OWL"
      },
      {
        "@id": "urn:ngm:class:property-graph",
        "label": "Property Graph"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      },
      {
        "@id": "urn:ngm:class:entity-linking",
        "label": "Entity Linking"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:schema",
        "label": "Schema"
      },
      {
        "@id": "urn:ngm:class:named-entity-recognition",
        "label": "Named Entity Recognition"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:relational-database",
        "label": "Relational Database"
      },
      {
        "@id": "urn:ngm:class:document-store",
        "label": "Document Store"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:semantic-web-linked-data-standard",
        "label": "Semantic Web"
      },
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:knowledge-base",
        "label": "Knowledge Base"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-embedding",
        "label": "Knowledge Graph Embedding"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:semantic-graph",
      "label": "Semantic Graph"
    },
    {
      "@id": "urn:ngm:class:knowledge-network",
      "label": "Knowledge Network"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:knowledge-graphs:5223e4eab135",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b93ee167b182e4b1a4e6a340599c8ddd0bf3e9169cd3e71267e1181d4c66c14c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Knowledge Representation]]",
      "resolved": "urn:visionflow:linked:knowledge-representation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RDF]]",
      "resolved": "urn:visionflow:linked:rdf",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Inference]]",
      "resolved": "urn:visionflow:linked:inference",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Semantic Web Linked Data Standard]]",
      "resolved": "urn:visionflow:linked:semantic-web",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Graph Database]]",
      "resolved": "urn:visionflow:linked:graph-database",
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
  - Structured representations of knowledge as entities and the relationships between them, typically expressed as a graph of nodes and labelled edges to support querying and inference.

- ### Semantic Classification
  - owl-class:: general:KnowledgeGraphs
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Knowledge Representation]]
  - bridges-to:: [[Semantic Web Linked Data Standard]], [[Graph Database]]
  - requires:: [[Knowledge Representation]], [[RDF]]
  - enables:: [[Inference]]

- ### Content
  - Knowledge graphs model a domain as interconnected entities linked by typed relationships, often grounded in an ontology that defines the permitted classes and properties. They allow heterogeneous data to be integrated and queried in terms of meaningful connections rather than isolated records.
  - Built on standards such as RDF and stored in graph databases or triplestores, knowledge graphs support reasoning, question answering and search, and they are used in semantic web applications, enterprise data integration and recommendation systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
