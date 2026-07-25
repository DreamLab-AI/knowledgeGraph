public:: true

# Model Pruning
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:model-pruning", "@type":"Page", "title":"Model Pruning", "vc:slug":"model-pruning", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:model-pruning",
  "@type":"Class",
  "label":"Model Pruning",
  "definition":"Model pruning is a neural-network compression technique that removes redundant or low-importance parameters, neurons, or structural components from a trained model to reduce its size and computational cost while preserving accuracy. Pruning may be unstructured, zeroing individual weights to induce sparsity, or structured, removing whole channels, filters, or layers to yield models that run faster on standard hardware. Importance is judged by criteria such as weight magnitude or sensitivity, and pruning is typically followed by fine-tuning to recover lost accuracy. It is a core method for deploying large models on resource-constrained and edge environments.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:model-compression","label":"Model Compression"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:fine-tuning","label":"Fine-Tuning"},
      {"@id":"urn:ngm:class:parameter","label":"Parameter"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:knowledge-distillation","label":"Knowledge Distillation"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:fine-tuning","label":"Fine-Tuning"},
      {"@id":"urn:ngm:class:neural-network","label":"Neural Network"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:model-optimization","label":"Model Optimization"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:edge-computing","label":"Edge Computing"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:model-compression","label":"Model Compression"},
      {"@id":"urn:ngm:class:edge-computing","label":"Edge Computing"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:neural-network","label":"Neural Network"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:fine-tuning","label":"Fine-Tuning"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:knowledge-distillation","label":"Knowledge Distillation"},
      {"@id":"urn:ngm:class:model-optimization","label":"Model Optimization"},
      {"@id":"urn:ngm:class:parameter","label":"Parameter"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Model pruning removes redundant parameters or components from a trained [[Neural Network]] to shrink it while keeping accuracy. It is a method of [[Model Compression]] and a contributor to [[Model Optimization]].
- It exploits the observation that large models are heavily over-parameterised, leaving much capacity safely removable.
- ### Overview
- Pruning ranks parameters or structures by an importance criterion such as magnitude or sensitivity, removes the least important, and then fine-tunes the survivors to recover any accuracy lost.
- Unstructured pruning zeroes individual weights to create sparse matrices, while structured pruning removes whole filters, channels, or heads, producing dense smaller models that run efficiently on commodity hardware.
- It is often combined with quantisation and distillation in a deployment pipeline to meet strict latency and memory budgets.
- ### Mechanisms
- Magnitude-based and sensitivity-based importance scoring.
- Unstructured (sparse) versus structured (channel/filter) pruning.
- Iterative prune-and-[[Fine-Tuning]] cycles.
- One-shot pruning versus gradual schedules during training.
- ### Applications
- Deploying models to mobile and [[Edge Computing]] devices.
- Reducing inference latency and energy in production serving.
- Compressing large vision and language models.
- Hardware-aware optimisation alongside [[Knowledge Distillation]].
- ### Relationships
- subClassOf:: [[Model Compression]]
- hasPart:: [[Parameter]]
- contrastsWith:: [[Knowledge Distillation]]
- uses:: [[Neural Network]]
- uses:: [[Fine-Tuning]]
- partOf:: [[Model Optimization]]
- enables:: [[Edge Computing]]
- supports:: [[Edge Computing]]
- dependsOn:: [[Neural Network]]
- requires:: [[Fine-Tuning]]
- relatedTo:: [[Model Optimization]]
- ### Provenance
- updated:: 2026-06-15
