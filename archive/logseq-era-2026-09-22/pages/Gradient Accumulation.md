public:: true

# Gradient Accumulation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:gradient-accumulation", "@type":"Page", "title":"Gradient Accumulation", "vc:slug":"gradient-accumulation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:gradient-accumulation",
  "@type":"Class",
  "label":"Gradient Accumulation",
  "definition":"Gradient accumulation is a training technique that sums the gradients computed over several consecutive mini-batches before performing a single parameter update, thereby simulating a larger effective batch size than fits in device memory. It allows training of large models on limited hardware by trading additional forward and backward passes for reduced peak memory usage. The optimiser step and gradient reset occur only after the configured number of accumulation steps has been reached.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:model-training","label":"Model Training"}],
  "relations":{
    "uses":[{"@id":"urn:ngm:class:backpropagation","label":"Backpropagation"},{"@id":"urn:ngm:class:gradient","label":"Gradient"}],
    "requires":[{"@id":"urn:ngm:class:mini-batch","label":"Mini-Batch"}],
    "enables":[{"@id":"urn:ngm:class:distributed-training","label":"Distributed Training"}],
    "supports":[{"@id":"urn:ngm:class:stochastic-gradient-descent","label":"Stochastic Gradient Descent"},{"@id":"urn:ngm:class:gradient-descent","label":"Gradient Descent"}],
    "dependsOn":[{"@id":"urn:ngm:class:batch-size","label":"Batch Size"}],
    "contrastsWith":[{"@id":"urn:ngm:class:data-parallelism","label":"Data Parallelism"}],
    "relatedTo":[{"@id":"urn:ngm:class:learning-rate","label":"Learning Rate"},{"@id":"urn:ngm:class:pipeline-parallelism","label":"Pipeline Parallelism"}],
    "partOf":[{"@id":"urn:ngm:class:model-training","label":"Model Training"}],
    "bridgesTo":[{"@id":"urn:ngm:class:deep-learning","label":"Deep Learning"}],
    "implements":[{"@id":"urn:ngm:class:optimisation-algorithm","label":"Optimization Algorithm"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Gradient Accumulation]] sums [[Gradient]] values over several [[Mini-Batch]] iterations before a single [[Stochastic Gradient Descent]] update is applied.
- It emulates a large [[Batch Size]] without the corresponding peak memory cost, enabling [[Model Training]] of large models on constrained hardware.
- The optimiser step is deferred and gradients are reset only after the configured number of accumulation steps.
- ### Overview
- Standard training computes a gradient on one mini-batch and immediately updates parameters; gradient accumulation instead accumulates gradients across N micro-batches and updates once.
- This makes the effective batch size equal to the micro-batch size multiplied by the number of accumulation steps.
- The technique exchanges compute time for memory: more forward and backward passes per update, but lower instantaneous memory footprint.
- It is widely combined with mixed precision and parallelism strategies to fit very large models on commodity accelerators.
- ### Mechanisms
- Gradients are added into the parameter `.grad` buffers across successive micro-batches rather than being zeroed each step.
- After the final accumulation step the optimiser applies the averaged or summed gradient and the buffers are cleared.
- Loss is typically scaled by the number of accumulation steps to keep update magnitudes equivalent to a single large batch.
- Care is required with normalisation layers and learning-rate schedules, since batch statistics still reflect the micro-batch.
- ### Applications
- Fine-tuning and pretraining of large language and vision models on single GPUs or modest clusters.
- Stabilising training where large batches improve convergence but memory is the limiting constraint.
- Combining with [[Pipeline Parallelism]] and [[Data Parallelism]] to scale effective batch size across devices.
- ### Relationships
- subClassOf:: [[Model Training]]
- uses:: [[Backpropagation]]
- uses:: [[Gradient]]
- requires:: [[Mini-Batch]]
- enables:: [[Distributed Training]]
- supports:: [[Stochastic Gradient Descent]]
- supports:: [[Gradient Descent]]
- dependsOn:: [[Batch Size]]
- contrastsWith:: [[Data Parallelism]]
- relatedTo:: [[Learning Rate]]
- relatedTo:: [[Pipeline Parallelism]]
- partOf:: [[Model Training]]
- bridgesTo:: [[Deep Learning]]
- implements:: [[Optimisation Algorithm]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
