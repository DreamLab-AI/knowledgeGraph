public:: true

# Mini-Batch
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:mini-batch", "@type":"Page", "title":"Mini-Batch", "vc:slug":"mini-batch", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:mini-batch",
  "@type":"Class",
  "label":"Mini-Batch",
  "definition":"A mini-batch is a small, fixed-size subset of a training dataset processed together in a single forward and backward pass when training a machine learning model. Mini-batch gradient descent computes the gradient over the mini-batch rather than over a single example (stochastic) or the entire dataset (full batch), balancing the noise-reduction benefits of larger batches against the computational and memory cost. The mini-batch size is a key hyperparameter that influences convergence behaviour, gradient variance, hardware utilisation and generalisation.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:stochastic-gradient-descent","label":"Stochastic Gradient Descent"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:gradient-descent","label":"Gradient Descent"},
      {"@id":"urn:ngm:class:model-training","label":"Model Training"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:loss-function","label":"Loss Function"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:backpropagation","label":"Backpropagation"},
      {"@id":"urn:ngm:class:optimisation-algorithm","label":"Optimisation Algorithm"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:data-parallelism","label":"Data Parallelism"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:matrix-multiplication","label":"Matrix Multiplication"},
      {"@id":"urn:ngm:class:gpu-acceleration","label":"GPU Acceleration"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:neural-network","label":"Neural Network"},
      {"@id":"urn:ngm:class:deep-learning","label":"Deep Learning"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:epoch","label":"Epoch"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:overfitting","label":"Overfitting"},
      {"@id":"urn:ngm:class:convolutional-neural-network","label":"Convolutional Neural Network"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A [[Mini-Batch]] is a small fixed-size subset of training data processed together in one update step of [[Gradient Descent]].
	- It is the operating unit of mini-batch [[Stochastic Gradient Descent]], sitting between single-example updates and full-batch updates.
	- Each mini-batch produces one estimate of the [[Loss Function]] gradient used by [[Backpropagation]] to update a [[Neural Network]].
- ### Overview
	- Mini-batching is the default training regime in modern [[Deep Learning]] because it maps efficiently onto vectorised hardware.
	- Batch size trades gradient noise against throughput: smaller batches add regularising noise, larger batches give smoother, more parallelisable updates.
	- An [[Epoch]] is one full pass over the dataset, comprising many mini-batch steps.
	- Batch construction usually involves shuffling and sometimes stratified or class-balanced sampling.
- ### Key aspects
	- **Gradient estimation**: the mini-batch gradient is an unbiased estimate of the full-batch gradient with variance inversely related to batch size.
	- **Hardware utilisation**: batched tensors enable dense [[Matrix Multiplication]] that saturates [[GPU Acceleration]].
	- **Scaling**: large-batch training often pairs with learning-rate warmup and scaling rules to preserve convergence.
	- **Memory bound**: maximum batch size is constrained by accelerator memory, motivating gradient accumulation.
- ### Applications
	- Training all major neural architectures including CNNs, transformers and recurrent networks.
	- Distributed training where each worker processes a shard of the global batch under [[Data Parallelism]].
	- Curriculum and contrastive learning, where batch composition affects the learning signal.
- ### Relationships
	- partOf:: [[Gradient Descent]]
	- partOf:: [[Model Training]]
	- hasPart:: [[Loss Function]]
	- requires:: [[Backpropagation]]
	- requires:: [[Optimisation Algorithm]]
	- enables:: [[Data Parallelism]]
	- uses:: [[Matrix Multiplication]]
	- uses:: [[GPU Acceleration]]
	- supports:: [[Neural Network]]
	- supports:: [[Deep Learning]]
	- contrastsWith:: [[Epoch]]
	- relatedTo:: [[Overfitting]]
	- relatedTo:: [[Convolutional Neural Network]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
