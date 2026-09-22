public:: true

# Weight Matrix

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:weight-matrix",
  "@type": "Page",
  "title": "Weight Matrix",
  "vc:slug": "weight-matrix",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:weight-matrix",
  "@type": "Class",
  "label": "Weight Matrix",
  "definition": "A weight matrix is a two-dimensional array of learnable parameters that defines the linear transformation applied between two layers of a neural network. Each element encodes the strength of the connection between an input unit and an output unit, and the matrix is multiplied with the input activation vector to produce the pre-activation output. Weight matrices are initialised, then iteratively updated during training via gradient-based optimisation to minimise a loss function.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:neural-network",
      "label": "Neural Network"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:parameter",
        "label": "Parameter"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:matrix-multiplication",
        "label": "Matrix Multiplication"
      },
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:tensor",
        "label": "Tensor"
      },
      {
        "@id": "urn:ngm:class:loss-function",
        "label": "Loss Function"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:activation-function",
        "label": "Activation Function"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:training",
        "label": "Training"
      },
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation"
      },
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
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
  - Array of learnable [[Parameter]] values
  - Core component of a [[Neural Network]]
  - Applied via [[Matrix Multiplication]]
  - Updated through [[Gradient Descent]]
- ### Overview
  - The weight matrix transforms an input activation vector into a higher- or lower-dimensional output space.
  - Its dimensions are determined by the number of input and output units of the connected layers.
  - Training adjusts the matrix entries so the network approximates the target mapping.
- ### Mechanisms
  - Initialisation strategies (Xavier, He, random)
  - Forward pass: output = W x + b
  - Gradient computation via [[Backpropagation]]
  - Parameter update through optimiser steps
  - Regularisation (weight decay, sparsity)
- ### Applications
  - Fully connected (dense) layers in deep networks
  - Embedding lookup and projection layers
  - Attention and transformer projection matrices
  - Linear classifiers and regression heads
- ### Relationships
  - partOf:: [[Neural Network]]
  - partOf:: [[Deep Learning]]
  - partOf:: [[Machine Learning]]
  - hasPart:: [[Parameter]]
  - uses:: [[Matrix Multiplication]]
  - uses:: [[Linear Algebra]]
  - dependsOn:: [[Tensor]]
  - dependsOn:: [[Loss Function]]
  - enables:: [[Activation Function]]
  - enables:: [[Inference]]
  - requires:: [[Gradient Descent]]
  - requires:: [[Training]]
  - requires:: [[Optimisation]]
  - relatedTo:: [[Backpropagation]]
  - relatedTo:: [[Model Training]]
- ### Provenance
  - updated:: 2026-06-15
