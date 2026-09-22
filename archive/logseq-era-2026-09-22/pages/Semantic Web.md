public:: true

# Semantic Web

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:semantic-web",
  "@type": "Page",
  "title": "Semantic Web",
  "vc:slug": "semantic-web",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:semantic-web",
  "@type": "Class",
  "label": "Semantic Web",
  "definition": "The Semantic Web is an extension of the World Wide Web in which information is given well-defined, machine-readable meaning so that software agents can interpret, combine and reason over data published by different parties. It is realised through a stack of standards including RDF for data modelling, ontologies in OWL for shared vocabularies, and SPARQL for querying. The Semantic Web enables linked data, interoperability and automated inference across distributed sources.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:knowledge-representation",
      "label": "Knowledge Representation"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      },
      {
        "@id": "urn:ngm:class:owl",
        "label": "OWL"
      },
      {
        "@id": "urn:ngm:class:sparql",
        "label": "SPARQL"
      },
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:metadata",
        "label": "Metadata"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      },
      {
        "@id": "urn:ngm:class:semantic-interoperability",
        "label": "Semantic Interoperability"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:description-logic",
        "label": "Description Logic"
      },
      {
        "@id": "urn:ngm:class:vocabulary",
        "label": "Vocabulary"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ontology-engineering",
        "label": "Ontology Engineering"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:knowledge-base",
        "label": "Knowledge Base"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - The Semantic Web is an extension of the World Wide Web in which information is given well-defined, machine-readable meaning so that software agents can interpret, combine and reason over data published by different parties. It is realised through a stack of standards including RDF for data modelling, ontologies in OWL for shared vocabularies, and SPARQL for querying. The Semantic Web enables linked data, interoperability and automated inference across distributed sources.
  - Key related concepts: [[RDF]] [[OWL]] [[SPARQL]] [[Ontology]] [[Linked Data]]
- ### Overview
  - [[Semantic Web]] is situated within the artificial-intelligence domain and is defined as a subclass of [[Knowledge Representation]].
  - It connects to the wider knowledge graph through 20 typed relations spanning structural, functional and contrastive predicates.
  - As a established concept, it represents established knowledge with stable terminology and well-understood boundaries.
- ### Key aspects
  - Relationship to [[RDF]] situates this concept within its operational and conceptual context.
  - Relationship to [[OWL]] situates this concept within its operational and conceptual context.
  - Relationship to [[SPARQL]] situates this concept within its operational and conceptual context.
  - Relationship to [[Ontology]] situates this concept within its operational and conceptual context.
  - Relationship to [[Linked Data]] situates this concept within its operational and conceptual context.
- ### Mechanisms
  - The concept is realised through its constituent parts and the standards, methods and dependencies enumerated in its relations.
  - It both requires upstream capabilities and enables downstream capabilities, forming part of a directed chain of dependencies in the graph.
- ### Applications
  - Practical use of [[Semantic Web]] appears wherever its enabled and supported concepts are deployed.
  - It is referenced by existing classes in the graph, anchoring those edges to a defined, rooted node.
- ### Relationships
  - partOf:: [[Knowledge Representation]]
  - hasPart:: [[RDF]]
  - hasPart:: [[OWL]]
  - hasPart:: [[SPARQL]]
  - hasPart:: [[Linked Data]]
  - requires:: [[Ontology]]
  - requires:: [[Metadata]]
  - enables:: [[Interoperability]]
  - enables:: [[Data Integration]]
  - enables:: [[Semantic Interoperability]]
  - uses:: [[Description Logic]]
  - uses:: [[Vocabulary]]
  - supports:: [[Knowledge Graph]]
  - supports:: [[Reasoning]]
  - supports:: [[Inference]]
  - bridgesTo:: [[Knowledge Graph]]
  - bridgesTo:: [[Linked Data]]
  - dependsOn:: [[Ontology Engineering]]
  - relatedTo:: [[Knowledge Base]]
  - relatedTo:: [[Natural Language Processing]]
  - subClassOf:: [[Knowledge Representation]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
