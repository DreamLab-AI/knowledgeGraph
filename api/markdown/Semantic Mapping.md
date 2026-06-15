public:: true

# Semantic Mapping

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:semantic-mapping",
  "@type": "Page",
  "title": "Semantic Mapping",
  "vc:slug": "semantic-mapping",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:semantic-mapping",
  "@type": "Class",
  "label": "Semantic Mapping",
  "definition": "Semantic mapping is the process of establishing correspondences between concepts, terms, or schema elements across different knowledge representations so that their meanings align. It links source vocabularies to target ontologies, enabling data expressed under one model to be interpreted consistently under another. Semantic mapping underpins interoperability across heterogeneous knowledge graphs, databases, and linked-data sources.",
  "domain": "ai",
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
        "@id": "urn:ngm:class:entity-resolution",
        "label": "Entity Resolution"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
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
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:semantic-web",
        "label": "Semantic Web"
      },
      {
        "@id": "urn:ngm:class:vector-embedding",
        "label": "Vector Embedding"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:entity-resolution",
        "label": "Entity Resolution"
      },
      {
        "@id": "urn:ngm:class:knowledge-base",
        "label": "Knowledge Base"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
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
  - [[Semantic Mapping]] aligns concepts and schema elements across different [[Knowledge Representation]] systems so meanings correspond.
  - It connects source vocabularies to target structures, allowing data to move between models without loss of meaning.
  - Closely tied to [[Ontology]], [[RDF]], and the [[Semantic Web]], it is foundational to [[Data Integration]].
- ### Overview
  - Semantic mapping addresses the heterogeneity problem: distinct systems describe the same real-world things with different terms, granularities, and structures.
  - A mapping declares how an element in one schema relates to elements in another, using relations such as equivalence, subsumption, or partial overlap.
  - Mappings may be one-to-one, one-to-many, or many-to-many, and can carry transformation logic for value conversion.
  - The discipline spans manual curation, rule-based matching, and machine-learning approaches that exploit lexical and structural similarity.
- ### Mechanisms
  - Lexical matching compares labels, synonyms, and definitions to propose candidate correspondences.
  - Structural matching exploits the surrounding graph topology, hierarchy, and property usage to confirm alignments.
  - Embedding-based matching represents concepts as vectors so that semantically near concepts cluster together.
  - Logical validation checks proposed mappings for consistency against the axioms of the participating ontologies.
- ### Key aspects
  - Provenance: each mapping should record who created it, by what method, and with what confidence.
  - Confidence scoring lets downstream consumers filter low-certainty correspondences.
  - Bidirectionality: mappings may be reversible or directional depending on the transformation involved.
  - Maintenance: as source and target evolve, mappings must be re-validated to avoid drift.
- ### Applications
  - Integrating enterprise data sources into a unified [[Knowledge Graph]].
  - Aligning domain ontologies to a shared upper ontology for cross-domain queries.
  - Migrating legacy schemas to modern [[Linked Data]] representations.
  - Powering federated search across distributed [[Knowledge Base]] systems.
- ### Relationships
  - partOf:: [[Knowledge Representation]]
  - hasPart:: [[Entity Resolution]]
  - requires:: [[Ontology]]
  - requires:: [[RDF]]
  - enables:: [[Data Integration]]
  - enables:: [[Knowledge Graph]]
  - uses:: [[Semantic Web]]
  - uses:: [[Vector Embedding]]
  - supports:: [[Linked Data]]
  - relatedTo:: [[Knowledge Base]]
  - bridgesTo:: [[Data Integration]]
  - dependsOn:: [[Knowledge Representation]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
