public:: true

# adam optimiser
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:107125ffbb1f2fa798fc80d3d0788eb03a95916a95d482dcc5f3771f94df9a83",
  "@type": "Page",
  "vc:slug": "adam-optimiser",
  "title": "adam optimiser",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:adam-optimiser",
  "@type": "Class",
  "label": "Adam Optimiser",
  "definition": "The Adam optimiser (Adaptive Moment Estimation) is a first-order gradient-based optimisation algorithm that computes per-parameter adaptive learning rates by maintaining exponentially decaying moving averages of past gradients (first moment) and past squared gradients (second moment), with bias correction applied in early iterations. It synthesises the momentum-tracking behaviour of gradient descent with momentum and the per-parameter scaling of RMSProp, making it robust to sparse gradients, non-stationary objectives, and high-dimensional parameter spaces. Introduced by Kingma and Ba (2014), Adam has become the de-facto default optimiser for training transformer-based large language models, diffusion models, and deep neural networks across most domains. Key variants including AdamW, Adan, and AdaFactor extend it with decoupled weight decay, Nesterov momentum, and memory-efficient factorisation respectively.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:gradient-descent",
      "label": "Gradient Descent"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:backpropagation", "label": "Backpropagation"},
      {"@id": "urn:ngm:class:loss-function", "label": "Loss Function"},
      {"@id": "urn:ngm:class:stochastic-gradient-descent", "label": "Stochastic Gradient Descent"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:transfer-learning", "label": "Transfer Learning"},
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine-Tuning"},
      {"@id": "urn:ngm:class:hyperparameter-optimisation", "label": "Hyperparameter Optimisation"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:first-moment-estimate", "label": "First Moment Estimate"},
      {"@id": "urn:ngm:class:second-moment-estimate", "label": "Second Moment Estimate"},
      {"@id": "urn:ngm:class:bias-correction", "label": "Bias Correction"},
      {"@id": "urn:ngm:class:learning-rate-schedule", "label": "Learning Rate Schedule"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:adaptive-learning-rate", "label": "Adaptive Learning Rate"},
      {"@id": "urn:ngm:class:momentum-optimisation", "label": "Momentum Optimisation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:mini-batch-gradient", "label": "Mini-Batch Gradient"},
      {"@id": "urn:ngm:class:exponential-moving-average", "label": "Exponential Moving Average"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:rmsprop", "label": "RMSProp"},
      {"@id": "urn:ngm:class:adagrad", "label": "Adagrad"},
      {"@id": "urn:ngm:class:sgd-with-momentum", "label": "SGD with Momentum"},
      {"@id": "urn:ngm:class:lion-optimiser", "label": "Lion Optimiser"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:adamw", "label": "AdamW"},
      {"@id": "urn:ngm:class:adafactor", "label": "AdaFactor"},
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"},
      {"@id": "urn:ngm:class:weight-decay", "label": "Weight Decay"},
      {"@id": "urn:ngm:class:gradient-clipping", "label": "Gradient Clipping"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:adaptive-moment-estimation", "label": "Adaptive Moment Estimation"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - The Adam optimiser (Adaptive Moment Estimation) is a first-order, gradient-based [[Optimisation Algorithm]] that computes per-parameter adaptive learning rates by tracking exponentially decaying moving averages of past [[Gradient Descent]] values (first moment) and past squared gradients (second moment). It synthesises the momentum-preserving behaviour of [[Stochastic Gradient Descent]] with Nesterov-style lookahead and the per-parameter scaling of [[RMSProp]], correcting for initialisation bias so that early training steps are not dominated by zero-biased estimates. Its combination of robustness to noisy, sparse gradients and ease of tuning has made it the foundational optimiser underpinning virtually all modern [[Deep Learning]] workflows, from vision models and [[Transformer Architecture]] pre-training to [[Reinforcement Learning]] policy gradient methods.

- ### Overview
  - Adam was introduced by Diederik Kingma and Jimmy Ba in their 2014 paper "Adam: A Method for Stochastic Optimization." The algorithm addresses two key weaknesses of plain stochastic gradient descent: the single global learning rate that must be manually tuned and the slow, erratic convergence caused by gradient noise. By maintaining separate adaptive learning rates for each model parameter, Adam substantially reduces the need for learning rate search.
  - The algorithm occupies a class of optimisers known as adaptive gradient methods, sitting alongside [[Adagrad]], [[RMSProp]], and [[Adadelta]]. Unlike Adagrad, which monotonically shrinks the learning rate and can stall on long training runs, Adam's exponentially weighted averages ensure that old gradient information decays, keeping the effective learning rate from collapsing.
  - Adam's dominance is clearest in [[Natural Language Processing]] and [[Large Language Model]] training. Models such as BERT, GPT-series, T5, and LLaMA all use Adam or its variant [[AdamW]] as the primary training optimiser, and diffusion-based generative image models likewise rely on it. Despite occasional reports of Adam generalising less well than [[SGD with Momentum]] on certain image classification benchmarks, its breadth of applicability keeps it the default choice in practitioner toolkits.

- ### Key Mechanisms
  - **First Moment Estimate (m_t)**
    - Tracks an exponentially decaying average of past gradients; equivalent to a momentum term that smooths out noisy gradient directions.
    - Controlled by hyperparameter β₁ (typically 0.9), which determines how quickly older gradient information is forgotten.
  - **Second Moment Estimate (v_t)**
    - Tracks an exponentially decaying average of squared gradients; measures gradient magnitude per parameter to scale the step size inversely.
    - Controlled by β₂ (typically 0.999), retaining long-horizon gradient variance information.
  - **Bias Correction**
    - Because m and v are initialised at zero, early iterations produce systematically underestimated moment values. Adam divides each estimate by (1 − β^t) to correct this, preventing unduly small updates at the start of training.
    - This is a key design differentiator that was absent from earlier adaptive methods such as [[RMSProp]].
  - **Per-Parameter Learning Rate**
    - The effective per-parameter step is α · m̂_t / (√v̂_t + ε), where α is the global learning rate, m̂ and v̂ are the bias-corrected moments, and ε (typically 1e-8) prevents division by zero.
    - Parameters with high historical gradient variance receive smaller updates; those with consistently small gradients receive relatively larger nudges.
  - **Hyperparameters**
    - α (learning rate): typically 1e-3 for general tasks; reduced to 1e-4 or lower for fine-tuning pre-trained models.
    - β₁: default 0.9 (first moment decay).
    - β₂: default 0.999 (second moment decay).
    - ε: default 1e-8 (numerical stability).

- ### Variants and Extensions
  - **[[AdamW]]** — Decouples [[Weight Decay]] from the gradient-update step (proposed by Loshchilov and Hutter, 2017). Standard Adam absorbs L2 regularisation into the gradient, which distorts the adaptive scaling; AdamW corrects this and has become the standard variant for [[Large Language Model]] pre-training and [[Fine-Tuning]].
  - **[[AdaFactor]]** — A memory-efficient factorisation of the second moment matrix, replacing the full v_t vector with a low-rank approximation. Critical for training models with very large embedding tables where storing a full second moment per parameter is prohibitive.
  - **Adan (Adaptive Nesterov Momentum)** — Incorporates Nesterov look-ahead into the first and second moment estimates, improving convergence speed on some vision tasks.
  - **[[Lion Optimiser]]** — Uses only the sign of the momentum estimate (EvoLved Sign Momentum), trading precision for memory and compute efficiency; claimed competitive with AdamW on several large-scale tasks.
  - **Sophia** — A second-order diagonal approximation that uses Hessian curvature information to precondition updates; achieves faster wall-clock convergence for some language model settings at the cost of additional compute per step.
  - **8-bit Adam** — Quantises the first and second moment vectors to 8-bit precision using block-wise quantisation, reducing optimiser-state memory footprint substantially without degrading training accuracy; widely used in memory-constrained [[Fine-Tuning]] scenarios.

- ### Applications and Use Cases
  - **Large Language Model Pre-Training** — GPT, LLaMA, Mistral, Gemma, and similar models are trained with AdamW. The adaptive per-parameter rates handle the heterogeneous gradient scales across embedding layers, attention heads, and feed-forward blocks.
  - **Vision Transformers (ViT)** — Image classification and [[Diffusion Model]] training pipelines rely on Adam/AdamW to navigate the high-dimensional loss landscapes of patch-based attention models.
  - **Diffusion Models** — Stable Diffusion, DALL·E, Imagen, and related generative image architectures are trained with AdamW, often with cosine annealing [[Learning Rate Schedule]].
  - **[[Reinforcement Learning]]** — Policy gradient algorithms (PPO, A3C, SAC) use Adam to update actor and critic networks, benefiting from its robustness to non-stationary reward signals.
  - **[[Federated Learning]]** — Adapted variants of Adam are used in privacy-preserving distributed training where gradient information is locally computed across many devices before aggregation; the adaptivity helps compensate for non-i.i.d. data distributions.
  - **Scientific Machine Learning** — Physics-Informed Neural Networks (PINNs) and neural ODE training typically default to Adam because convergence is sensitive to gradient scale mismatches across different physics constraints.
  - **[[Transfer Learning]] and [[Fine-Tuning]]** — Parameter-efficient fine-tuning methods (LoRA, QLoRA, adapters) pair AdamW with very low learning rates and gradient clipping to safely update a small fraction of pre-trained weights.
  - **Natural Language Processing NLP Tasks** — Text classification, named-entity recognition, question answering, and summarisation fine-tuning all use Adam-family optimisers as the universal default.

- ### Limitations
  - **Generalisation Gap** — Several studies have shown that SGD with momentum can generalise better than Adam on image classification tasks (notably CIFAR and ImageNet), potentially due to Adam's sharp minima convergence properties.
  - **Memory Overhead** — Storing two moment vectors (m and v) doubles the optimiser-state memory compared to SGD, making Adam expensive for very large models without quantisation (8-bit Adam, AdaFactor) or alternative formulations.
  - **Hyperparameter Sensitivity to ε** — In practice, the ε term can interact badly with very small or very large gradient scales, requiring adjustment (e.g., ε = 1e-6 for mixed-precision training).
  - **Non-Convergence in Some Convex Settings** — Reddi et al. (2018) demonstrated that the original Adam can fail to converge in certain convex problems due to unbounded second moment accumulation, leading to the AMSGrad variant that uses a running maximum of v_t.
  - **Coupled L2 Regularisation** — The original Adam formulation conflates L2 regularisation with the adaptive update, which AdamW corrects; using vanilla Adam with L2 regularisation is now considered a practitioner error.

- ### Relationships
  - requires:: [[Backpropagation]]
  - requires:: [[Loss Function]]
  - requires:: [[Stochastic Gradient Descent]]
  - enables:: [[Model Training]]
  - enables:: [[Deep Learning]]
  - enables:: [[Transfer Learning]]
  - enables:: [[Fine-Tuning]]
  - enables:: [[Hyperparameter Optimisation]]
  - hasPart:: [[First Moment Estimate]]
  - hasPart:: [[Second Moment Estimate]]
  - hasPart:: [[Bias Correction]]
  - hasPart:: [[Learning Rate Schedule]]
  - implements:: [[Adaptive Learning Rate]]
  - implements:: [[Momentum Optimisation]]
  - uses:: [[Mini-Batch Gradient]]
  - uses:: [[Exponential Moving Average]]
  - contrastsWith:: [[RMSProp]]
  - contrastsWith:: [[Adagrad]]
  - contrastsWith:: [[SGD with Momentum]]
  - contrastsWith:: [[Lion Optimiser]]
  - relatedTo:: [[AdamW]]
  - relatedTo:: [[AdaFactor]]
  - relatedTo:: [[Neural Network]]
  - relatedTo:: [[Transformer Architecture]]
  - relatedTo:: [[Weight Decay]]
  - relatedTo:: [[Gradient Clipping]]
  - bridges-to:: [[Reinforcement Learning]]
  - bridges-to:: [[Federated Learning]]

- ### Standards and Context
  - Adam is not governed by a formal standards body but has been codified as a reproducible algorithm in the foundational literature (Kingma & Ba, arXiv:1412.6980). Reference implementations exist in all major deep learning frameworks: PyTorch (`torch.optim.Adam`, `torch.optim.AdamW`), TensorFlow/Keras (`tf.keras.optimizers.Adam`), and JAX/Optax (`optax.adam`, `optax.adamw`).
  - The [[Machine Learning]] community treats Adam's default hyperparameters (β₁=0.9, β₂=0.999, ε=1e-8) as near-universal starting points, with learning rate and weight decay being the primary tunable parameters in practice.
  - Within the [[Large Language Model]] ecosystem, training recipes published by model developers (Meta LLaMA, Google Gemma, Mistral AI) uniformly specify AdamW with specific β₂ and learning rate warm-up schedules as reproducibility artefacts.
  - The Hugging Face Transformers library exposes Adam/AdamW as the default training optimiser through the `TrainingArguments` API, effectively standardising it across a large fraction of the practitioner community.
  - Benchmark competitions such as MLPerf Training use Adam or AdamW as the mandated or reference optimiser for tasks including BERT pre-training and image segmentation.

- ### Provenance
  - sources:: Kingma, D. P. & Ba, J. (2014). Adam: A Method for Stochastic Optimization. arXiv:1412.6980. Loshchilov, I. & Hutter, F. (2017). Decoupled Weight Decay Regularization. arXiv:1711.05101. Reddi, S. J. et al. (2018). On the Convergence of Adam and Beyond. ICLR 2018.
  - updated:: 2026-06-13
