public:: true

# Meta-Learning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:meta-learning",
  "@type": "Page",
  "vc:slug": "meta-learning",
  "title": "Meta-Learning",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:meta-learning",
  "@type": "Class",
  "label": "Meta-Learning",
  "definition": "Meta-Learning, colloquially described as 'learning to learn', is the study and design of machine learning systems that improve their own learning algorithms or initialisation through experience across multiple tasks, enabling rapid adaptation to new tasks with minimal data. Rather than learning a task directly, a meta-learning algorithm learns a prior or inductive bias that facilitates fast generalisation. Key paradigms include model-agnostic meta-learning (MAML), which optimises for a parameter initialisation that is close to good solutions for many tasks, and metric-based approaches such as prototypical networks that learn a task-agnostic embedding space. Meta-learning is central to few-shot learning, continual learning, and automated machine learning research.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:machine-learning-discipline-technique",
    "label": "Machine Learning Technique"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:model-agnostic-meta-learning",
        "label": "Model-Agnostic Meta-Learning"
      },
      {
        "@id": "urn:ngm:class:prototypical-networks",
        "label": "Prototypical Networks"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:training-dataset",
        "label": "Training Dataset"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:few-shot-learning",
        "label": "Few-Shot Learning"
      },
      {
        "@id": "urn:ngm:class:parameter-efficient-fine-tuning",
        "label": "Parameter-Efficient Fine-Tuning"
      },
      {
        "@id": "urn:ngm:class:continual-learning",
        "label": "Continual Learning"
      },
      {
        "@id": "urn:ngm:class:automated-machine-learning",
        "label": "Automated Machine Learning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:domain-adaptation",
        "label": "Domain Adaptation"
      },
      {
        "@id": "urn:ngm:class:fine-tuning",
        "label": "Fine Tuning"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:transfer-learning",
        "label": "Transfer Learning"
      },
      {
        "@id": "urn:ngm:class:self-supervised-learning",
        "label": "Self-Supervised Learning"
      },
      {
        "@id": "urn:ngm:class:curriculum-learning",
        "label": "Curriculum Learning"
      },
      {
        "@id": "urn:ngm:class:in-context-learning",
        "label": "In-Context Learning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:drug-discovery",
        "label": "Drug Discovery"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:learning-to-learn",
      "label": "Learning to Learn"
    },
    {
      "@id": "urn:ngm:class:few-shot-generalisation",
      "label": "Few-Shot Generalisation"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Meta-Learning is the machine learning paradigm that trains models to rapidly acquire new skills from limited data by learning across a distribution of tasks, enabling [[Transfer Learning]] and [[Domain Adaptation]] with significantly fewer examples than conventional training regimes.
- ### Relationships
  - Meta-learning is closely related to [[Transfer Learning]], but is distinguished by its explicit optimisation for fast adaptation rather than mere feature reuse. [[Self-Supervised Learning]] provides pre-training signals that complement meta-learning initialisation, whilst [[Curriculum Learning]] shares the concern with task ordering and learning dynamics. Practical applications include [[Parameter-Efficient Fine-Tuning]] methods inspired by meta-learning priors, and the design of high-quality [[Training Dataset]] collections across diverse tasks. [[Gradient Descent]] is the core optimisation primitive in gradient-based meta-learning algorithms like MAML.
- ### Content
  - The meta-learning problem was first formalised in the 1990s by Thrun, Pratt, and Schmidhuber, but gained widespread practical attention from the 2017 publication of Model-Agnostic Meta-Learning (MAML) by Finn, Abbeel, and Levine. MAML's key insight is elegantly simple: rather than training a model to solve a specific task, train it such that a small number of gradient steps on any new task leads to good performance. This requires differentiating through the inner optimisation loop, using second-order gradients that are computationally expensive but produce remarkably generalisable initialisations.

  - Three main families of meta-learning algorithms have emerged. Optimisation-based methods (MAML, Reptile) directly learn parameter initialisations or update rules. Model-based methods use recurrent or memory-augmented architectures (SNAIL, Neural Turing Machines) that encode task context in activations, enabling implicit adaptation without explicit gradient steps. Metric-based methods (Prototypical Networks, Matching Networks) learn embedding spaces where class prototypes can be computed from few examples using nearest-neighbour inference. Each family has distinct computational trade-offs and generalisation characteristics.

  - Meta-learning has had significant practical impact on few-shot image classification, few-shot natural language processing, and drug discovery. In computational drug discovery, meta-learning enables models trained on chemical property prediction tasks to adapt quickly to novel assay targets with sparse measurements—a critical capability when experimental data is expensive. In NLP, pre-trained language models can be interpreted through a meta-learning lens: their pre-training exposes them to diverse linguistic tasks, creating an initialisation from which fine-tuning to specific tasks is efficient, directly paralleling the MAML framework.

  - The relationship between meta-learning and in-context learning in large language models is an active research area. Large language models appear to perform few-shot adaptation purely through forward-pass inference on demonstration examples, without gradient updates—a form of implicit meta-learning encoded in the attention mechanism. Understanding whether this constitutes genuine meta-learning or sophisticated pattern matching has implications for how AI systems should be designed for rapid, safe deployment in novel domains with limited supervision.
