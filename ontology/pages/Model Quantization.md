public:: true

# Model Quantization
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:model-quantization", "@type":"Page", "title":"Model Quantization", "vc:slug":"model-quantization", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:model-quantization",
  "@type":"Class",
  "label":"Model Quantization",
  "definition":"Model quantization is a model-compression technique that reduces the numerical precision of a neural network's weights and activations, typically converting 32-bit floating-point values to lower-precision integer or float formats such as INT8, INT4 or FP8. By shrinking the memory footprint and exploiting cheaper integer arithmetic, quantization lowers latency, energy use and storage cost, usually at a small and controllable loss in accuracy. It is applied either after training (post-training quantization) or during training (quantization-aware training) to deploy large models on constrained inference hardware.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:model-compression","label":"Model Compression"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:model-optimization","label":"Model Optimization"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:inference-hardware","label":"Inference Hardware"},
      {"@id":"urn:ngm:class:gpu","label":"GPU"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:edge-computing","label":"Edge Computing"},
      {"@id":"urn:ngm:class:model-deployment","label":"Model Deployment"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:ai-model","label":"AI Model"},
      {"@id":"urn:ngm:class:large-language-model","label":"Large Language Model"},
      {"@id":"urn:ngm:class:model-serving","label":"Model Serving"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:neural-network","label":"Neural Network"},
      {"@id":"urn:ngm:class:deep-learning","label":"Deep Learning"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:knowledge-distillation","label":"Knowledge Distillation"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:fine-tuning","label":"Fine Tuning"},
      {"@id":"urn:ngm:class:deep-speed","label":"DeepSpeed"},
      {"@id":"urn:ngm:class:model-optimization","label":"Model Optimization"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Model quantization is a [[Model Compression]] method that lowers the numerical precision of a [[Neural Network]] to reduce its size and speed up inference.
	- It trades a small, controllable loss of accuracy for large gains in memory and throughput, making it central to [[Model Optimization]].
	- Quantized models run efficiently on commodity [[Inference Hardware]] and at the [[Edge Computing]] tier where full-precision [[Deep Learning]] models would not fit.
- ### Overview
	- Modern networks are trained in 32-bit floating point, but most of that precision is redundant for inference.
	- Quantization maps the wide floating-point range onto a narrow set of integer levels, commonly INT8 or INT4, using a scale and zero-point.
	- The technique is one of the principal levers for deploying [[Large Language Model]] systems within practical cost and latency budgets.
	- It composes with other compression methods such as pruning and [[Knowledge Distillation]] to compound efficiency gains.
- ### Mechanisms
	- Post-training quantization calibrates scales from a small sample of data without retraining the model.
	- Quantization-aware training inserts fake-quantization operations during training so the network learns to tolerate reduced precision.
	- Per-tensor and per-channel schemes choose how finely scales are assigned across the weight tensors.
	- Mixed-precision keeps sensitive layers in higher precision while quantizing the rest, balancing accuracy and speed.
- ### Applications
	- On-device inference for mobile, embedded and IoT deployments where memory and power are scarce.
	- Cost reduction in large-scale [[Model Serving]] by fitting more requests onto each accelerator.
	- Latency-critical pipelines where INT8 kernels exploit dedicated tensor cores on the [[GPU]].
	- Compressing foundation models for distribution and fine-tuning on consumer hardware.
- ### Relationships
	- subClassOf:: [[Model Compression]]
	- partOf:: [[Model Optimization]]
	- requires:: [[Inference Hardware]]
	- requires:: [[GPU]]
	- enables:: [[Edge Computing]]
	- enables:: [[Model Deployment]]
	- supports:: [[AI Model]]
	- supports:: [[Large Language Model]]
	- supports:: [[Model Serving]]
	- uses:: [[Neural Network]]
	- uses:: [[Deep Learning]]
	- contrastsWith:: [[Knowledge Distillation]]
	- relatedTo:: [[Fine Tuning]]
	- relatedTo:: [[DeepSpeed]]
	- relatedTo:: [[Model Optimization]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
