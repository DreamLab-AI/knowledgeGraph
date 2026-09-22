public:: true

# Relation Extraction
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:relation-extraction",
  "@type": "Page",
  "title": "Relation Extraction",
  "vc:slug": "relation-extraction",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:relation-extraction",
  "@type": "Class",
  "label": "Relation Extraction",
  "definition": "Relation extraction is the natural-language-processing task of identifying semantic relationships between entities mentioned in text and classifying them into predefined or open relation types. It typically operates on the output of named-entity recognition, determining whether and how two entities are connected, for example employer-of, located-in or part-of. Relation extraction is foundational to knowledge-graph construction, supplying the typed edges that link extracted entities into structured assertions.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:information-extraction",
      "label": "Information Extraction"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:named-entity-recognition",
        "label": "Named Entity Recognition"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:text-classification",
        "label": "Text Classification"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-graph-construction",
        "label": "Knowledge Graph Construction"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:information-extraction",
        "label": "Information Extraction"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:slot-filling",
        "label": "Slot Filling"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:pattern-recognition",
        "label": "Pattern Recognition"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:feature-extraction",
        "label": "Feature Extraction"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Relation Extraction]] is the [[Information Extraction]] task that classifies semantic links between entities found by [[Named Entity Recognition]], producing the typed edges of a [[Knowledge Graph]].
- ### Overview
  - Where named-entity recognition finds the nouns of interest, relation extraction discovers how those entities relate, transforming free text into structured triples of the form subject-predicate-object. This conversion is what lets unstructured documents feed structured analytics and reasoning systems.
  - Approaches range from rule and pattern matching, through supervised classifiers over sentence representations, to large-language-model prompting that extracts open relations without a fixed schema.
- ### Key aspects
  - Closed vs open: closed extraction targets a fixed relation inventory; open extraction discovers arbitrary predicates.
  - Distant supervision: existing knowledge bases provide noisy labels by aligning known facts to mentioning sentences.
  - Cross-sentence reasoning: many relations span multiple sentences or require coreference resolution.
  - Evaluation: precision, recall and F1 against annotated relation corpora.
- ### Mechanisms
  - Candidate entity pairs are formed and encoded with their surrounding context.
  - A classifier assigns a relation label or a no-relation outcome to each pair.
  - Extracted triples are normalised and linked into a knowledge graph.
- ### Applications
  - Knowledge-base population, biomedical literature mining, financial event extraction, search enrichment and question answering.
- ### Relationships
  - requires:: [[Named Entity Recognition]]
  - requires:: [[Natural Language Processing]]
  - hasPart:: [[Text Classification]]
  - enables:: [[Knowledge Graph Construction]]
  - enables:: [[Knowledge Graph]]
  - partOf:: [[Information Extraction]]
  - uses:: [[Deep Learning]]
  - uses:: [[Large Language Model]]
  - uses:: [[Supervised Learning]]
  - contrastsWith:: [[Slot Filling]]
  - supports:: [[Ontology]]
  - relatedTo:: [[Pattern Recognition]]
  - dependsOn:: [[Feature Extraction]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - maturity:: established
