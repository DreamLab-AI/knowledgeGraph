public:: true

# Gradient Checkpointing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d77fd08149b6a527c728a30b1f96f980a84b1c0f4bc8fa390599efb201b75668",
  "@type": "Page",
  "vc:slug": "gradient-checkpointing",
  "title": "Gradient Checkpointing",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:backpropagation",
      "vc:label": "Backpropagation"
    },
    {
      "@id": "urn:visionflow:linked:deep-learning",
      "vc:label": "Deep Learning"
    },
    {
      "@id": "urn:visionflow:linked:gradient-descent",
      "vc:label": "Gradient Descent"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Gradient Checkpointing"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gradient-checkpointing",
  "@type": "Class",
  "label": "Gradient Checkpointing",
  "definition": "Gradient checkpointing is a memory-efficient training technique for deep neural networks that reduces peak activation memory by storing only a strategically chosen subset of intermediate activations (checkpoints) during the forward pass, then recomputing the discarded activations on demand during backpropagation. The technique was formalised by Chen et al. (2016) under the name 'Training Deep Networks with Sublinear Memory Cost', achieving O(sqrt(N)) memory in the number of layers N at the cost of one additional forward pass per training step. It is now a foundational primitive in large-model training, implemented natively in PyTorch, JAX, TensorFlow, and most major deep-learning frameworks.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.74,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:backpropagation",
      "label": "Backpropagation"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:activation-checkpointing",
      "label": "Activation Checkpointing"
    },
    {
      "@id": "urn:ngm:class:rematerialisation",
      "label": "Rematerialisation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation"
      },
      {
        "@id": "urn:ngm:class:automatic-differentiation",
        "label": "Automatic Differentiation"
      },
      {
        "@id": "urn:ngm:class:computational-graph",
        "label": "Computational Graph"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:large-language-model-training",
        "label": "Large Language Model Training"
      },
      {
        "@id": "urn:ngm:class:long-context-training",
        "label": "Long Context Training"
      },
      {
        "@id": "urn:ngm:class:model-scaling",
        "label": "Model Scaling"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:forward-pass",
        "label": "Forward Pass"
      },
      {
        "@id": "urn:ngm:class:recomputation",
        "label": "Recomputation"
      },
      {
        "@id": "urn:ngm:class:memory-management",
        "label": "Memory Management"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:checkpoint-segment",
        "label": "Checkpoint Segment"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:memory-efficient-training",
        "label": "Memory-Efficient Training"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:gpu-memory",
        "label": "GPU Memory"
      },
      {
        "@id": "urn:ngm:class:neural-network-architecture",
        "label": "Neural Network Architecture"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      },
      {
        "@id": "urn:ngm:class:recurrent-neural-network",
        "label": "Recurrent Neural Network"
      },
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:full-activation-storage",
        "label": "Full Activation Storage"
      },
      {
        "@id": "urn:ngm:class:gradient-accumulation",
        "label": "Gradient Accumulation"
      },
      {
        "@id": "urn:ngm:class:mixed-precision-training",
        "label": "Mixed Precision Training"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:pipeline-parallelism",
        "label": "Pipeline Parallelism"
      },
      {
        "@id": "urn:ngm:class:model-parallelism",
        "label": "Model Parallelism"
      },
      {
        "@id": "urn:ngm:class:offloading",
        "label": "Offloading"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-training",
        "label": "Distributed Training"
      },
      {
        "@id": "urn:ngm:class:edge-ai",
        "label": "Edge AI"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:gradient-checkpointing:0706e5296a80",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d77fd08149b6a527c728a30b1f96f980a84b1c0f4bc8fa390599efb201b75668"
  },
  "vc:resolutions": [
    {
      "raw": "[[Backpropagation]]",
      "resolved": "urn:visionflow:linked:backpropagation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deep Learning]]",
      "resolved": "urn:visionflow:linked:deep-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Gradient Descent]]",
      "resolved": "urn:visionflow:linked:gradient-descent",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Gradient checkpointing is a memory-efficient [[Backpropagation]] technique for training [[Deep Learning]] models that reduces peak GPU memory consumption by storing only a selected subset of intermediate layer activations during the [[Forward Pass]], then recomputing the discarded activations on demand during the backward pass. Rather than retaining every activation in memory simultaneously (which scales linearly with network depth), the technique partitions the [[Computational Graph]] into segments and keeps only segment boundary tensors as checkpoints, paying the cost of one additional partial forward computation per training step. First formalised as a sublinear-memory algorithm, gradient checkpointing is now a standard primitive that enables training of [[Transformer]] architectures, [[Large Language Model Training]], and other deep models that would otherwise exceed available [[GPU Memory]].

- ### Overview
  - During standard [[Backpropagation]], the chain rule requires that every intermediate activation produced in the [[Forward Pass]] be available when computing gradients in the backward pass. For a network with N layers trained on a mini-batch, this means keeping O(N) activation tensors in memory simultaneously, which can exhaust [[GPU Memory]] for very deep or wide models.
  - Gradient checkpointing solves this by saving activations only at a subset of layer boundaries (the checkpoints), and discarding the activations in between. When the backward pass reaches a segment whose activations were discarded, it pauses and re-executes the forward computation for that segment alone, starting from the most recent checkpoint. The recomputed activations are used immediately and then released.
  - The classical segmented scheme achieves O(sqrt(N)) memory growth in the number of layers, at the cost of roughly one extra forward pass per batch step (i.e. 1/3 more compute overall compared to full storage). More sophisticated policies — including learned or profile-guided checkpoint selection — can shift the memory–compute trade-off to better suit specific hardware budgets.
  - The technique is architecture-agnostic: it applies to [[Convolutional Neural Network]] pipelines, [[Recurrent Neural Network]] unrolled through time (a particularly high-memory scenario), [[Transformer]] decoder stacks, and any other model expressible as a directed acyclic [[Computational Graph]].

- ### Key Mechanisms
  - **Checkpoint Placement**
    - Uniform segmentation: divide the graph into sqrt(N) segments of sqrt(N) layers each, store only segment boundary activations.
    - Non-uniform placement: profile memory footprint per layer and place checkpoints at memory peaks, minimising recomputation cost for a given budget.
    - Selective checkpointing: mark only memory-heavy operations (e.g. attention softmax in [[Transformer]] blocks) rather than entire segments.
  - **Recomputation on Demand**
    - During the backward pass, when a gradient requires a discarded activation, the framework pauses gradient flow, reruns the forward function for the enclosing segment, caches the result briefly, and resumes.
    - This relies on [[Automatic Differentiation]] engines (e.g. PyTorch autograd, JAX jit) that can separate forward and backward execution and inject custom checkpointing hooks.
  - **Segment Boundary Tensors**
    - The boundary tensors (checkpoints) are kept in device memory across the entire backward pass, so checkpoint count directly determines minimum memory floor.
    - Offloading checkpoints to CPU RAM (combined with [[Offloading]] strategies) can further reduce GPU memory at the cost of PCIe transfer latency.
  - **Memory–Compute Trade-off**
    - Full storage: O(N) memory, no recomputation overhead.
    - Gradient checkpointing (uniform): O(sqrt(N)) memory, ~33% extra compute.
    - Extreme: O(1) memory (store only input and output), recompute entire network per gradient — impractical but illustrates the continuum.
  - **Integration with Other Techniques**
    - Composable with [[Mixed Precision Training]] (FP16/BF16 reduce checkpoint tensor sizes).
    - Composable with [[Gradient Accumulation]] (allows effective batch sizes larger than device memory independently of checkpointing).
    - Used within [[Pipeline Parallelism]] to reduce bubble memory at pipeline stages.

- ### Applications and Use Cases
  - **Large Language Model Training**
    - Training [[Transformer]]-based models such as GPT-class architectures with billions of parameters requires fitting long sequence activations in memory; gradient checkpointing is applied at every transformer block boundary as standard practice.
  - **Long Context Training**
    - Training or fine-tuning with very long sequences (e.g. 32 K–1 M tokens) causes quadratic [[Attention Mechanism]] memory growth; per-block checkpointing is essential to keep memory tractable alongside techniques like [[Flash Attention]].
  - **Fine-Tuning on Consumer Hardware**
    - Parameter-efficient fine-tuning methods such as [[LoRA]] and [[QLoRA]] pair gradient checkpointing with quantisation to fit fine-tuning of 7B–70B parameter models on single consumer GPUs (24 GB VRAM class).
  - **Scientific Computing**
    - Neural PDE solvers, physics-informed networks, and neural ODEs unrolled over thousands of time steps use gradient checkpointing (sometimes called rematerialisation in the JAX/XLA ecosystem) to make time-series backpropagation feasible.
  - **Video and 3D Models**
    - Spatiotemporal models processing video frames or volumetric data accumulate activation memory proportional to the number of frames/voxels; checkpointing is applied per temporal or spatial segment.
  - **[[Recurrent Neural Network]] Training**
    - Truncated [[Backpropagation Through Time]] combined with gradient checkpointing allows training over very long sequences without exploding memory.
  - **[[Edge AI]] and Resource-Constrained Training**
    - On-device continual learning on embedded or mobile hardware leverages gradient checkpointing to keep memory within tight device constraints, bridging large-model methodology with edge deployment.

- ### Relationships
  - partOf:: [[Memory-Efficient Training]]
  - requires:: [[Backpropagation]]
  - requires:: [[Automatic Differentiation]]
  - requires:: [[Computational Graph]]
  - enables:: [[Large Language Model Training]]
  - enables:: [[Long Context Training]]
  - enables:: [[Model Scaling]]
  - uses:: [[Forward Pass]]
  - uses:: [[Recomputation]]
  - uses:: [[Memory Management]]
  - dependsOn:: [[GPU Memory]]
  - dependsOn:: [[Neural Network Architecture]]
  - supports:: [[Transformer]]
  - supports:: [[Recurrent Neural Network]]
  - supports:: [[Convolutional Neural Network]]
  - contrastsWith:: [[Gradient Accumulation]]
  - contrastsWith:: [[Mixed Precision Training]]
  - relatedTo:: [[Gradient Descent]]
  - relatedTo:: [[Deep Learning]]
  - relatedTo:: [[Pipeline Parallelism]]
  - relatedTo:: [[Model Parallelism]]
  - relatedTo:: [[Offloading]]
  - bridges-to:: [[Distributed Training]]
  - bridges-to:: [[Edge AI]]

- ### Semantic Classification
  - owl-class:: machine-learning:GradientCheckpointing
  - owl-role:: Class
  - sameAs:: [[Activation Checkpointing]]
  - sameAs:: [[Rematerialisation]]

- ### Standards and Context
  - No formal standards body governs gradient checkpointing; it is documented as a first-class feature in major framework documentation.
  - **PyTorch**: `torch.utils.checkpoint.checkpoint()` and `checkpoint_sequential()` APIs; semantics stabilised across PyTorch 1.x–2.x.
  - **JAX/XLA**: `jax.checkpoint` (formerly `jax.remat`) provides rematerialisation as a function transformation, composable with `jit`, `vmap`, and `pmap`.
  - **TensorFlow**: `tf.recompute_grad` decorator offers equivalent functionality.
  - **DeepSpeed**: ZeRO-Offload and ZeRO-Infinity stages incorporate activation checkpointing as a configurable sub-option alongside parameter and optimiser-state offloading.
  - **Megatron-LM**: applies selective activation recomputation per transformer layer as default for large-scale [[Distributed Training]] runs.
  - **Hugging Face Transformers**: `model.gradient_checkpointing_enable()` wrapper activates per-block checkpointing for all supported architectures, used routinely in [[LoRA]]/[[QLoRA]] fine-tuning recipes.
  - The underlying algorithm is described in Chen et al. 2016 ("Training Deep Networks with Sublinear Memory Cost") and Kumar et al. 2019 (optimal checkpoint placement for general DAGs).

- ### Provenance
  - sources:: Chen et al. 2016 "Training Deep Networks with Sublinear Memory Cost"; PyTorch documentation; JAX rematerialisation docs; DeepSpeed documentation
  - updated:: 2026-06-13
