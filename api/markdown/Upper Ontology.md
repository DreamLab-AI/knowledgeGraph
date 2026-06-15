public:: true

# Upper Ontology

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:upper-ontology",
  "@type": "Page",
  "title": "Upper Ontology",
  "vc:slug": "upper-ontology",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:upper-ontology",
  "@type": "Class",
  "label": "Upper Ontology",
  "definition": "An upper ontology, also called a foundational or top-level ontology, defines very general categories such as object, process, quality and relation that are common across all subject domains. It provides a shared semantic backbone onto which domain ontologies can be aligned, improving interoperability, reuse and reasoning. By committing to clear distinctions such as endurants versus perdurants, it grounds more specific vocabularies in a consistent conceptual framework.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ontology",
      "label": "Ontology"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:ontology-engineering",
        "label": "Ontology Engineering"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:domain-ontology",
        "label": "Domain Ontology"
      },
      {
        "@id": "urn:ngm:class:semantic-web",
        "label": "Semantic Web"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      },
      {
        "@id": "urn:ngm:class:owl-class-hierarchy",
        "label": "OWL Class Hierarchy"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:owl",
        "label": "OWL"
      },
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      },
      {
        "@id": "urn:ngm:class:data-interoperability",
        "label": "Data Interoperability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
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
  - An [[Upper Ontology]] sits above any [[Domain Ontology]], providing the most general categories of an [[Ontology]] so that domain models share a common [[Knowledge Representation]] backbone and support [[Reasoning]].
- ### Overview
  - An upper ontology, also called a foundational or top-level ontology, defines very general concepts such as object, process, quality and relation that are common across all domains.
  - It provides a shared semantic backbone onto which domain ontologies can be aligned, improving interoperability and reuse.
  - Well-known examples include foundational frameworks for entities, occurrents and dependent qualities used in scientific and industrial ontologies.
- ### Key aspects
  - Domain-independent top-level categories and relations.
  - Clear ontological commitments about endurants and perdurants.
  - Alignment hooks for binding domain ontologies.
  - Formal axiomatisation enabling consistency checking.
- ### Applications
  - Aligning biomedical and engineering domain ontologies under one root.
  - Improving cross-dataset interoperability in [[Knowledge Graph]] integration.
  - Grounding enterprise vocabularies for [[Data Integration]].
- ### Relationships
  - partOf:: [[Ontology]]
  - partOf:: [[Ontology Engineering]]
  - bridgesTo:: [[Domain Ontology]]
  - bridgesTo:: [[Semantic Web]]
  - relatedTo:: [[Knowledge Representation]]
  - relatedTo:: [[OWL Class Hierarchy]]
  - relatedTo:: [[Knowledge Graph]]
  - uses:: [[OWL]]
  - uses:: [[RDF]]
  - enables:: [[Data Integration]]
  - enables:: [[Data Interoperability]]
  - supports:: [[Reasoning]]
- ### Provenance
  - updated:: 2026-06-15
