public:: true

# State Space Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:73cbfefcd4d4bc1f5cc9907d818a1e542119bb349547e73892ca48357a5258af",
  "@type": "Page",
  "vc:slug": "state-space-model",
  "title": "State Space Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:probabilistic-model",
      "vc:label": "Probabilistic Model"
    },
    {
      "@id": "urn:visionflow:linked:language-model",
      "vc:label": "Language Model"
    },
    {
      "@id": "urn:visionflow:linked:transformer",
      "vc:label": "Transformer"
    },
    {
      "@id": "urn:visionflow:linked:neural-network",
      "vc:label": "Neural Network"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "State Space Model"
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
  "@id": "urn:ngm:class:state-space-model",
  "@type": "Class",
  "label": "State Space Model",
  "definition": "A State Space Model (SSM) is a mathematical framework that represents a dynamical system through a hidden (latent) state vector whose evolution over discrete or continuous time is governed by linear or learnable recurrence equations, paired with an output equation mapping states to observations. Originally formalised in control theory and signal processing — with the Kalman filter as a canonical inference algorithm — SSMs have been re-parameterised as structured sequence layers in deep learning, enabling sub-quadratic scaling in sequence length as an alternative to self-attention. Modern deep SSM variants such as S4, Mamba, and RWKV exploit diagonal or low-rank structure in the state transition matrix to achieve hardware-efficient training and inference on long sequences.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-model-architecture",
      "label": "AI Model Architecture"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:structured-state-space-model",
      "label": "Structured State Space Model"
    },
    {
      "@id": "urn:ngm:class:linear-recurrent-model",
      "label": "Linear Recurrent Model"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:recurrent-neural-network",
        "label": "Recurrent Neural Network"
      },
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      },
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:language-model",
        "label": "Language Model"
      },
      {
        "@id": "urn:ngm:class:long-range-dependency-modelling",
        "label": "Long-Range Dependency Modelling"
      },
      {
        "@id": "urn:ngm:class:time-series-forecasting",
        "label": "Time Series Forecasting"
      },
      {
        "@id": "urn:ngm:class:audio-generation",
        "label": "Audio Generation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Probabilistic Model"
      },
      {
        "@id": "urn:ngm:class:hidden-markov-model",
        "label": "Hidden Markov Model"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:kalman-filter",
        "label": "Kalman Filter"
      },
      {
        "@id": "urn:ngm:class:linear-time-invariant-system",
        "label": "Linear Time-Invariant System"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:convolution",
        "label": "Convolution"
      },
      {
        "@id": "urn:ngm:class:selective-attention",
        "label": "Selective Attention"
      },
      {
        "@id": "urn:ngm:class:hippo-initialisation",
        "label": "HiPPO Initialisation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      },
      {
        "@id": "urn:ngm:class:self-attention",
        "label": "Self Attention"
      },
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:sequence-model",
        "label": "Sequence Model"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:control-theory",
        "label": "Control Theory"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:sequence-to-sequence-model",
        "label": "Sequence-to-Sequence Model"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:robotics-control",
        "label": "Robotics Control"
      },
      {
        "@id": "urn:ngm:class:autonomous-systems",
        "label": "Autonomous Systems"
      }
    ]
  },
  "quality": 0.75,
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
  "@id": "urn:visionflow:annotation:link-resolutions:state-space-model:8dbc67381924",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:73cbfefcd4d4bc1f5cc9907d818a1e542119bb349547e73892ca48357a5258af"
  },
  "vc:resolutions": [
    {
      "raw": "[[Probabilistic Model]]",
      "resolved": "urn:visionflow:linked:probabilistic-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Language Model]]",
      "resolved": "urn:visionflow:linked:language-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transformer]]",
      "resolved": "urn:visionflow:linked:transformer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Neural Network]]",
      "resolved": "urn:visionflow:linked:neural-network",
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
  - A State Space Model (SSM) is a mathematical framework representing a dynamical system through a hidden latent state vector that evolves over time according to linear (or learned) recurrence equations, with a separate output equation mapping that state to observable signals. Originally rooted in [[Control Theory]] and [[Signal Processing]] — with the [[Kalman Filter]] as the canonical Bayesian inference algorithm — SSMs have been re-parameterised as efficient deep-learning sequence layers that can model [[Long-Range Dependency Modelling]] at sub-quadratic cost. Modern structured variants such as S4, Mamba, and RWKV exploit [[Linear Algebra]] constraints on the transition matrix to enable hardware-efficient parallel training, positioning SSMs as a competitive alternative to [[Transformer]] architectures for [[Sequence Model]] tasks.

- ### Overview
  - State space models formalise the idea that a time-evolving system can be fully characterised by a compact internal state, regardless of how much history has elapsed. This is powerful because it decouples the complexity of the past (represented in the state) from the cost of processing new observations.
  - **Classical origins**: SSMs emerged from the work of Rudolf Kálmán in the early 1960s as a general representation for linear dynamical systems. The [[Kalman Filter]] provides closed-form optimal Bayesian updates of the hidden state given noisy observations, and underpins navigation, econometrics, and engineering control loops to this day.
  - **Deep learning adaptation**: Starting around 2021 with the S4 (Structured State Space for Sequences) paper, researchers discovered that SSMs could be parameterised and trained as neural layers. By constraining the state transition matrix to diagonal-plus-low-rank form and initialising it with the [[HiPPO Initialisation]] scheme (which captures polynomial projections of recent history), these layers can be efficiently implemented as a global [[Convolution]] during training and as a linear [[Recurrent Neural Network]] during inference.
  - **Selective SSMs (Mamba)**: A key limitation of early SSMs was that the dynamics were input-independent — the same transition matrix applied to every token. Mamba (2023) introduced input-dependent selection, making the transition parameters functions of the current token. This added an inductive bias analogous to [[Self-Attention]]'s dynamic weighting, while retaining linear inference cost.
  - **Why it matters**: The quadratic memory and compute cost of [[Self-Attention]] in [[Transformer]] models becomes prohibitive for very long sequences (DNA, audio waveforms, video, long documents). SSMs offer a path to O(L) inference at sequence length L, making them attractive for production deployment where memory footprint and latency matter.

- ### Key Components
  - **State transition equation**: `h(t) = A·h(t-1) + B·x(t)` — the recurrence that evolves the hidden state `h` given input `x` and learned matrices `A`, `B`.
  - **Output equation**: `y(t) = C·h(t) + D·x(t)` — maps the hidden state to the observable output via learned matrices `C`, `D`.
  - **Discretisation**: Continuous-time SSMs are converted to discrete-time via the zero-order hold or bilinear (Tustin) transform, producing discrete matrices `Ā`, `B̄` used during forward passes.
  - **[[HiPPO Initialisation]]**: A principled scheme to initialise the `A` matrix so that the hidden state captures Legendre polynomial projections of recent input history, enabling long-range recall from the start of training.
  - **Structured parameterisations**: Diagonal-plus-low-rank (DPLR) or fully diagonal constraints on `A` reduce the matrix-vector products to element-wise operations, enabling efficient [[Convolution]]-based training via the Fast Fourier Transform.
  - **Input-dependent gating (Mamba)**: Extends the base SSM by making `B`, `C`, and a selective scan parameter Δ functions of the input, introducing content-based routing analogous to [[Selective Attention]].
  - **Parallel scan**: The linear recurrence across a batch of tokens can be computed in O(L log L) using the parallel prefix scan algorithm, enabling GPU-friendly training without sequential bottlenecks.
  - **[[Probabilistic Model]] perspective**: In the Bayesian framing (classic SSMs), `A`, `B`, `C` define a Gaussian linear dynamical system; the [[Kalman Filter]] is the exact posterior inference algorithm. Deep SSMs retain this structure but train `A`-`D` with gradient descent rather than EM.

- ### Prominent Architectures
  - **S4 (Structured State Space Sequences)**: Introduced diagonal-plus-low-rank constraints and [[HiPPO Initialisation]], achieving strong results on the Long-Range Arena benchmark. Forms the foundation for subsequent work.
  - **Mamba**: Adds selective (input-dependent) scanning, using a hardware-aware algorithm (parallel scan with recomputation) to avoid materialising the expanded state. Competitive with [[Transformer]] models at moderate scale.
  - **RWKV**: Reformulates the recurrence as a gated linear attention mechanism, bridging SSMs and [[Recurrent Neural Network]] architectures and deployable as both an RNN (inference) and a [[Transformer]]-style parallel model (training).
  - **H3 (Hungry Hungry Hippo)**: Combines SSM layers with a single head of local [[Self-Attention]] to capture associative recall, addressing a known weakness of pure SSMs in in-context learning.
  - **Jamba**: A hybrid architecture interleaving Mamba SSM blocks with [[Transformer]] attention layers, aiming to capture the strengths of both paradigms.
  - **Mamba-2**: Refines the connection between SSMs and structured attention, unifying the selective SSM and linear attention under a single State Space Duality framework.

- ### Applications
  - **[[Language Model]] pre-training**: SSM layers can replace or augment attention in LLM architectures, with Mamba-based models demonstrated at the 1B–7B parameter scale.
  - **[[Audio Generation]]**: WaveNet-style autoregressive models and diffusion-based audio synthesisers benefit from SSMs' efficient long-sequence handling; SaShiMi applies SSMs to raw audio.
  - **[[Time Series Forecasting]]**: Classical SSMs underpin exponential smoothing, ARIMA variants, and the Kalman smoother used in econometrics and meteorological forecasting.
  - **Genomics**: SSMs process extremely long DNA sequences (tens of thousands of base pairs) where Transformer quadratic cost is prohibitive; HyenaDNA and Caduceus apply SSM principles to genomic modelling.
  - **Video understanding**: Long temporal sequences in video benefit from SSM layers that propagate information efficiently across many frames.
  - **[[Robotics Control]]**: Classical state-space representations are central to model predictive control (MPC) and extended Kalman filter-based state estimation in robotic systems; deep SSMs offer a data-driven extension.
  - **[[Autonomous Systems]]**: Sensor fusion (LIDAR, IMU, GPS) in self-driving vehicles relies on Kalman filter variants operating as SSMs over continuous-time dynamics.
  - **Medical time series**: EEG, ECG, and physiological signal processing use SSMs for filtering, anomaly detection, and causal inference.

- ### Relationships
  - subClassOf:: [[Sequence Model]]
  - contrastsWith:: [[Transformer]]
  - contrastsWith:: [[Self-Attention]]
  - contrastsWith:: [[Convolutional Neural Network]]
  - requires:: [[Recurrent Neural Network]]
  - requires:: [[Linear Algebra]]
  - requires:: [[Signal Processing]]
  - enables:: [[Language Model]]
  - enables:: [[Long-Range Dependency Modelling]]
  - enables:: [[Time Series Forecasting]]
  - enables:: [[Audio Generation]]
  - dependsOn:: [[Probabilistic Model]]
  - dependsOn:: [[Hidden Markov Model]]
  - implements:: [[Kalman Filter]]
  - implements:: [[Linear Time-Invariant System]]
  - uses:: [[Convolution]]
  - uses:: [[Selective Attention]]
  - uses:: [[HiPPO Initialisation]]
  - relatedTo:: [[Neural Network]]
  - relatedTo:: [[Control Theory]]
  - relatedTo:: [[Deep Learning]]
  - relatedTo:: [[Sequence-to-Sequence Model]]
  - bridges-to:: [[Robotics Control]]
  - bridges-to:: [[Autonomous Systems]]

- ### Standards & Context
  - SSMs do not yet have a dedicated standardisation body or benchmark specification, but they are evaluated against the **Long-Range Arena (LRA)** benchmark suite, which tests sequence models on pathfinder, ListOps, text classification, retrieval, and image tasks at sequence lengths of 1,000–16,000 tokens.
  - The **RWKV community** maintains an open specification for RWKV-series architectures under the Apache 2.0 licence, providing a reference implementation that bridges SSMs and [[Transformer]] tooling.
  - Classical SSMs (Kalman filtering, linear-quadratic regulators) are formalised in IEEE standards for [[Control Theory]] and [[Signal Processing]], including IEEE 1588 (precision time protocol) applications in distributed control.
  - The [[Deep Learning]] research community has converged on the term "structured state space model" (S4 and descendants) to distinguish deep SSMs from their classical control-theoretic ancestors, though both share the same mathematical core.
  - Hugging Face Transformers library (from v4.35 onwards) includes Mamba and related SSM architectures under the `mamba`, `jamba`, and `falcon-mamba` model classes, providing de facto standardised APIs for [[Language Model]] practitioners.

- ### Provenance
  - sources:: Gu et al. (2021) "Efficiently Modeling Long Sequences with Structured State Spaces"; Gu & Dao (2023) "Mamba: Linear-Time Sequence Modeling with Selective State Spaces"; Kalman (1960) "A New Approach to Linear Filtering and Prediction Problems"
  - updated:: 2026-06-13
