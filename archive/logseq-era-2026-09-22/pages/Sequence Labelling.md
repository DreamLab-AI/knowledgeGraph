public:: true

# Sequence Labelling

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:sequence-labelling",
  "@type": "Page",
  "title": "Sequence Labelling",
  "vc:slug": "sequence-labelling",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sequence-labelling",
  "@type": "Class",
  "label": "Sequence Labelling",
  "definition": "Sequence labelling is a class of natural-language-processing tasks in which each element of an input sequence is assigned a categorical label from a fixed tag set. It encompasses tasks such as named-entity recognition, part-of-speech tagging and slot filling, where contextual dependencies between adjacent tokens matter. Classical approaches use hidden Markov models and conditional random fields, while modern systems use neural encoders.",
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
        "@id": "urn:ngm:class:labelled-data",
        "label": "Labelled Data"
      },
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:conditional-random-field",
        "label": "Conditional Random Field"
      },
      {
        "@id": "urn:ngm:class:hidden-markov-model",
        "label": "Hidden Markov Model"
      },
      {
        "@id": "urn:ngm:class:recurrent-neural-network",
        "label": "Recurrent Neural Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:named-entity-recognition",
        "label": "Named Entity Recognition"
      },
      {
        "@id": "urn:ngm:class:slot-filling",
        "label": "Slot Filling"
      },
      {
        "@id": "urn:ngm:class:information-extraction",
        "label": "Information Extraction"
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
        "@id": "urn:ngm:class:natural-language-understanding",
        "label": "Natural Language Understanding"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:text-classification",
        "label": "Text Classification"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:part-of-speech-tagging",
        "label": "Part-of-Speech Tagging"
      },
      {
        "@id": "urn:ngm:class:semantic-role-labelling",
        "label": "Semantic Role Labelling"
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
  - [[Sequence Labelling]] assigns a label to every token in a sequence, powering [[Named Entity Recognition]], [[Slot Filling]] and [[Part-of-Speech Tagging]] within [[Natural Language Processing]].
- ### Overview
  - Unlike whole-sequence classification, sequence labelling produces one decision per position while respecting transition constraints between labels.
  - Tag schemes such as BIO (Begin, Inside, Outside) encode span boundaries for multi-token entities.
  - Structured prediction models capture label dependencies so that, for example, an Inside tag cannot follow an Outside tag of a different type.
  - Neural encoders followed by a CRF decoding layer remain a strong baseline for many labelling tasks.
- ### Mechanisms
  - Hidden Markov models modelling emission and transition probabilities.
  - Conditional random fields performing global normalisation over label sequences.
  - BiLSTM and Transformer encoders producing contextual token representations.
  - Viterbi decoding to find the highest-scoring label path.
  - Subword tokenisation feeding contextual embeddings into the labelling head.
- ### Applications
  - Named-entity recognition extracting people, places and organisations from text.
  - Slot filling for task-oriented dialogue and voice assistants.
  - Part-of-speech tagging for downstream parsing and information extraction.
  - Chunking and shallow parsing in document-processing pipelines.
- ### Relationships
  - requires:: [[Labelled Data]]
  - requires:: [[Supervised Learning]]
  - uses:: [[Conditional Random Field]]
  - uses:: [[Hidden Markov Model]]
  - uses:: [[Recurrent Neural Network]]
  - enables:: [[Named Entity Recognition]]
  - enables:: [[Slot Filling]]
  - enables:: [[Information Extraction]]
  - partOf:: [[Natural Language Processing]]
  - supports:: [[Natural Language Understanding]]
  - contrastsWith:: [[Text Classification]]
  - relatedTo:: [[Part-of-Speech Tagging]]
  - relatedTo:: [[Semantic Role Labelling]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
