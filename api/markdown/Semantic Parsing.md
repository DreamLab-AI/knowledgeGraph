public:: true

# Semantic Parsing

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:semantic-parsing",
  "@type": "Page",
  "title": "Semantic Parsing",
  "vc:slug": "semantic-parsing",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:semantic-parsing",
  "@type": "Class",
  "label": "Semantic Parsing",
  "definition": "Semantic parsing is the task of mapping natural-language utterances onto structured, machine-interpretable meaning representations such as logical forms, executable queries or programs. It converts ambiguous human language into precise formalisms that can be reasoned over or executed against a database or knowledge graph. Applications include question answering, text-to-SQL and instruction-to-code translation.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:natural-language-processing",
      "label": "Natural Language Processing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:natural-language-understanding",
        "label": "Natural Language Understanding"
      },
      {
        "@id": "urn:ngm:class:labelled-data",
        "label": "Labelled Data"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sequence-to-sequence",
        "label": "Sequence-to-Sequence"
      },
      {
        "@id": "urn:ngm:class:transformer-model",
        "label": "Transformer Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:question-answering",
        "label": "Question Answering"
      },
      {
        "@id": "urn:ngm:class:code-generation",
        "label": "Code Generation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:intent-recognition",
        "label": "Intent Recognition"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:sequence-labelling",
        "label": "Sequence Labelling"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:logical-form",
        "label": "Logical Form"
      },
      {
        "@id": "urn:ngm:class:information-extraction",
        "label": "Information Extraction"
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
  - [[Semantic Parsing]] translates natural language into executable [[Logical Form]]s, underpinning [[Question Answering]] and [[Code Generation]] within [[Natural Language Processing]].
- ### Overview
  - Semantic parsers output formal representations such as lambda-calculus expressions, SQL queries, SPARQL or domain-specific programs.
  - The structured target enables execution against a database or knowledge base, giving a verifiable answer rather than a free-text guess.
  - Training may use logical-form supervision or weak supervision from answer correctness (execution-guided learning).
  - Compositionality is central: parsers must generalise to novel combinations of known predicates and entities.
- ### Mechanisms
  - Grammar-constrained decoding that guarantees syntactically valid output.
  - Sequence-to-sequence neural models with copy mechanisms for entity names.
  - Execution-guided and weakly supervised training from denotations.
  - Schema linking that aligns mentions to database columns or ontology terms.
  - Intermediate representations bridging surface text and final logical forms.
- ### Applications
  - Natural-language interfaces to databases (text-to-SQL).
  - Knowledge-graph question answering producing SPARQL queries.
  - Voice-assistant command interpretation into API calls.
  - Instruction-to-code and program-synthesis assistants.
- ### Relationships
  - requires:: [[Natural Language Understanding]]
  - requires:: [[Labelled Data]]
  - uses:: [[Sequence-to-Sequence]]
  - uses:: [[Transformer Model]]
  - enables:: [[Question Answering]]
  - enables:: [[Code Generation]]
  - partOf:: [[Natural Language Processing]]
  - supports:: [[Intent Recognition]]
  - dependsOn:: [[Knowledge Graph]]
  - contrastsWith:: [[Sequence Labelling]]
  - relatedTo:: [[Logical Form]]
  - relatedTo:: [[Information Extraction]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
