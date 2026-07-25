public:: true

# Model Compression
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:model-compression", "@type":"Page", "title":"Model Compression", "vc:slug":"model-compression", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-compression",
  "@type": "Class",
  "label": "Model Compression",
  "definition": "Model compression is the family of techniques that reduce the size, memory footprint, and computational cost of a machine learning model while preserving as much of its predictive accuracy as possible. Common methods include quantisation of weights to lower precision, pruning of redundant parameters, knowledge distillation into a smaller student model, and weight sharing. Compression is essential for deploying large neural networks on resource-constrained hardware and for reducing inference latency and energy use.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-optimization",
      "label": "Model Optimization"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:quantisation",
        "label": "Quantisation"
      },
      {
        "@id": "urn:ngm:class:pruning",
        "label": "Pruning"
      },
      {
        "@id": "urn:ngm:class:weight-sharing",
        "label": "Weight Sharing"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:model-optimization",
        "label": "Model Optimization"
      },
      {
        "@id": "urn:ngm:class:model-deployment",
        "label": "Model Deployment"
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
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:ai-inference",
        "label": "Efficient Inference"
      },
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency Reduction"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:inference",
        "label": "Machine Learning Inference"
      },
      {
        "@id": "urn:ngm:class:model-deployment",
        "label": "Model Deployment"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:low-rank-adaptation",
        "label": "Low-Rank Adaptation"
      },
      {
        "@id": "urn:ngm:class:tensor",
        "label": "Tensor"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
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
	- Model compression reduces the size and cost of a [[Neural Network]] while preserving accuracy.
	- It is a branch of [[Model Optimization]] and a prerequisite for [[Edge Computing]] deployment.
	- Core techniques include [[Quantisation]], [[Pruning]], and [[Weight Sharing]].
- ### Overview
	- State-of-the-art models have grown faster than the memory and compute available on deployment targets.
	- Compression closes that gap by trading a small accuracy budget for large reductions in footprint and latency.
	- Techniques can be applied post-training or integrated into the training loop for better accuracy retention.
	- Compression is increasingly combined with hardware-aware optimisation to exploit specific accelerators.
- ### Mechanisms
	- Quantisation maps high-precision weights and activations to lower-bit representations.
	- Pruning removes weights, channels, or whole structures that contribute little to outputs.
	- Knowledge distillation transfers behaviour from a large teacher to a compact student.
	- Weight sharing and low-rank factorisation reduce the number of independent parameters.
- ### Applications
	- On-device inference for mobile and embedded systems.
	- Cost reduction for large-scale serving of language models.
	- Real-time computer vision where latency budgets are tight.
	- Energy-efficient AI for battery-powered and edge hardware.
- ### Relationships
	- subClassOf:: [[Model Optimization]]
	- hasPart:: [[Quantisation]]
	- hasPart:: [[Pruning]]
	- hasPart:: [[Weight Sharing]]
	- partOf:: [[Model Optimization]]
	- partOf:: [[Model Deployment]]
	- requires:: [[Neural Network]]
	- requires:: [[Training]]
	- dependsOn:: [[Deep Learning]]
	- enables:: [[Edge Computing]]
	- enables:: [[Efficient Inference]]
	- enables:: [[Latency Reduction]]
	- supports:: [[Machine Learning Inference]]
	- supports:: [[Model Deployment]]
	- uses:: [[Low-Rank Adaptation]]
	- uses:: [[Tensor]]
	- relatedTo:: [[Large Language Models]]
	- relatedTo:: [[Transformer]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
