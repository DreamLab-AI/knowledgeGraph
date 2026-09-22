public:: true
alias:: SupervisedLearning

# Supervised Learning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:59ca53da5efbfb4ffbff32f985e6622c03247db3f3f64c230749169bd42cd450",
  "@type": "Page",
  "vc:slug": "supervised-learning",
  "title": "Supervised Learning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:classification",
      "vc:label": "Classification"
    },
    {
      "@id": "urn:visionflow:linked:regression",
      "vc:label": "Regression"
    },
    {
      "@id": "urn:visionflow:owl:class:deep-learning",
      "vc:label": "Deep Learning"
    },
    {
      "@id": "urn:visionflow:owl:class:training-data",
      "vc:label": "Training Data"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-9033"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Supervised Learning"
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
  "@id": "urn:ngm:class:supervised-learning",
  "@type": "Class",
  "label": "Supervised Learning",
  "definition": "Supervised Learning is the machine learning paradigm where models learn from labeled training data to predict outputs for new, unseen inputs. The learning algorithm finds patterns mapping input features to target labels, guided by a loss function measuring prediction errors. Key tasks include classification (discrete labels) and regression (continuous values), spanning linear models, decision trees, support vector machines, neural networks, and ensemble methods.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "qualityScore": 0.72,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning",
      "label": "Machine Learning"
    },
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:supervised-machine-learning",
      "label": "Supervised Machine Learning"
    },
    {
      "@id": "urn:ngm:class:inductive-learning",
      "label": "Inductive Learning"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      },
      {
        "@id": "urn:ngm:class:regression",
        "label": "Regression"
      },
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:training-data",
        "label": "Training Data"
      },
      {
        "@id": "urn:ngm:class:loss-function",
        "label": "Loss Function"
      },
      {
        "@id": "urn:ngm:class:training-dataset",
        "label": "Labeled Dataset"
      },
      {
        "@id": "urn:ngm:class:feature-engineering",
        "label": "Feature Engineering"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:predictive-modelling",
        "label": "Predictive Modelling"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation"
      },
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:cross-validation",
        "label": "Cross-Validation"
      },
      {
        "@id": "urn:ngm:class:regularisation",
        "label": "Regularisation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:decision-tree",
        "label": "Decision Tree"
      },
      {
        "@id": "urn:ngm:class:support-vector-machine",
        "label": "Support Vector Machine"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:unsupervised-learning",
        "label": "Unsupervised Learning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:semi-supervised-learning",
        "label": "Semi-Supervised Learning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:overfitting",
        "label": "Overfitting"
      },
      {
        "@id": "urn:ngm:class:bias-variance-tradeoff",
        "label": "Bias-Variance Tradeoff"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:supervised-learning:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:59ca53da5efbfb4ffbff32f985e6622c03247db3f3f64c230749169bd42cd450"
  },
  "vc:resolutions": [
    {
      "raw": "[[Classification]]",
      "resolved": "urn:visionflow:linked:classification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regression]]",
      "resolved": "urn:visionflow:linked:regression",
      "kind": "StubLink"
    },
    {
      "raw": "[[Deep Learning]]",
      "resolved": "urn:visionflow:owl:class:deep-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Training Data]]",
      "resolved": "urn:visionflow:owl:class:training-data",
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
  - Supervised Learning is the machine learning paradigm where models learn from labeled training data to predict outputs for new, unseen inputs. The learning algorithm finds patterns mapping input features to target labels, guided by a loss function measuring prediction errors. Key tasks include classification (discrete labels) and regression (continuous values). Common algorithms span linear models, decision trees, support vector machines, neural networks, and ensemble methods. Supervised learning requires curated datasets with ground-truth labels and addresses challenges of overfitting, generalization, and class imbalance.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:SupervisedLearning
  - owl-role:: concept

- ### Relationships
  - Requires [[Training Data]] (labelled examples are the essential input)
  - Requires [[Loss Function]] (measures prediction error during training)
  - Uses [[Backpropagation]] to propagate error gradients through the model
  - Uses [[Gradient Descent]] to minimise the loss over training iterations
  - Enables [[Deep Learning]] as its primary large-scale realisation
  - Contrasts with [[Unsupervised Learning]] (no labels required)
  - Contrasts with [[Reinforcement Learning]] (reward signal rather than labels)

- ### Content

  #### Key Characteristics
  - Learns from input-output pairs with labeled examples
  - Optimizes predictive accuracy on held-out validation data
  - Handles classification and regression tasks
  - Employs regularization techniques to prevent overfitting
  - Scales to high-dimensional feature spaces with deep learning

  ## Overview

  Supervised Learning is the machine learning paradigm where models learn from labeled training data to predict outputs for new, unseen inputs. The learning algorithm finds patterns mapping input features to target labels, guided by a loss function measuring prediction errors. Key tasks include classification (discrete labels) and regression (continuous values). Common algorithms span linear models, decision trees, support vector machines, neural networks, and ensemble methods. Supervised learning requires curated datasets with ground-truth labels and addresses challenges of overfitting, generalization, and class imbalance.

  #### Related Concepts
  - [[Classification]]
  - [[Regression]]
  - [[Deep Learning]]
  - [[Training Data]]

  #### References
  - Hastie, T. et al. (2009). The Elements of Statistical Learning (2nd ed.). Springer.
  - Bishop, C. (2006). Pattern Recognition and Machine Learning. Springer.
  - Goodfellow, I. et al. (2016). Deep Learning. MIT Press.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
