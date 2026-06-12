public:: true

# Technique
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1731f31e88ca8bc95af32d9d740fe6a9052dac31eeda094221fec2c8a172d71d",
  "@type": "Page",
  "vc:slug": "technique",
  "title": "Technique",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0832"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Technique"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:technique",
  "@type": "Class",
  "label": "Technique",
  "definition": "A Technique is a specific, repeatable method or procedure applied within a domain to achieve a defined outcome, distinguishing it from broader algorithms or frameworks by its focus on concrete application steps. In artificial intelligence, techniques encompass approaches such as supervised learning, fine-tuning, and prompt engineering that are composed into pipelines and evaluated against benchmarks. Techniques may be realised by models or algorithms, and their effectiveness is assessed through empirical evaluation on datasets.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:algorithm", "label": "Algorithm"},
      {"@id": "urn:ngm:class:machine-learning-discipline-technique", "label": "Machine Learning Technique"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"},
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:inference", "label": "Inference"},
      {"@id": "urn:ngm:class:model-performance", "label": "Model Performance"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:model", "label": "Model"},
      {"@id": "urn:ngm:class:algorithmic-framework", "label": "Algorithmic Framework"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:architecture", "label": "Architecture"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:technique:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1731f31e88ca8bc95af32d9d740fe6a9052dac31eeda094221fec2c8a172d71d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  A Technique is a specific, repeatable method or procedure applied within a domain to achieve a defined outcome, distinguishing it from broader algorithms or frameworks by its focus on concrete application steps. In artificial intelligence, techniques encompass approaches such as supervised learning, fine-tuning, and prompt engineering that are composed into pipelines and evaluated against benchmarks. Techniques may be realised by models or algorithms, and their effectiveness is assessed through empirical evaluation on datasets.

- ### Relationships
  - hasPart:: [[Algorithm]], [[Machine Learning Technique]]
  - requires:: [[Model Training]], [[Training Data]]
  - enables:: [[Inference]], [[Model Performance]]
  - uses:: [[Deep Learning]], [[Neural Network]]
  - relatedTo:: [[Machine Learning Discipline]], [[Model]], [[Algorithmic Framework]]
  - contrastsWith:: [[Architecture]]

- ### Content
  A Technique denotes the most granular level of methodological specificity in the AI knowledge hierarchy — situated below paradigms (such as machine learning) and frameworks (such as deep learning), but above individual hyperparameter choices. Techniques are distinguished by having named procedures with defined inputs, transformations, and outputs that can be reproduced independently of a particular implementation.

  Common AI techniques include gradient descent for optimisation, attention mechanisms within transformer architectures, and retrieval-augmented generation for grounding language model outputs. Each technique has a characteristic scope: some techniques (e.g., backpropagation) are foundational and applicable across many architectures, while others (e.g., LoRA fine-tuning) are specialised to particular model families or deployment constraints.

  Techniques are evaluated through empirical benchmarks that measure task performance, computational efficiency, and generalisation. A technique's maturity is indicated by its adoption across multiple independent implementations, the existence of ablation studies, and community consensus on best-practice configurations.

  The selection of an appropriate technique depends on data availability, computational budget, domain constraints, and target performance metrics. Practitioners typically compose multiple techniques into pipelines, requiring careful attention to interactions between steps such as preprocessing, training, and inference.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
