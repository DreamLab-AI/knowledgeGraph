public:: true

# Dropout
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b06e18362443cefc2ac703f5fbc4f2db3b31232e9bd730a0e86aeb9eb602d507",
  "@type": "Page",
  "vc:slug": "dropout",
  "title": "Dropout",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:iso-iec-22989-2022",
      "vc:label": "ISO/IEC 22989:2022"
    },
    {
      "@id": "urn:visionflow:linked:nist-ai-rmf",
      "vc:label": "NIST AI RMF"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "ArtificialIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-robot",
      "vc:label": "Autonomous Robot"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0057"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Dropout"
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
  "@id": "urn:ngm:class:dropout",
  "@type": "Class",
  "label": "Dropout",
  "definition": "Dropout is a regularisation technique for neural network training in which a randomly selected fraction of neuron activations is set to zero during each forward pass, preventing neurons from co-adapting and forcing the network to learn redundant representations. By randomly deactivating 20–50% of units per training step, dropout acts as an ensemble method — each mini-batch trains a slightly different network architecture — significantly reducing overfitting on limited training datasets. At inference time, all neurons are active but their outputs are scaled by the retention probability.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:regularisation",
    "label": "Regularisation"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:regularisation",
        "label": "Regularisation"
      },
      {
        "@id": "urn:ngm:class:model-training-pipeline",
        "label": "Model Training Pipeline"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:training",
        "label": "Training"
      },
      {
        "@id": "urn:ngm:class:stochastic-gradient-descent",
        "label": "Stochastic Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:forward-pass",
        "label": "Forward Pass"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:generalisation",
        "label": "Generalisation"
      },
      {
        "@id": "urn:ngm:class:model-robustness",
        "label": "Model Robustness"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:overfitting",
        "label": "Overfitting"
      },
      {
        "@id": "urn:ngm:class:batch-normalisation",
        "label": "Batch Normalisation"
      },
      {
        "@id": "urn:ngm:class:weight-decay",
        "label": "Weight Decay"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:bernoulli-distribution",
        "label": "Bernoulli Distribution"
      },
      {
        "@id": "urn:ngm:class:monte-carlo-methods",
        "label": "Monte Carlo Approximation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:ensemble-methods",
        "label": "Ensemble Learning"
      },
      {
        "@id": "urn:ngm:class:variational-inference",
        "label": "Variational Inference"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      },
      {
        "@id": "urn:ngm:class:recurrent-neural-network",
        "label": "Recurrent Neural Network"
      },
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      },
      {
        "@id": "urn:ngm:class:hyperparameter-tuning",
        "label": "Hyperparameter Tuning"
      },
      {
        "@id": "urn:ngm:class:data-augmentation",
        "label": "Data Augmentation"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-iec-22989-2022",
        "label": "ISO-IEC 22989 2022"
      },
      {
        "@id": "urn:ngm:class:nist-ai-rmf",
        "label": "NIST AI RMF"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:bayesian-deep-learning",
        "label": "Bayesian Deep Learning"
      },
      {
        "@id": "urn:ngm:class:uncertainty-quantification",
        "label": "Uncertainty Quantification"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:dropout-regularisation",
      "label": "Dropout Regularisation"
    },
    {
      "@id": "urn:ngm:class:inverted-dropout",
      "label": "Inverted Dropout"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:dropout:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b06e18362443cefc2ac703f5fbc4f2db3b31232e9bd730a0e86aeb9eb602d507"
  },
  "vc:resolutions": [
    {
      "raw": "[[ISO/IEC 22989:2022]]",
      "resolved": "urn:visionflow:linked:iso-iec-22989-2022",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST AI RMF]]",
      "resolved": "urn:visionflow:linked:nist-ai-rmf",
      "kind": "StubLink"
    },
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autonomous Robot]]",
      "resolved": "urn:visionflow:owl:class:autonomous-robot",
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
  - **Dropout** is a regularisation technique that randomly deactivates (drops) a fraction of neurons during each training iteration, preventing co-adaptation and reducing overfitting. Dropout rate (typically 0.2–0.5) controls the fraction of neurons dropped. At inference time, all neurons are active but their outputs are scaled by the retention probability, approximating an ensemble of exponentially many sub-networks.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Dropout
  - owl-role:: Concept
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - bridges-to:: [[Autonomous Robot]]
  - partOf [[Regularisation]]
  - requires [[Neural Network]]
  - requires [[Training]]
  - contrastsWith [[Overfitting]]
  - enables [[Deep Learning]]

- ### Content
  - **Dropout** is a regularisation technique that randomly deactivates (drops) a fraction of neurons during each training iteration, preventing co-adaptation and reducing overfitting. Dropout rate (typically 0.2–0.5) controls the fraction of neurons dropped.

  ## Standards Alignment

  ### ISO/IEC Standards
  - **[[ISO/IEC 22989:2022]]**: Training and regularisation

  ### NIST AI RMF
  - **Function**: MAP (Training techniques)

  ## Related Terms
  - **Regularisation** (AI-0056): Parent category
  - **Overfitting** (AI-0054): Prevented by dropout
  - **Training** (AI-0041): Applies dropout
  - **Neural Network**: Uses dropout layers

  ## References
  1. Srivastava et al. - "Dropout: A Simple Way to Prevent Neural Networks from Overfitting" - JMLR, 2014
  2. [[ISO/IEC 22989:2022]] - Training techniques
  3. [[NIST AI RMF]] - MAP function mapping

- ### Provenance
  - sources:: [[ISO/IEC 22989:2022]], [[NIST AI RMF]]
  - migration-date:: 2026-04-26T00:00:00Z
