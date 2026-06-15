public:: true

# Closed World Assumption

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:closed-world-assumption",
  "@type": "Page",
  "title": "Closed World Assumption",
  "vc:slug": "closed-world-assumption",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:closed-world-assumption",
  "@type": "Class",
  "label": "Closed World Assumption",
  "definition": "The Closed World Assumption (CWA) is the presumption that any statement not known to be true is false, treating the knowledge base as a complete description of the world. It is foundational to database query semantics, logic programming, and negation as failure, where the absence of a fact licenses inferring its negation. CWA simplifies reasoning over finite, curated domains but breaks down where information is incomplete.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:knowledge-representation",
      "label": "Knowledge Representation"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:semantic-web",
        "label": "Semantic Web"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:inference-engine",
        "label": "Inference Engine"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      },
      {
        "@id": "urn:ngm:class:inference-engine",
        "label": "Inference Engine"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:semantic-web",
        "label": "Semantic Web"
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
  - The Closed World Assumption (CWA) is the presumption that any statement not known to be true is false, treating the knowledge base as a complete description of the world. It is foundational to database query semantics, logic programming, and negation as failure, where the absence of a fact licenses inferring its negation. CWA simplifies reasoning over finite, curated domains but breaks down where information is incomplete.
  - Core concepts: [[Knowledge Representation]], [[Reasoning]], [[Ontology]], [[Inference Engine]]
- ### Overview
  - **Closed World Assumption** sits within the [[Knowledge Representation]] area of the artificial intelligence domain.
  - It is referenced by existing classes in the knowledge graph and is materialised here as a defined, rooted node so those edges resolve.
- ### Key aspects
  - Establishes a precise, shared meaning for closed world assumption usable across coordinating components.
  - Integrates with neighbouring concepts through the relations enumerated below.
  - Maturity assessed as established based on established practice and literature.
- ### Mechanisms
  - Operates through the dependencies and components captured in its `requires`, `uses`, and `hasPart` relations.
  - Produces the capabilities captured in its `enables` and `supports` relations.
- ### Applications
  - Applied wherever artificial intelligence systems need the function described above.
  - Connects to broader workflows via the bridging relations listed below.
- ### Relationships
  - subClassOf:: [[Knowledge Representation]]
  - implements:: [[Reasoning]]
  - contrastsWith:: [[Semantic Web]]
  - uses:: [[Inference Engine]]
  - enables:: [[Reasoning]]
  - supports:: [[Knowledge Representation]]
  - requires:: [[Knowledge Representation]]
  - relatedTo:: [[Ontology]]
  - relatedTo:: [[Reasoning]]
  - relatedTo:: [[Inference Engine]]
  - partOf:: [[Artificial Intelligence]]
  - bridgesTo:: [[Semantic Web]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
