public:: true

# Continual Learning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:279ccd490f46125b43bdb4809c8d5f8011027153b0fc4c0a805c854c9b22c910",
  "@type": "Page",
  "vc:slug": "continual-learning",
  "title": "Continual Learning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:online-learning",
      "vc:label": "Online Learning"
    },
    {
      "@id": "urn:visionflow:linked:transfer-learning",
      "vc:label": "Transfer Learning"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning-domain",
      "vc:label": "Machine Learning Domain"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Continual Learning"
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
  "@id": "urn:ngm:class:continual-learning",
  "@type": "Class",
  "label": "Continual Learning",
  "definition": "Continual Learning is a machine learning paradigm in which a model sequentially learns from a non-stationary stream of tasks or data distributions while retaining competence on previously acquired knowledge. It directly confronts catastrophic forgetting — the tendency of neural networks to overwrite earlier representations when updated on new training distributions. Core strategies span regularisation-based protection of critical parameters, rehearsal-based replay of past exemplars or synthetic surrogates, and architectural methods that expand or isolate network capacity per task. The field spans both supervised and reinforcement learning settings and is fundamental wherever data arrives incrementally and retraining from scratch is computationally or commercially infeasible.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning",
      "label": "Machine Learning"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:lifelong-learning",
      "label": "Lifelong Learning"
    },
    {
      "@id": "urn:ngm:class:incremental-learning",
      "label": "Incremental Learning"
    },
    {
      "@id": "urn:ngm:class:sequential-learning",
      "label": "Sequential Learning"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:elastic-weight-consolidation",
        "label": "Elastic Weight Consolidation"
      },
      {
        "@id": "urn:ngm:class:experience-replay",
        "label": "Experience Replay"
      },
      {
        "@id": "urn:ngm:class:progressive-neural-networks",
        "label": "Progressive Neural Networks"
      },
      {
        "@id": "urn:ngm:class:knowledge-distillation",
        "label": "Knowledge Distillation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:online-learning",
        "label": "Online Learning"
      },
      {
        "@id": "urn:ngm:class:task-incremental-learning",
        "label": "Task-Incremental Learning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transfer-learning",
        "label": "Transfer Learning"
      },
      {
        "@id": "urn:ngm:class:few-shot-learning",
        "label": "Few-Shot Learning"
      },
      {
        "@id": "urn:ngm:class:autonomous-agents",
        "label": "Autonomous Agents"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:neural-networks",
        "label": "Neural Networks"
      },
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:regularisation",
        "label": "Regularisation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:catastrophic-forgetting",
        "label": "Catastrophic Forgetting"
      },
      {
        "@id": "urn:ngm:class:batch-learning",
        "label": "Batch Learning"
      },
      {
        "@id": "urn:ngm:class:multi-task-learning",
        "label": "Multi-Task Learning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:memory-replay",
        "label": "Memory Replay"
      },
      {
        "@id": "urn:ngm:class:generative-adversarial-networks",
        "label": "Generative Adversarial Networks"
      },
      {
        "@id": "urn:ngm:class:meta-learning",
        "label": "Meta-Learning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:domain-adaptation",
        "label": "Domain Adaptation"
      },
      {
        "@id": "urn:ngm:class:curriculum-learning",
        "label": "Curriculum Learning"
      },
      {
        "@id": "urn:ngm:class:neural-plasticity",
        "label": "Neural Plasticity"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:continual-learning:73e87299af1b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:279ccd490f46125b43bdb4809c8d5f8011027153b0fc4c0a805c854c9b22c910"
  },
  "vc:resolutions": [
    {
      "raw": "[[Online Learning]]",
      "resolved": "urn:visionflow:linked:online-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transfer Learning]]",
      "resolved": "urn:visionflow:linked:transfer-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Domain]]",
      "resolved": "urn:visionflow:linked:machine-learning-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
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
  - Continual Learning is a sub-discipline of [[Machine Learning]] concerned with training models incrementally across a non-stationary sequence of tasks or data distributions, while preserving previously acquired knowledge. It directly addresses [[Catastrophic Forgetting]], the failure mode in which [[Neural Networks]] overwrite earlier weight configurations when trained on new data, causing severe performance degradation on past tasks. The field synthesises ideas from [[Transfer Learning]], [[Online Learning]], and cognitive neuroscience models of [[Neural Plasticity]], seeking to build systems that accumulate competence over time without requiring full retraining on all historical data.

- ### Overview
  - Continual Learning, also known as Lifelong Learning or Incremental Learning, addresses a fundamental limitation of standard machine learning pipelines: models trained offline on fixed datasets cannot easily accommodate new information without retraining from scratch.
  - The core challenge arises from [[Gradient Descent]] — when a model is updated to minimise loss on new data, it risks overwriting the parameters that encoded past knowledge. This is [[Catastrophic Forgetting]], first characterised in connectionist systems by McCloskey and Cohen (1989) and studied extensively in the context of deep neural networks.
  - The field distinguishes several learning scenarios:
    - **Task-Incremental Learning**: the model is told which task is active at inference time.
    - **Domain-Incremental Learning**: the task structure is fixed but data distributions shift over time.
    - **Class-Incremental Learning**: the model must identify both which class and which task an input belongs to, with no task identity given at inference — the hardest regime.
  - Importance grows as deployed AI systems must remain relevant in dynamic real-world environments rather than static benchmarks.

- ### Key Mechanisms
  - #### Regularisation-Based Methods
    - Protect important parameters from large updates when learning new tasks.
    - **[[Elastic Weight Consolidation]] (EWC)**: penalises changes to parameters that were important for previous tasks, estimated via the Fisher information matrix.
    - **Synaptic Intelligence (SI)**: online estimation of parameter importance during training, accumulating contribution to loss reduction.
    - **Learning Without Forgetting (LwF)**: applies [[Knowledge Distillation]] from the old model's output as a soft regulariser when training on new tasks.
  - #### Rehearsal-Based Methods
    - Maintain a memory buffer of past examples and interleave them with new training data.
    - **[[Experience Replay]]**: stores a small episodic memory of past exemplars, replayed during new-task training.
    - **Generative Replay**: uses [[Generative Adversarial Networks]] or [[Variational Autoencoders]] to synthesise pseudo-exemplars of past tasks, avoiding direct data storage.
    - **Dark Experience Replay (DER++)**: combines distillation on stored logits with experience replay for improved stability.
  - #### Architecture-Based Methods
    - Dedicate separate network capacity to each task to avoid parameter conflicts.
    - **[[Progressive Neural Networks]]**: lateral connections from frozen past columns into a new column per task; immunity to forgetting but grows linearly with task count.
    - **PackNet**: iteratively prunes and re-uses freed parameters for new tasks.
    - **Dynamic Expandable Networks**: selectively add neurons when existing capacity is insufficient.
  - #### Meta-Learning Approaches
    - Learn an initialisation or update rule that generalises across the task sequence.
    - **[[Meta-Learning]] (MAML-derived)**: produces an initialisation from which new tasks can be learned with minimal interference.
    - **Online-Aware Meta-Learning (OML)**: explicitly trains an inner loop update that preserves previously learned representations.

- ### Applications / Use Cases
  - **Robotics**: robots operating in changing environments must acquire new manipulation skills and object categories without forgetting prior capabilities. Bridges to [[Robotics]] and embodied AI.
  - **Natural Language Processing**: large language models fine-tuned on domain-specific corpora face catastrophic forgetting of general capabilities; continual learning methods stabilise sequential fine-tuning.
  - **Medical Imaging**: new disease categories or imaging modalities are added over time; retraining from scratch on aggregated data is often prohibited by data governance constraints.
  - **Autonomous Driving**: perception systems encounter novel scenarios, weather conditions, and geographic regions after deployment; continual adaptation without forgetting core driving competencies is critical.
  - **[[Edge Computing]] and IoT**: devices with limited bandwidth cannot upload all data to the cloud; on-device continual learning enables local adaptation.
  - **Recommendation Systems**: user preferences and item catalogues shift continuously; online models using continual learning update without discarding prior behavioural signals.
  - **[[Federated Learning]]**: distributed clients with heterogeneous, non-i.i.d. data streams benefit from continual learning techniques to handle local distribution shifts across communication rounds.
  - **[[Reinforcement Learning]] agents**: policies trained sequentially on task curricula must not forget earlier sub-policies when learning harder tasks — relevant to game-playing agents and process-control systems.

- ### Relationships
  - subClassOf:: [[Machine Learning]]
  - hasPart:: [[Elastic Weight Consolidation]]
  - hasPart:: [[Experience Replay]]
  - hasPart:: [[Progressive Neural Networks]]
  - hasPart:: [[Knowledge Distillation]]
  - requires:: [[Online Learning]]
  - requires:: [[Task-Incremental Learning]]
  - enables:: [[Transfer Learning]]
  - enables:: [[Few-Shot Learning]]
  - enables:: [[Autonomous Agents]]
  - dependsOn:: [[Neural Networks]]
  - dependsOn:: [[Gradient Descent]]
  - dependsOn:: [[Regularisation]]
  - contrastsWith:: [[Catastrophic Forgetting]]
  - contrastsWith:: [[Batch Learning]]
  - contrastsWith:: [[Multi-Task Learning]]
  - uses:: [[Memory Replay]]
  - uses:: [[Generative Adversarial Networks]]
  - uses:: [[Meta-Learning]]
  - supports:: [[Reinforcement Learning]]
  - supports:: [[Edge Computing]]
  - relatedTo:: [[Domain Adaptation]]
  - relatedTo:: [[Curriculum Learning]]
  - relatedTo:: [[Neural Plasticity]]
  - bridges-to:: [[Robotics]]
  - bridges-to:: [[Federated Learning]]

- ### Taxonomy and Evaluation
  - Evaluation benchmarks include **Split-MNIST**, **Permuted-MNIST**, **Split-CIFAR-100**, and **CORe50** (a real-world object recognition benchmark designed explicitly for continual learning).
  - Standard metrics:
    - **Average Accuracy (AA)**: mean test accuracy across all tasks after full training.
    - **Backward Transfer (BWT)**: measures forgetting — negative values indicate degradation of past tasks.
    - **Forward Transfer (FWT)**: measures whether learning past tasks aids future tasks.
    - **Intransigence**: measures the model's inability to learn new tasks due to rigidity from regularisation.
  - Continual learning intersects with [[Domain Adaptation]] when task identity is implicit and distributions shift gradually.
  - The GEM (Gradient Episodic Memory) framework provides theoretical guarantees on backward transfer by projecting gradient updates to not increase loss on stored past exemplars.

- ### Standards & Context
  - No formal ISO or IEEE standards govern continual learning specifically; it is an active academic research area with significant industrial uptake in robotics and NLP.
  - The **ContinualAI** community (continuai.ai) maintains open benchmarks, tutorials, and the **Avalanche** framework — a PyTorch-based library providing a unified API for continual learning experiments.
  - The **CVPR Continual Learning in Computer Vision** workshop series (from 2020 onwards) is a key venue.
  - Closely related to **DARPA Lifelong Learning Machines (L2M)** programme, which funded research into biologically inspired continual learning.
  - Industry relevance: large-scale deployment by Meta (sequence of fine-tuning runs on LLaMA), Google (continual training of production recommendation models), and autonomous vehicle companies.
  - Privacy regulations (GDPR right to erasure) intersect with continual learning: selective forgetting or "machine unlearning" is an adjacent problem.

- ### Provenance
  - sources:: Kirkpatrick et al. 2017 (EWC), Rebuffi et al. 2017 (iCaRL), van de Ven & Tolias 2019 (benchmark taxonomy), Lomonaco et al. 2021 (Avalanche)
  - updated:: 2026-06-13
