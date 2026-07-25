public:: true

# Ontology Alignment

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:ontology-alignment",
  "@type": "Page",
  "title": "Ontology Alignment",
  "vc:slug": "ontology-alignment",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ontology-alignment",
  "@type": "Class",
  "label": "Ontology Alignment",
  "definition": "Ontology alignment is the process of determining correspondences between the concepts, properties and relations of two or more separately developed ontologies. The output, an alignment or set of mappings, allows systems using different ontologies to interoperate by translating or relating their terms. Alignment is a core enabler of semantic interoperability across heterogeneous knowledge sources and is closely related to schema matching and entity resolution.",
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
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:mapping",
        "label": "Mapping"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:semantic-interoperability",
        "label": "Semantic Interoperability"
      },
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:entity-resolution",
        "label": "Entity Resolution"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:semantic-web",
        "label": "Semantic Web"
      },
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      },
      {
        "@id": "urn:ngm:class:owl",
        "label": "OWL"
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
  - Ontology alignment is the process of determining correspondences between the concepts, properties and relations of two or more separately developed ontologies. The output, an alignment or set of mappings, allows systems using different ontologies to interoperate by translating or relating their terms. Alignment is a core enabler of semantic interoperability across heterogeneous knowledge sources and is closely related to schema matching and entity resolution.
  - Related core concepts: [[Ontology]] [[Semantic Interoperability]] [[Knowledge Graph]] [[Reasoning]] [[Entity Resolution]]
- ### Overview
  - When organisations independently model the same domain, their ontologies diverge in vocabulary, granularity and structure even when they describe the same things. Ontology alignment computes mappings, such as equivalence, subsumption or relatedness, between these models, often combining lexical similarity, structural analysis and logical reasoning. The resulting alignments allow query rewriting, data integration and reasoning across previously siloed knowledge bases.
- ### Mechanisms
  - Lexical matching compares labels, synonyms and definitions of terms.
  - Structural matching exploits the graph topology around concepts.
  - Logical reasoning validates and infers mappings using OWL semantics.
  - Mappings carry relation types such as equivalence and subsumption.
  - Confidence scores and human review refine candidate correspondences.
- ### Applications
  - Integrating data described by different domain ontologies.
  - Federated querying across heterogeneous knowledge graphs.
  - Merging vocabularies in linked-data and semantic-web systems.
  - Mapping enterprise schemas to shared reference ontologies.
- ### Relationships
  - subClassOf:: [[Ontology]]
  - partOf:: [[Ontology]]
  - hasPart:: [[Mapping]]
  - requires:: [[Ontology]]
  - requires:: [[Reasoning]]
  - enables:: [[Semantic Interoperability]]
  - enables:: [[Data Integration]]
  - uses:: [[Reasoning]]
  - supports:: [[Interoperability]]
  - supports:: [[Knowledge Graph]]
  - contrastsWith:: [[Entity Resolution]]
  - relatedTo:: [[Semantic Web]]
  - relatedTo:: [[Linked Data]]
  - relatedTo:: [[OWL]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
