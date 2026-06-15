public:: true

# Intent Classification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:intent-classification",
  "@type": "Page",
  "vc:slug": "intent-classification",
  "title": "Intent Classification",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:intent-classification",
  "@type": "Class",
  "label": "Intent Classification",
  "definition": "Intent classification is a natural language processing task that assigns a user utterance to one or more predefined intent categories, enabling a system to determine the semantic goal behind an input. It forms the core routing component of conversational AI systems, mapping raw text to structured action labels such as 'book_flight', 'check_balance', or 'cancel_order'.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:nlptask",
      "label": "NLPTask"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:natural-language-understanding",
        "label": "Natural Language Understanding"
      },
      {
        "@id": "urn:ngm:class:labelled-training-data",
        "label": "Labelled Training Data"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:dialogue-system",
        "label": "Dialogue System"
      },
      {
        "@id": "urn:ngm:class:conversational-ai",
        "label": "Conversational AI"
      },
      {
        "@id": "urn:ngm:class:slot-filling",
        "label": "Slot Filling"
      },
      {
        "@id": "urn:ngm:class:task-oriented-dialogue",
        "label": "Task-Oriented Dialogue"
      },
      {
        "@id": "urn:ngm:class:process-automation",
        "label": "Process Automation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      },
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer Model"
      },
      {
        "@id": "urn:ngm:class:text-classification",
        "label": "Text Classification"
      },
      {
        "@id": "urn:ngm:class:word-embedding",
        "label": "Word Embedding"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:intent-ontology",
        "label": "Intent Ontology"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:named-entity-recognition",
        "label": "Named Entity Recognition"
      },
      {
        "@id": "urn:ngm:class:sentiment-analysis",
        "label": "Sentiment Analysis"
      },
      {
        "@id": "urn:ngm:class:out-of-domain-detection",
        "label": "Out-of-Domain Detection"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:intent-recognition",
        "label": "Intent Recognition"
      },
      {
        "@id": "urn:ngm:class:question-answering",
        "label": "Question Answering"
      },
      {
        "@id": "urn:ngm:class:zero-shot-learning",
        "label": "Zero-Shot Learning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:robotic-process-automation",
        "label": "Robotic Process Automation"
      },
      {
        "@id": "urn:ngm:class:voice-user-interface",
        "label": "Voice User Interface"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:intent-recognition",
      "label": "Intent Recognition"
    },
    {
      "@id": "urn:ngm:class:utterance-intent-detection",
      "label": "Utterance Intent Detection"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.75
}
```

- ### Definition
  - Intent classification is an [[Natural Language Processing]] subtask that predicts the communicative goal of a user utterance by mapping it to a label from a closed or hierarchical label set, distinguishing it from [[Named Entity Recognition]] which identifies factual spans rather than speech acts.

- ### Relationships
  - Intent classification depends on [[Natural Language Understanding]] to produce semantic representations of utterances, enables [[Dialogue System]] and [[Conversational AI]] pipelines to route turns to appropriate handlers, and complements [[Named Entity Recognition]] in extracting both the goal and the entities required to fulfil it; it is a specific instance of the broader [[Natural Language Processing]] task family.

- ### Content
  - Intent classification emerged from early rule-based dialogue systems of the 1970s-80s (ELIZA, ALICE) where patterns matched user inputs to scripted responses. The probabilistic era arrived with hidden Markov models and Naive Bayes classifiers in the 1990s, followed by SVMs and maximum-entropy models in the 2000s. The deep learning revolution produced CNN and LSTM classifiers around 2014-2016, and transformer-based models (BERT, RoBERTa) from 2018 onward delivered major accuracy improvements on benchmark datasets such as SNIPS, ATIS, and CLINC150.

  - Technically, intent classifiers encode an utterance into a dense vector representation — historically using word embeddings such as word2vec or GloVe, latterly using contextual embeddings from transformer encoders — then pass that vector through one or more dense layers and a softmax output head. Training requires labelled examples of (utterance, intent) pairs. In zero-shot and few-shot regimes, large language models are prompted with intent descriptions and candidate labels, eliminating the need for per-intent training data. Multi-intent architectures use multi-label classification to handle utterances that express more than one goal simultaneously.

  - Intent classification is the primary routing component in virtual assistants (Amazon Alexa, Google Assistant, Apple Siri), customer service chatbots, interactive voice response systems, and process automation triggers. Accurate intent detection reduces mis-routing, shortens handle time, and enables proper slot-filling for downstream APIs. In enterprise deployments it gates access to automated workflows, making precision and out-of-scope detection critical for user trust and operational efficiency.

  - By 2024-2025 the field has shifted toward instruction-tuned LLMs that perform intent classification as a generation task, producing intent labels via structured output schemas. Retrieval-augmented approaches ground classification in example databases, improving robustness in long-tail domains. Multilingual intent classification using models such as mBERT and XLM-R has removed the need for per-language labelled corpora. Challenges remain in detecting out-of-domain (OOD) utterances, handling ambiguous multi-intent inputs, and ensuring class balance during fine-tuning.
