public:: true

# Weight Initialisation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:weight-initialisation",
  "@type": "Page",
  "title": "Weight Initialisation",
  "vc:slug": "weight-initialisation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:weight-initialisation",
  "@type": "Class",
  "label": "Weight Initialisation",
  "definition": "Weight initialisation is the procedure of assigning starting values to the trainable parameters of a neural network before training commences. The choice of initialisation scheme affects gradient flow, convergence speed, and the avoidance of vanishing or exploding activations across deep layers. Common schemes such as Xavier (Glorot) and He initialisation scale the variance of initial weights according to layer fan-in and fan-out.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:neural-network-training",
      "label": "Neural Network Training"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:neural-network-training",
        "label": "Neural Network Training"
      },
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:activation-function",
        "label": "Activation Function"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:activation-function",
        "label": "Activation Function"
      },
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      },
      {
        "@id": "urn:ngm:class:recurrent-neural-network",
        "label": "Recurrent Neural Network"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:optimiser",
        "label": "Optimiser"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:batch-normalisation",
        "label": "Batch Normalisation"
      },
      {
        "@id": "urn:ngm:class:regularisation",
        "label": "Regularisation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:transfer-learning",
        "label": "Transfer Learning"
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
  - Weight initialisation is the procedure of assigning starting values to the trainable parameters of a neural network before training commences. The choice of initialisation scheme affects gradient flow, convergence speed, and the avoidance of vanishing or exploding activations across deep layers. Common schemes such as Xavier (Glorot) and He initialisation scale the variance of initial weights according to layer fan-in and fan-out.
  - Related concepts: [[Neural Network Training]] [[Neural Network]] [[Activation Function]] [[Gradient Descent]] [[Backpropagation]]
- ### Overview
  - Initialising weights to small random values breaks symmetry between neurons so that they learn distinct features. Naive choices, such as all-zero or large-magnitude weights, cause neurons to update identically or to saturate non-linear activations, stalling learning. Variance-scaling schemes keep the signal variance roughly constant as it propagates forward and backward through many layers.
- ### Key aspects
  - Symmetry breaking through random sampling so neurons diverge during training
  - Variance scaling by layer fan-in/fan-out (Xavier/Glorot, He/Kaiming)
  - Matching the scheme to the activation function (He for ReLU, Xavier for tanh/sigmoid)
  - Bias initialisation, typically to zero or small constants
  - Orthogonal initialisation for recurrent architectures to preserve gradient norms
- ### Applications
  - Training deep convolutional networks for image classification
  - Stabilising very deep residual and transformer architectures
  - Improving convergence speed during hyperparameter search
  - Reducing sensitivity to learning-rate selection
- ### Relationships
  - subClassOf:: [[Neural Network Training]]
  - partOf:: [[Neural Network Training]]
  - partOf:: [[Model Training]]
  - relatedTo:: [[Neural Network]]
  - relatedTo:: [[Deep Learning]]
  - relatedTo:: [[Activation Function]]
  - dependsOn:: [[Activation Function]]
  - dependsOn:: [[Backpropagation]]
  - requires:: [[Gradient Descent]]
  - enables:: [[Model Training]]
  - supports:: [[Convolutional Neural Network]]
  - supports:: [[Recurrent Neural Network]]
  - uses:: [[Optimiser]]
  - contrastsWith:: [[Batch Normalisation]]
  - contrastsWith:: [[Regularisation]]
  - bridgesTo:: [[Transfer Learning]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
