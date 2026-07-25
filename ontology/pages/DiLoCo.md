public:: true

# DiLoCo
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:di-lo-co",
  "@type": "Page",
  "vc:slug": "di-lo-co",
  "title": "DiLoCo",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:di-lo-co",
  "@type": "Class",
  "label": "DiLoCo",
  "definition": "DiLoCo (Distributed Low-Communication training) is a method for training large language models across loosely connected, geographically distributed compute clusters with minimal inter-node communication. Workers perform many local optimisation steps before periodically synchronising via an outer optimiser, drastically reducing the bandwidth and latency demands of conventional data-parallel training. It enables collaborative model training over the public internet rather than within a single tightly coupled datacentre.",
  "domain": "ai",
  "maturity": "active-research",
  "subClassOf": [
    {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"},
    {"@id": "urn:ngm:class:distributed-ai-training", "label": "Distributed AI Training"},
    {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:local-sgd", "label": "Local SGD"},
      {"@id": "urn:ngm:class:pseudo-gradient-aggregation", "label": "Pseudo-Gradient Aggregation"},
      {"@id": "urn:ngm:class:collective-communication", "label": "Collective Communication"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:adam-optimiser", "label": "Adam Optimiser"},
      {"@id": "urn:ngm:class:collective-communication", "label": "Collective Communication"},
      {"@id": "urn:ngm:class:checkpoint-recovery", "label": "Checkpoint Recovery"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralised-ai", "label": "Decentralised AI"},
      {"@id": "urn:ngm:class:compute-democratisation", "label": "Compute Democratisation"},
      {"@id": "urn:ngm:class:collaborative-model-ownership", "label": "Collaborative Model Ownership"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:prime-intellect", "label": "Prime Intellect"},
      {"@id": "urn:ngm:class:distributed-ai-training", "label": "Distributed AI Training"},
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"},
      {"@id": "urn:ngm:class:bittensor", "label": "Bittensor"}
    ]
  },
  "quality": 0.95,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "OntologyEnrichment"
  }
}
```

- ### Definition
  - DiLoCo (Distributed Low-Communication training) is a two-loop optimisation algorithm for training [[Large Language Models]] and other large neural networks across geographically distributed, loosely coupled compute clusters that communicate orders of magnitude less frequently than conventional synchronous [[Distributed Training]] paradigms require, making large-scale model training feasible over high-latency, bandwidth-constrained links including commodity public internet connections.
  - Introduced by researchers at Google DeepMind in 2023 (Douillard, Feng, Rame, Evci, Zico Kolter, and Garg; arXiv:2311.08105), DiLoCo decouples the training process into an inner loop and an outer loop. Each participating worker — a cluster of GPUs in a separate data centre, a cloud region, a university compute cluster, or a commodity node on the public internet — independently runs many steps of a local inner optimiser (AdamW) on its own data shard, accumulating parameter trajectory information into a quantity termed the pseudo-gradient, defined as the signed difference between the local post-update weights and the shared global weights at the start of the inner epoch.
  - At infrequent synchronisation points separated by H = 100 to 500 or more inner optimisation steps, the pseudo-gradients from all workers are averaged via an all-reduce collective, and the resulting aggregate pseudo-gradient is applied by a shared outer optimiser — originally SGD with Nesterov momentum — to update the global model state. This updated global state is then broadcast back to all workers as the starting point for the next inner loop epoch.
  - The architecture tolerates high latency between workers, heterogeneous node capabilities, unreliable connectivity, and transient worker failures, because the outer synchronisation period can be stretched to hundreds or thousands of inner steps without catastrophic convergence degradation. DiLoCo on eight workers has been empirically shown to match the convergence quality of fully synchronous data-parallel training while communicating approximately 500 times less frequently.
  - The open-source [[Prime Intellect]] OpenDiLoCo implementation (arXiv:2407.07852) extended the validated model scale to 1.1 billion parameters trained across two continents and three countries with 90-95% compute utilisation on commodity internet connections, demonstrating that the method is practically viable beyond controlled data centre environments.
  - Subsequent research has produced the DiLoCo variant family: Streaming DiLoCo (2025) achieves 100x bandwidth reduction versus synchronous data parallelism through communication-computation overlap and 4-bit quantisation; Decoupled DiLoCo (Google DeepMind, 2026) trains 12B parameter models across four cloud regions with 88% goodput under hardware failures; DiLoCoX (2026) integrates tensor parallelism within worker islands; HeLoCo (2026) addresses asynchronous heterogeneous settings with non-IID data; MuLoCo (2025) replaces AdamW inner optimiser with the Muon orthogonal update rule for improved convergence; and SNOO (2025) provides principled analysis and generalisation of the Nesterov outer optimiser.
  - DiLoCo is a cornerstone of the emerging [[Decentralised AI]] training paradigm pursued by [[Prime Intellect]], [[Bittensor]], and university consortium-based compute-sharing initiatives, representing a fundamental departure from the tightly synchronised interconnect assumptions of standard [[Data Parallelism]], and opening the door to training on geographically dispersed, heterogeneous, and volunteer compute pools at scales previously confined to hyperscaler data centres.

- ### Semantic Classification
  - owl-class:: ai:DiLoCo
  - owl-role:: LearningParadigm | OptimisationAlgorithm | DistributedProtocol | TrainingMethod
  - owl-inferred:: ai:LowCommunicationTraining, ai:DecentralisedTraining, ai:PseudoGradientOptimisation, ai:FaultTolerantTraining, ai:InternetScaleTraining, ai:HeterogeneousClusterTraining
  - belongs-to-domain:: [[Distributed AI Training]]
  - implemented-in-layer:: [[AlgorithmLayer]]

- ### Relationships
  - is-subclass-of:: [[Distributed Training]], [[Distributed AI Training]], [[Distributed Computing]], [[Federated Learning]]
  - has-part:: [[Local SGD]], [[Pseudo-Gradient Aggregation]], [[Collective Communication]], [[Checkpoint Recovery]], [[Gradient Compression]], [[Synchronisation Barrier]], [[Global Model Broadcast]]
  - requires:: [[Adam Optimiser]], [[Nesterov Momentum]], [[Collective Communication]], [[Checkpoint Recovery]], [[Distributed Computing]], [[Gradient Descent]], [[Large Language Models]], [[Bandwidth Optimization]]
  - enables:: [[Decentralised AI]], [[Compute Democratisation]], [[Collaborative Model Ownership]], [[Federated Edge Learning]], [[Decentralised Foundation Model Training]], [[Decentralised Science]], [[Internet-Scale Training]]
  - implements:: [[Local SGD]], [[Federated Learning]], [[Data Parallelism]], [[Gradient Descent]], [[Nesterov Momentum]]
  - depends-on:: [[Large Language Models]], [[Distributed Computing]], [[Gradient Descent]], [[Collective Communication]], [[Adam Optimiser]], [[Asynchronous Communication]], [[Communication Protocol]]
  - supports:: [[Prime Intellect]], [[Decentralised Foundation Model Training]], [[Decentralised Science]], [[Compute Exchange]], [[Bittensor]], [[Collaborative Model Ownership]], [[Federated Edge Learning]]
  - uses:: [[Adam Optimiser]], [[Nesterov Momentum]], [[Collective Communication]], [[Gradient Compression]], [[Checkpoint Recovery]], [[Bandwidth Optimization]], [[Communication Protocol]], [[Asynchronous Communication]]
  - contrasts-with:: [[Synchronous Data Parallelism]], [[Centralised Training]], [[Pipeline Parallelism]], [[Tensor Parallelism]], [[ZeRO Sharding]]
  - related-to:: [[Federated Learning]], [[Asynchronous RL]], [[Gradient Compression]], [[Communication Protocol]], [[Bandwidth Optimization]], [[AI Energy Optimisation]], [[Decentralised AI]], [[Bittensor]], [[Federated Edge Learning]], [[Distributed Training]], [[Collective Communication]], [[Asynchronous Communication]], [[Adam Optimizer]], [[AI Energy Scarcity]]
  - standardized-by:: [[arXiv Preprint Standards]], [[Apache 2.0 Open Source Licence]]

- ### Content

  ## Compositional Relationships (Components)
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:hasPart ai:InnerOptimiser))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:hasPart ai:OuterOptimiser))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:hasPart ai:PseudoGradientAggregation))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:hasPart ai:LocalSGD))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:hasPart ai:GradientCompression))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:hasPart ai:SynchronisationBarrier))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:hasPart ai:GlobalModelBroadcast))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:hasPart ai:CheckpointRecovery))

  ## Dependency Relationships
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:requires ai:AdamWOptimiser))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:requires ai:NesterovMomentum))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:requires ai:CollectiveCommunication))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:requires ai:CheckpointRecovery))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:requires ai:DistributedComputing))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:requires ai:GradientDescent))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:requires ai:LargeLanguageModels))

  ## Capability Relationships
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:enables ai:DecentralisedAI))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:enables ai:InternetScaleTraining))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:enables ai:ComputeDemocratisation))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:enables ai:CollaborativeModelOwnership))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:enables ai:FaultTolerantTraining))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:enables ai:HeterogeneousNodeTraining))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:enables ai:FederatedEdgeLearning))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:enables ai:OpenSourceModelTraining))

  ## Implementation Relationships
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:implements ai:LocalSGD))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:implements ai:FederatedLearning))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:implements ai:DataParallelism))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:implements ai:PseudoGradientOptimisation))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:implements ai:NesterovMomentum))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:implements ai:GradientAggregation))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:implements ai:FaultTolerantDistributedComputing))

  ## Reduction Relationships
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:reducesTo ai:LocalSGD))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:reducesTo ai:FederatedAveraging))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:reducesTo ai:SynchronousDataParallelism))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:reducesTo ai:AsynchronousSGD))
      SubClassOf(ai:DiLoCo
        ObjectSomeValuesFrom(ai:reducesTo ai:GradientCompressedTraining))

  ## About

  **DiLoCo** originated as a systematic exploration of whether the federated learning paradigm — where data remains local to clients that synchronise only model updates — could be scaled to the regime of large language model pre-training if the inner optimiser were strong enough and the inner step count were long enough. The key insight of Douillard et al. (2023) was that replacing the weak SGD inner optimiser used in Federated Averaging (McMahan et al., 2017) with AdamW, and running that inner optimiser for H = 100 to 500 steps rather than the handful of local steps typical in federated learning, produced convergence trajectories that, when pseudo-gradient-averaged and outer-Nesterov-updated, closely tracked the convergence of fully synchronous AdamW training despite synchronising 500 times less often. This was a non-obvious result: the existing theoretical literature on local SGD predicted that long inner loops would cause "client drift" — the divergence of worker weights from the global optimum as each worker adapts to its local data shard — that would degrade convergence. DiLoCo demonstrated empirically that the AdamW inner optimiser combined with Nesterov outer updates suppressed this drift sufficiently to maintain convergence quality.

  The Nesterov outer optimiser proved to be a critical and somewhat surprising element of the algorithm. Ablations showed that replacing Nesterov SGD with vanilla SGD or Adam in the outer loop degraded convergence quality substantially. The pseudo-gradient — defined as the signed difference between the global starting weights and the locally-updated weights after H inner steps — carries implicit momentum and curvature information from the entire inner epoch, far richer than a single gradient vector. When Nesterov momentum is applied to these accumulated trajectory pseudo-gradients, it acts as a second-order correction that partially compensates for the approximation error introduced by averaging heterogeneous per-worker trajectories. Subsequent analysis in the SNOO paper (Peng et al., 2025, arXiv:2510.15830) showed that this produces a beneficial implicit regularisation effect: DiLoCo-trained models exhibit smaller weight norms and stronger overfitting resistance than synchronously trained equivalents, suggesting that the infrequent averaging acts as a form of noise injection that helps the model escape sharp minima.

  The theoretical underpinning of DiLoCo's effectiveness remains an active research question in 2026. The Smoothing DiLoCo with Primal Averaging paper (Douillard et al., 2024, arXiv:2512.17131) provided convergence rate analyses showing that maintaining a running average of global model weights over multiple outer steps — primal averaging — further accelerates convergence and reduces sensitivity to the outer learning rate choice. The MuLoCo paper (arXiv:2505.23725, 2025) replaced the AdamW inner optimiser with Muon — a momentum-based update rule with orthogonal gradient projections inspired by Shampoo — and found substantially improved per-step sample efficiency, demonstrating that the original DiLoCo AdamW choice was a baseline rather than an optimum, and that the inner optimiser is a critical hyperparameter with significant impact on final model quality.

  The engineering significance of DiLoCo is that it reconfigures the physical constraints governing large-scale AI training. Conventional synchronous all-reduce [[Distributed Training]] requires low-latency, high-bandwidth interconnects — NVLink (600 GB/s) for intra-node GPU communication, InfiniBand HDR or NDR (200-400 Gb/s) for inter-node — which confines training to within a single data centre or campus. DiLoCo's 500x communication reduction means that the outer synchronisation step — the only step requiring inter-worker communication — can proceed over commodity internet links with tens of milliseconds of latency and gigabits-per-second of bandwidth, matching the profile of cross-region cloud connectivity, university WAN links, and commodity broadband. This enables a qualitatively new form of collaborative AI training in which geographically and institutionally diverse contributors pool compute without co-locating hardware.

  The implications extend beyond efficiency to governance and compute geography. If frontier model training requires only commodity internet connectivity rather than specialised InfiniBand data centre infrastructure, then the compute pool available for training dramatically expands: every university campus with a GPU cluster, every corporate data centre with CUDA hardware, every national research computing facility worldwide becomes a potential training contributor. [[Prime Intellect]]'s INTELLECT-1 demonstration trained a 10B parameter model across five countries, and Google DeepMind's Decoupled DiLoCo trained a 12B model across four US cloud regions with 88% goodput under real hardware failures — both representing qualitatively different compute governance models than the centralised hyperscaler-owned pre-training that characterised 2020-2023 frontier model development.

  ## Formal Algorithm

  Let θ^(0) be the initial global model weights, shared identically across K workers. Define the outer step index t = 0, 1, 2, ..., the inner step count H (hyperparameter, typically 100-500), the inner optimiser as AdamW with learning rate η_in and weight decay λ, and the outer optimiser as SGD with Nesterov momentum (momentum coefficient β, outer learning rate η_out).

  **Step 1 — Broadcast**: At outer step t, broadcast θ^(t) to all K workers. Each worker k initialises its local copy: θ_k^(t,0) ← θ^(t). Reset inner AdamW state (first and second moment estimates) to those accumulated at the end of the previous epoch; some implementations carry Adam state across outer steps to avoid cold-start inefficiency.

  **Step 2 — Inner loop**: Each worker k independently executes H steps of AdamW on its local data shard D_k, producing θ_k^(t,H). This inner loop proceeds entirely locally with no inter-worker communication. Workers can operate on heterogeneous hardware and may complete their H steps at different wall-clock times (exploited by asynchronous variants).

  **Step 3 — Pseudo-gradient computation**: Each worker k computes its pseudo-gradient: Δ_k^(t) = θ^(t) − θ_k^(t,H). The negative sign (from global start toward locally-updated weights) means the pseudo-gradient points in the average direction of local optimisation progress, not away from it as a conventional gradient would.

  **Step 4 — Aggregation**: Workers perform a synchronous all-reduce (element-wise average) over pseudo-gradients: Δ^(t) = (1/K) Σ_{k=1}^{K} Δ_k^(t). In synchronous DiLoCo, all K workers participate and the barrier blocks until all pseudo-gradients are received. In asynchronous variants (Decoupled DiLoCo, HeLoCo), available workers contribute and staleness-correction terms are applied to compensate for missing workers.

  **Step 5 — Nesterov outer optimiser update**: First compute the lookahead estimate: θ̃^(t) = θ^(t) − β · m^(t). Then apply the gradient update with the aggregated pseudo-gradient: θ^(t+1) = θ̃^(t) − η_out · Δ^(t). Update the momentum buffer: m^(t+1) = β · m^(t) + Δ^(t).

  **Step 6 — Return to Step 1** with t ← t+1.

  Communication occurs only in Steps 1 and 4 — once per H inner steps. The total communication volume per outer step equals one all-reduce of a tensor with the same dimensionality as the model parameter count. For a 1B parameter model in FP32, this is 4 GB transmitted once per 500 inner steps, compared to 4 GB transmitted every step in synchronous training — a 500x reduction in communication frequency.

  **Key hyperparameters and their effects**:
  - H (inner step count): The primary bandwidth-convergence tradeoff parameter. Larger H → fewer synchronisations → less bandwidth → more client drift → potentially worse convergence. Empirically, H = 100-500 is the effective range for LLMs.
  - K (number of workers): The primary scale parameter. Pseudo-gradient averaging improves with K (central limit theorem reduces per-step noise), but heterogeneity effects increase. Optimal K depends on data heterogeneity.
  - η_out (outer learning rate): Typically set much larger than η_in (10x-100x), because the pseudo-gradient is already an accumulated step of H inner steps, not a per-step gradient.
  - β (Nesterov momentum): Typically 0.9-0.99, following the standard SGD momentum range. The SNOO paper explores step-K Nesterov variants.

  ## Components / Architecture

  **Inner optimiser (AdamW)**
  Each worker runs H steps of AdamW — Adam with decoupled weight decay regularisation (Loshchilov and Hutter, 2019) — on its local data shard independently. The AdamW inner optimiser maintains per-parameter first moment (gradient mean) and second moment (gradient variance) estimates locally; these are not synchronised across workers and accumulate independently across inner steps within each outer epoch. This is why AdamW is more effective than SGD as the inner optimiser: it adapts the effective learning rate per parameter based on local gradient statistics, enabling much longer stable inner loops (H = 100-500) before divergence.

  **Pseudo-gradient computation and semantics**
  The pseudo-gradient Δ_k = θ^(t) − θ_k^(t,H) is conceptually different from a conventional stochastic gradient. A conventional gradient is the derivative of the loss with respect to the weights at a single point evaluated on a single mini-batch. The pseudo-gradient is the vectorial displacement induced by H consecutive AdamW steps on the local data shard — a compressed representation of the entire loss landscape traversed during the inner epoch. This richer representation is why pseudo-gradients can be averaged across workers with less information loss than conventional gradient averaging: averaging H-step trajectories is more informative than averaging single-step gradients.

  **Outer optimiser (Nesterov SGD)**
  The global aggregated pseudo-gradient Δ^(t) is processed by SGD with Nesterov momentum. The Nesterov formulation — which looks ahead in the momentum direction before applying the pseudo-gradient — is empirically critical to DiLoCo's convergence quality and provides the implicit regularisation effect documented in the SNOO paper. The outer learning rate η_out is typically set larger than η_in because the pseudo-gradient already encodes H steps of inner optimisation; applying a small outer step on top of a 500-step trajectory would cause negligible movement.

  **All-reduce collective communication**
  Workers communicate once per outer step via an all-reduce (average) over pseudo-gradients. The communication tensor has the same dimensionality as the model parameter count. In the synchronous DiLoCo baseline, all K workers must participate in the all-reduce, creating a synchronisation barrier. OpenDiLoCo uses the Hivemind library's DHT (Distributed Hash Table)-based decentralised all-reduce, which can tolerate high latency (100ms-1s range) and node churn without a central coordinator node, making it suitable for voluntary participation over public internet.

  **Hivemind library (OpenDiLoCo)**
  The Hivemind library (developed by the same team as BLOOM and used in OpenDiLoCo) provides a decentralised peer-to-peer layer for all-reduce operations that does not require a central parameter server or coordinator node. It uses a DHT overlay to route messages, tolerates node joins and departures dynamically, and provides built-in fault tolerance through redundant routing. This is essential for the volunteer compute scenario where no single party controls all nodes.

  **Checkpoint Recovery**
  Because outer synchronisation is infrequent, node failures during an inner loop epoch result in loss of at most H steps of local computation per failed worker. The global model state is checkpointed at each outer synchronisation point and can be used to restart from the last synchronised state. In Decoupled DiLoCo, each worker additionally maintains a local checkpoint at periodic sub-epoch intervals, enabling finer-grained recovery within an inner loop epoch.

  **Gradient quantisation (Streaming DiLoCo)**
  Streaming DiLoCo (arXiv:2501.18512) introduces 4-bit quantisation of pseudo-gradients before transmission, reducing the communication volume by a factor of 8 relative to FP32 pseudo-gradients. This quantisation operates on the pseudo-gradient vector using block floating-point or stochastic rounding schemes that preserve the statistical properties of the aggregated pseudo-gradient at the cost of quantisation noise. Combined with H = 500 inner steps, this achieves 4,000x bandwidth reduction versus synchronous FP32 training, enabling effective training over 10-100 Mbps internet connections for billion-parameter models.

  **Worker island architecture (DiLoCoX)**
  DiLoCoX (arXiv:2506.21263, June 2026) extends DiLoCo to support tensor parallelism and pipeline parallelism within each worker island. An "island" in DiLoCoX is itself a multi-GPU tensor-parallel group with NVLink or InfiniBand internal connectivity; islands communicate with each other only via DiLoCo's low-frequency pseudo-gradient all-reduce. This enables models too large to fit on a single worker's GPU memory — requiring tensor parallelism — to be trained in a DiLoCo multi-island configuration without requiring NVLink-speed connectivity between islands.

  ## Major Families and Variants

  **Original DiLoCo (Douillard et al., 2023)**
  The original formulation trains up to 400M parameter language models across 8 workers with H = 500 inner steps, achieving convergence quality matching synchronous training with 500x fewer communications. The outer Nesterov SGD optimiser and the AdamW inner optimiser are the two key design choices that distinguish DiLoCo from earlier local SGD and federated learning algorithms. Results demonstrate robustness to worker count (2-8 workers tested), inner step count (H = 100-1000), and different data shard sizes.

  **OpenDiLoCo (Prime Intellect, 2024)**
  The open-source replication and extension of DiLoCo scales to 1.1B parameter models trained across two continents and three countries using the Hivemind DHT-based decentralised all-reduce. OpenDiLoCo demonstrates 90-95% compute utilisation on commodity internet connections, validating that DiLoCo is not merely a theoretical possibility but a practically deployable training protocol for internet-scale volunteer compute pools. The implementation is Apache 2.0 licensed and publicly available.

  **Streaming DiLoCo (2025, arXiv:2501.18512)**
  Streaming DiLoCo addresses the peak bandwidth requirement of the outer synchronisation step — the single burst of model-sized communication that occurs once per H inner steps. It introduces three optimisations: (1) Parameter subset streaming: rather than synchronising all parameters at once, parameters are synchronised in sequential subsets, reducing peak bandwidth at the cost of slightly increased synchronisation duration. (2) Communication-computation overlap: workers begin the next inner epoch immediately after sending their pseudo-gradient subset, overlapping computation with the remaining parameter synchronisations. (3) 4-bit quantisation of pseudo-gradients, reducing communication volume 8x. Combined, these achieve 100x bandwidth reduction versus naive synchronous data parallelism.

  **Decoupled DiLoCo (Google DeepMind, 2026, arXiv:2604.21428)**
  Decoupled DiLoCo trains a 12B parameter model across four separate US cloud regions using 2-5 Gbps inter-region bandwidth, achieving 88% goodput under realistic hardware failure rates. The key innovation is decoupling the outer synchronisation barrier: workers can continue their inner loop while other workers are still transmitting pseudo-gradients. Pseudo-gradients are aggregated asynchronously with a quorum threshold (e.g., 75% of workers must submit within a timeout window), and the outer update is applied when the quorum is reached. Workers that miss a synchronisation window rejoin at the next outer step.

  **DiLoCoX (2026, arXiv:2506.21263)**
  DiLoCoX supports tensor parallelism and pipeline parallelism within worker islands, enabling DiLoCo-class training of models in the 10B-100B parameter range that require sharding within each island. Each island is a multi-GPU tensor-parallel group; islands communicate via DiLoCo pseudo-gradient all-reduce with quantisation. DiLoCoX is the first DiLoCo variant validated at the full-scale training regime relevant to competitive open-source LLMs.

  **HeLoCo (2026, arXiv:2606.00271)**
  HeLoCo (Heterogeneous Low-Communication) addresses asynchronous training under data and device heterogeneity. Standard DiLoCo assumes workers contribute pseudo-gradients synchronously and have similar data distributions. HeLoCo applies per-worker staleness corrections to pseudo-gradients based on the elapsed wall-clock time since each worker last synchronised, and uses data-distribution-aware weighting to down-weight pseudo-gradients from workers whose data distributions are most divergent from the global average. This enables effective training on networks where workers have very different hardware speeds and data characteristics — the typical situation in volunteer compute or cross-institutional training.

  **MuLoCo (2025, arXiv:2505.23725)**
  MuLoCo replaces the AdamW inner optimiser with Muon — a second-order momentum method with orthogonal gradient projections inspired by Shampoo — and finds substantially improved per-step sample efficiency relative to AdamW-based DiLoCo. The Muon update projects gradients onto the subspace orthogonal to the previous update direction, reducing oscillation and improving convergence in high-curvature regions of the loss landscape. MuLoCo demonstrates that the original DiLoCo AdamW choice was a baseline, not an optimum, and that inner optimiser design is a critical variable in DiLoCo-class methods.

  **SNOO — Step-K Nesterov Outer Optimiser (2025, arXiv:2510.15830)**
  SNOO analyses why Nesterov momentum applied to pseudo-gradients is surprisingly effective in DiLoCo and proposes step-K Nesterov as a generalisation in which K steps of Nesterov momentum are applied before each outer synchronisation. The analysis shows that Nesterov outer momentum has a regularising effect on inter-worker consensus dynamics, smoothing the variance introduced by heterogeneous per-worker trajectories. SNOO empirically demonstrates that DiLoCo with Nesterov outer optimisation produces models with smaller weight norms and better generalisation than synchronously trained equivalents, suggesting beneficial implicit regularisation.

  **Smoothing DiLoCo with Primal Averaging (2024, arXiv:2512.17131)**
  Primal averaging maintains a running weighted average of global model weights across multiple outer steps, rather than using the instantaneous post-outer-update weights as the broadcast point for the next inner epoch. This Polyak-Ruppert averaging scheme reduces the sensitivity of convergence to the outer learning rate choice and provides better convergence rate bounds in the theoretical analysis. Primal averaging is complementary to all other DiLoCo variants and can be applied on top of Streaming DiLoCo, Decoupled DiLoCo, or DiLoCoX.

  ## Use Cases

  **Internet-scale decentralised training (Prime Intellect / INTELLECT-1)**
  The INTELLECT-1 model (10 billion parameters) was trained across five countries and three continents using a DiLoCo-based protocol over public internet links, representing the first training of a competitive-scale LLM using commodity internet bandwidth. Participating compute nodes contributed GPU cycles from diverse institutional and cloud providers without requiring co-location. This is the reference demonstration for the internet-scale training use case and establishes DiLoCo's practical viability in fully decentralised governance settings where no single party controls all participating nodes.

  **Multi-region cloud training (Decoupled DiLoCo, Google DeepMind)**
  Google DeepMind's April 2026 Decoupled DiLoCo demonstration trained a 12B parameter model across four US cloud regions using 2-5 Gbps inter-region bandwidth with 88% goodput under realistic hardware failure conditions. The result was characterised as over 20x faster than comparable synchronous multi-region training approaches. This positions DiLoCo-class methods as production-viable for hyperscaler multi-region training without requiring InfiniBand cross-datacenter links, enabling active-active training across multiple geographic zones for resilience and regulatory data residency compliance.

  **Edge and sustainable foundation model training (University of Edinburgh)**
  Research from the University of Edinburgh (arXiv:2507.01803, 2025) investigates DiLoCo-style training for sustainable edge-based foundation model training, exploring how the low-communication property enables training on geographically distributed edge compute — university compute clusters, institutional servers, high-performance research facilities — rather than centralised hyperscaler data centres. The motivation includes energy geography (distributing AI training's energy consumption away from a small number of US data centre regions) and compute sovereignty (enabling UK and European institutions to contribute to frontier model training without dependency on US infrastructure).

  **Heterogeneous institutional collaboration**
  Research universities and national laboratories with 10-100 Gbps inter-institutional links but without NVLink-connected GPU clusters can contribute compute to joint training runs without the bandwidth overhead of synchronous training. The UK's JADE2 national AI research infrastructure — GPU clusters at Oxford, Warwick, Durham, Bristol, Southampton, and other universities connected by JANET (10-100 Gbps inter-site) — is a natural candidate. DiLoCo's tolerance for the 1-5ms inter-site latency on JANET makes cross-institution training viable where synchronous all-reduce would be bandwidth-bottlenecked.

  **Decentralised science and open model training**
  Projects in the [[Decentralised Science]] space aim to train open foundation models with community-contributed compute, governed by transparent and auditable processes analogous to open-source software development. DiLoCo provides the training protocol; [[Bittensor]] and similar cryptocurrency-incentivised compute markets provide the economic coordination layer. This use case has significant governance implications: who owns the model resulting from community compute contributions, and how are contribution and reward tracked transparently?

  ## Implementation Ecosystem and Open-Source Tools

  The DiLoCo research community has produced a growing ecosystem of open-source implementations, libraries, and frameworks that make the algorithm accessible beyond the original Google DeepMind implementation.

  **Hivemind Library**
  - Developed by the EleutherAI and BigScience communities; used by OpenDiLoCo as the decentralised communication layer.
  - Provides DHT-based peer-to-peer all-reduce, gradient averaging, and state synchronisation without a central coordinator node.
  - Supports dynamic node joining and leaving during training, fault-tolerant averaging with quorum thresholds, and bandwidth-adaptive aggregation strategies.
  - Used in BLOOM (176B parameter language model trained across 48 cloud providers in 2022) as the infrastructure layer for distributed training.

  **OpenDiLoCo (Prime Intellect)**
  - Repository: github.com/PrimeIntellect-ai/OpenDiLoCo
  - Implements DiLoCo using PyTorch and Hivemind, with support for H = 100-500 inner steps, configurable outer optimiser, and internet-scale deployment.
  - Includes experiment scripts for reproducing the 1.1B parameter training results and smaller-scale validation experiments.
  - Apache 2.0 licence, actively maintained as of June 2026.

  **torchdistributed.diloco (Proposed Standard Library Integration)**
  - As of 2026, proposals are circulating in the PyTorch community to integrate DiLoCo-class training as a first-class distributed training strategy in torch.distributed, analogous to DDP (DistributedDataParallel) for synchronous data parallelism.
  - Standardised integration would enable wider adoption without requiring Hivemind dependency for cluster-based deployments.

  **Streaming DiLoCo Reference Implementation**
  - Released alongside the arXiv:2501.18512 paper; implements communication-computation overlap and 4-bit quantisation.
  - Includes bandwidth profiling tools for estimating required inter-worker bandwidth for a given model size and H value.

  **INTELLECT-1 Training Infrastructure (Prime Intellect)**
  - The infrastructure used to train INTELLECT-1 (10B parameters across five countries) is documented in the Prime Intellect technical blog.
  - Uses OpenDiLoCo with custom node discovery and monitoring infrastructure, public participation portal, and checkpoint publication system.
  - Provides a template for future decentralised training runs at scale.

  **DiLoCoX Reference Implementation**
  - Released alongside arXiv:2506.21263 (June 2026); implements tensor parallelism within worker islands using Megatron-LM's tensor parallel communication, combined with DiLoCo-style pseudo-gradient all-reduce between islands.
  - Requires modification of the training loop to handle the two-level communication hierarchy (intra-island NVLink + inter-island WAN all-reduce).

  **HeLoCo Reference Implementation**
  - Released alongside arXiv:2606.00271 (June 2026); implements per-worker staleness correction and heterogeneity-aware pseudo-gradient weighting.
  - Includes simulation tools for modelling convergence under various hardware speed ratios and data heterogeneity configurations before committing to a full training run.

  **Evaluation and Benchmarking Infrastructure**
  - The DiLoCo research community uses the C4 dataset (Colossal Clean Crawled Corpus, 750GB) and RedPajama-v1 (1.2T tokens) as standard pre-training datasets for reproducibility.
  - Standard evaluation: perplexity on held-out validation sets, with downstream benchmarks (MMLU, HellaSwag, WinoGrande, ARC) for larger models.
  - Communication efficiency metric: synchronisation frequency (1/H) relative to synchronous baseline, combined with total bytes transmitted per training step.

  ## Privacy, Governance, and Compute Sovereignty Implications

  DiLoCo's ability to enable training across geographically and institutionally distributed compute pools introduces a set of governance, privacy, and legal questions that do not arise in centralised training. These questions are becoming practically urgent as DiLoCo-class training scales from proof-of-concept demonstrations to production deployments.

  **Data Residency and Export Control**
  When training data resides on workers in different jurisdictions, and workers exchange pseudo-gradients representing the result of local training on that data, complex questions arise about data sovereignty and export control. Pseudo-gradients can contain extractable information about training data — a concern documented in the federated learning literature under the heading of gradient inversion attacks — potentially making pseudo-gradient transmission across national borders subject to data export restrictions. The paper "Distributed and Decentralised Training: Technical Governance Challenges" (arXiv:2507.07765, 2025) identifies this as a primary governance challenge for internet-scale training: which jurisdiction's privacy regulations govern a training run that involves workers in the EU, US, and UK, with each worker holding locally regulated data?

  **Model Ownership and Contribution Attribution**
  When a model is trained via community-contributed compute across dozens of institutions and individuals, clear legal frameworks for model ownership are absent. The INTELLECT-1 (Prime Intellect) model was released under [[Apache 2.0 Open Source Licence]] — but this licensing decision was made by a central entity (Prime Intellect) rather than being an emergent property of the decentralised governance structure. Future decentralised training runs with genuinely dispersed governance — where no single entity controls the training process — will require new legal instruments for collective model ownership analogous to open-source software copyright assignment or contributor licence agreements.

  **Incentive Mechanisms for Compute Contribution**
  Voluntary participation in DiLoCo training runs requires an incentive mechanism for compute contributors. Projects like [[Bittensor]] use cryptographic tokens to reward compute contributors based on their contribution volume and model quality impact. [[Prime Intellect]] uses a reputation-based system and the public good framing of open model development. Neither approach has been stress-tested at scale with antagonistic participants who might contribute malicious pseudo-gradients (a gradient poisoning attack) to corrupt the global model while collecting rewards. Research on Byzantine-robust aggregation for pseudo-gradients — extensions of Byzantine-robust gradient aggregation methods (Blanchard et al., Krum; El Mhamdi et al., COMED) to the DiLoCo setting — is an active open problem in 2026.

  **Auditability and Provenance for Regulated Applications**
  Organisations deploying AI models in regulated sectors (finance, healthcare, critical infrastructure) face increasing requirements to demonstrate training data provenance, model development governance, and reproducibility. For DiLoCo-trained models, provenance documentation must account for: which data shards were processed by which workers, which workers participated in which outer synchronisation rounds, what pseudo-gradient values were contributed by each worker, and how the outer optimiser state evolved across rounds. None of the current DiLoCo implementations provide this level of provenance documentation as a standard output. Creating standardised "training manifests" — machine-readable records of distributed training runs analogous to SPDX SBOMs for software — is an open engineering and standardisation challenge for the 2026-2028 period.

  **Compute Sovereignty and Geopolitical Implications**
  The enabling of AI training over geographically distributed commodity internet infrastructure has strategic implications beyond pure efficiency. For UK and European AI actors, DiLoCo provides a technical path toward training competitive models without exclusive dependency on US hyperscaler cloud infrastructure — addressing a concern raised explicitly in the DSIT AI Opportunities Action Plan (2025) and in EU AI policy discussions. For less well-resourced national AI programmes (Southeast Asian countries, African research institutions), DiLoCo's internet-scale training capability could enable meaningful AI model development on national compute pools that could not individually sustain frontier training runs. The governance implications of this democratisation — both the positive (more diverse global participation in AI development) and potentially negative (reduced oversight of training runs) — are being actively discussed in AI governance forums.

  ## Historical Context and Motivation

  The development of DiLoCo emerged from the confluence of three research threads in 2020-2023: the scaling of language models beyond single-machine memory budgets, the maturation of federated learning as a distributed training paradigm, and growing concern about the concentration of AI training compute in a small number of hyperscaler data centres.

  **Large language model training at scale (2018-2023)**: The period from BERT (Devlin et al., 2018, 340M parameters) through GPT-3 (Brown et al., 2020, 175B parameters) to LLaMA (Touvron et al., 2023, 7-65B parameters) saw model sizes grow by 1,000x over five years. Each generation required correspondingly larger compute clusters with increasingly specialised interconnects — NVLink within nodes, InfiniBand between nodes — that were available only to organisations willing to invest tens to hundreds of millions of dollars in data centre infrastructure. The compute required for GPT-4 training was estimated at approximately USD 100 million on A100 hardware. This concentrated training capacity implied concentrated power over frontier model development, motivating research into alternatives.

  **Federated learning limitations (2017-2022)**: McMahan et al.'s FedAvg (2017) established the theoretical possibility of training models across many clients without centralising data, but practical federated learning deployments faced severe limitations when scaled to large models. SGD inner loops with small local step counts (5-10 steps) failed to converge well for models above 100M parameters under heterogeneous data distributions. The communication overhead of synchronising large model updates (even once per 10 local steps) was prohibitive over commodity internet for anything above 10M parameters. Federated learning in practice remained confined to small models (mobile keyboards, speech recognition) trained over thousands of mobile clients with minimal per-client compute.

  **Identification of the gap (2022-2023)**: The DiLoCo team at Google DeepMind identified that the federated learning literature had not explored the regime of strong adaptive inner optimisers (AdamW), long inner step counts (100+), and large models (100M+ parameters). The intuition was that AdamW's per-parameter adaptive learning rates might suppress client drift far more effectively than SGD, enabling much longer inner loops without divergence. If this worked, the communication reduction achieved per outer step would grow proportionally with H, potentially reaching the 500x range that makes WAN-scale training practical. The 2023 paper confirming this intuition opened the field of DiLoCo-class research.

  **Parallel developments (2023-2024)**: Simultaneously with DiLoCo's development, two other convergent threads emerged. The Hivemind library (developed by the EleutherAI and BigScience communities) provided open-source infrastructure for decentralised distributed training over heterogeneous internet-connected hardware, and was used in the BLOOM (176B parameters, trained across 48 cloud partners) and ROOTS corpus projects. Prime Intellect (founded 2023) was building towards a decentralised training platform explicitly motivated by compute democratisation and AI sovereignty, and adopted DiLoCo as its core training protocol for the INTELLECT-1 demonstration. The convergence of DiLoCo's algorithm innovation, Hivemind's infrastructure, and Prime Intellect's organisational platform produced the open-source OpenDiLoCo implementation (July 2024) that enabled community contribution to internet-scale LLM training.

  ## Comparison with Related Distributed Training Paradigms

  **DiLoCo vs Synchronous Data Parallelism**
  Standard synchronous data parallelism replicates the model across K workers, each processing a distinct data mini-batch, and after every forward-backward pass synchronises gradients via an all-reduce collective. Communication is O(model_size) every step — approximately 4 GB per step for a 1B parameter FP32 model. On NVLink-connected intra-node GPU clusters (600 GB/s), this overhead is negligible. On InfiniBand inter-node links (400 Gb/s), the overhead is substantial but manageable for co-located clusters. Over WAN internet links (1-10 Gbps), synchronous all-reduce is bandwidth-dominated and practically infeasible at scale. DiLoCo reduces communication to O(model_size / H), enabling WAN-viable training with H = 500.

  **DiLoCo vs Federated Averaging (FedAvg)**
  FedAvg (McMahan et al., 2017) uses SGD as the inner optimiser with 1-10 local steps, targeted at the federated learning setting where clients have very small heterogeneous datasets and limited compute. DiLoCo uses AdamW as the inner optimiser with H = 100-500 local steps, targeted at the large-scale LLM pre-training setting where each worker has a substantial homogeneous data shard and significant GPU compute. The AdamW inner optimiser is critical: it adapts per-parameter learning rates based on gradient history, enabling much longer stable inner loops without divergence than SGD would permit. The result is that DiLoCo achieves 500x communication reduction while FedAvg achieves only 5-10x before client drift degrades convergence.

  **DiLoCo vs Local SGD / SlowMo**
  Local SGD (Stich, 2018) uses SGD as both inner and outer optimiser, synchronising every H steps by averaging model parameters (not pseudo-gradients) and resuming from the averaged point. SlowMo (Lin et al., 2020) adds a slow outer SGD momentum term to Local SGD, improving convergence stability. DiLoCo's key differences from SlowMo are: (1) AdamW inner optimiser rather than SGD inner; (2) Nesterov (rather than SGD) outer optimiser applied to pseudo-gradients (rather than parameter averages); (3) scale (validated up to 12B parameters vs SlowMo's smaller-scale evaluations). The empirical improvements are substantial: DiLoCo with H = 500 matches synchronous training quality, while SlowMo with H = 500 typically degrades significantly.

  **DiLoCo vs ZeRO / Megatron-LM**
  ZeRO (Rajbhandari et al., 2020) and Megatron-LM (Shoeybi et al., 2019) are orthogonal approaches that address the problem of fitting large models in GPU memory through parameter sharding and tensor/pipeline parallelism. These approaches assume high-bandwidth intra-cluster interconnects and are not designed for WAN deployments. DiLoCo is complementary: DiLoCoX (2026) combines DiLoCo inter-island communication with Megatron-style tensor parallelism within each island, enabling large-model training across geographically distributed clusters.

  **DiLoCo vs Asynchronous SGD**
  Asynchronous SGD (Dean et al., 2012 DistBelief) allows workers to push gradient updates to a parameter server without waiting for other workers, eliminating the synchronisation barrier at the cost of stale gradient updates. Asynchronous SGD is effective for models where gradient staleness is bounded and acceptable, but it requires a central parameter server and does not provide the communication reduction benefits of DiLoCo (asynchronous workers still communicate every step). DiLoCo with asynchronous outer synchronisation (Decoupled DiLoCo) combines the fault tolerance of asynchronous approaches with the communication reduction of the inner loop, achieving the best properties of both.

  ## Convergence Analysis and Theoretical Properties

  The convergence theory for DiLoCo is less mature than for standard data-parallel training, reflecting the novelty of the algorithm and the complexity of analysing two-loop optimisation with heterogeneous workers. The available results as of 2026 are:

  **Convergence under homogeneous data distributions**: When all workers have identically distributed data (IID setting), the inner AdamW loop on each worker is effectively optimising the same objective, so pseudo-gradient averaging reduces variance without systematic bias. In this setting, DiLoCo with H inner steps and K workers converges at a rate comparable to synchronous AdamW with K workers at a K/H fraction of the communication cost. The Smoothing DiLoCo paper (arXiv:2512.17131) provides formal convergence rate bounds in the homogeneous setting with primal averaging.

  **Convergence under heterogeneous data distributions**: When workers have heterogeneous data (non-IID setting), pseudo-gradient averaging introduces systematic bias because each worker's pseudo-gradient reflects its local data distribution rather than the global distribution. The magnitude of this bias grows with H (longer inner loops = more drift) and with the divergence between workers' data distributions. The SNOO analysis shows that Nesterov outer momentum partially corrects this bias by exploiting the momentum structure of the accumulated pseudo-gradients. HeLoCo (arXiv:2606.00271) provides a heterogeneity-aware weighting scheme that reduces the bias for workers with strongly non-IID data.

  **Generalisation properties**: Empirically, DiLoCo-trained models exhibit smaller weight norms and better test-set generalisation than synchronously trained models with identical compute budgets, as documented in the SNOO paper. The hypothesised mechanism is that the infrequent averaging of pseudo-gradients across workers acts as a stochastic noise injection that prevents the model from converging to sharp local minima. This beneficial regularisation effect is related to the "flatness" of the loss landscape at the converged point: averaged trajectories from multiple workers converge to flatter minima than single-worker trajectories, and flat minima are associated with better out-of-distribution generalisation.

  **Optimality of Nesterov outer optimiser**: The SNOO paper demonstrates that applying step-K Nesterov momentum to pseudo-gradients provably reduces the consensus error (the difference between the averaged pseudo-gradient and the true population gradient) compared to vanilla SGD outer updates. The key insight is that Nesterov's lookahead in the momentum direction aligns with the average direction of worker trajectories, providing a correction that partially compensates for per-worker drift even in the heterogeneous setting.

  ## Academic Context

  DiLoCo builds on a lineage of distributed and federated optimisation research spanning two decades. McMahan et al.'s FedAvg (2017, AISTATS, "Communication-Efficient Learning of Deep Networks from Decentralised Data") established the client-update-then-average paradigm that DiLoCo inherits, but FedAvg used SGD inner optimisers and small local step counts (1-5 local steps), far from DiLoCo's regime of AdamW with H = 100-500. Stich (2018, "Local SGD Converges Fast and Communicates Little", ICLR 2019) provided the first convergence theory for local SGD, establishing sublinear convergence bounds and identifying the inner step count as the key bandwidth-convergence tradeoff parameter. Li et al. (2019, "Convergence of Federated Learning on Non-IID Data") identified client drift as the central pathology that limits inner loop length under heterogeneous data distributions.

  Karimireddy et al. (2020, SCAFFOLD, ICML) and Reddi et al. (2020, FedOpt, ICLR 2021) addressed client drift with variance reduction and adaptive momentum correction techniques, establishing that drift could be partially corrected through modified aggregation schemes. DiLoCo's empirical finding that AdamW inner loops suppress drift sufficiently for H = 100-500 — without any explicit drift correction — was therefore surprising and not predicted by the existing theory. The closest prior algorithm is SlowMo (Lin et al., 2020, ICLR), which introduces a slow momentum term in distributed training using SGD outer updates; DiLoCo's key innovations over SlowMo are the AdamW inner optimiser (enabling much longer inner loops) and the Nesterov (rather than SGD) outer optimiser.

  The 2024-2026 theoretical literature on DiLoCo has focused on four questions: (1) why does Nesterov outer momentum suppress client drift? (addressed in SNOO); (2) what is the optimal outer learning rate schedule? (addressed in Smoothing DiLoCo); (3) what is the optimal inner optimiser? (addressed in MuLoCo); and (4) how does convergence scale with model size and worker count? (partially addressed in OpenDiLoCo and DiLoCoX scaling experiments). A unified theoretical framework that answers all four questions remains an open problem in 2026.

  ## Current Landscape (2026)

  By June 2026, the DiLoCo research programme has produced a rich family of validated variants and the core method has transitioned from a research curiosity to a production-grade technique. Google DeepMind's April 2026 Decoupled DiLoCo paper demonstrated training of a 12B parameter model across four US regions with 88% goodput under real hardware failures — the first publicly disclosed production-scale deployment. [[Prime Intellect]]'s INTELLECT-1 (2024) remains the reference implementation for fully decentralised internet-scale training, and the OpenDiLoCo framework has enabled community researchers to contribute compute via public internet participation.

  Streaming DiLoCo (arXiv:2501.18512, January 2025) achieved the most dramatic bandwidth reduction, reaching 100x versus synchronous data parallelism through communication-computation overlap and 4-bit quantisation. DiLoCoX (arXiv:2506.21263, June 2026) extends the framework to tensor-parallel worker islands. HeLoCo (arXiv:2606.00271, June 2026) addresses asynchronous heterogeneous settings. MuLoCo (arXiv:2505.23725, 2025) demonstrates improved convergence with the Muon inner optimiser. SNOO (arXiv:2510.15830, 2025) provides principled analysis of the Nesterov outer optimiser. The field consensus in 2026 is that DiLoCo-class algorithms are production-viable for 1-12B parameter models across 2-32 geographically separated worker islands, but that frontier models above 100B parameters still require within-datacentre NVLink bandwidth for the innermost tensor-parallel computation loop.

  Governance and policy attention is growing rapidly. The paper "Distributed and Decentralised Training: Technical Governance Challenges in a Shifting AI Landscape" (arXiv:2507.07765, 2025) examines the regulatory implications of internet-scale training: export control compliance (which jurisdiction's AI regulations apply when compute spans five countries?), model ownership attribution (how is the resulting model owned when compute is contributed by diverse parties?), and training auditability (how can the training provenance of a decentralised model be verified?). These governance questions are likely to drive demand for DiLoCo-compatible provenance attestation standards analogous to SLSA for software supply chains in the 2026-2028 period.

  The [[AI Energy Scarcity]] context makes DiLoCo's energy geography implications particularly salient: by enabling training over geographically dispersed compute pools, DiLoCo allows AI training's energy consumption to be distributed across diverse power grids and energy mixes rather than concentrated in US data centre regions running on high-carbon electricity, potentially improving the carbon efficiency of large-scale AI development.

  ## UK Context

  The UK's contribution to DiLoCo research is centred at the University of Edinburgh, which published "Towards Decentralised and Sustainable Foundation Model Training with the Edge" (arXiv:2507.01803, 2025). This work explores how DiLoCo-class algorithms can shift training compute from centralised hyperscaler data centres toward geographically distributed edge infrastructure, motivated by both sustainability arguments (avoiding the geographic concentration of AI energy consumption) and sovereignty arguments (enabling UK and European institutions to contribute to frontier model training without dependency on US cloud infrastructure).

  The Alan Turing Institute's "Doing AI Differently" initiative — led jointly by the Turing Institute and the University of Edinburgh, in collaboration with international partners through AHRC-UKRI — frames compute decentralisation as a governance and sustainability objective as well as a technical one. The initiative explores alternative institutional arrangements for AI development that do not require centralised capital concentration, and DiLoCo-class training protocols are a key enabling technology for this governance vision.

  The UK's national AI research infrastructure provides the compute environment in which DiLoCo-class protocols are practically relevant. JADE2 (Joint Academic Data Science Endeavour) consists of GPU clusters at Oxford, Warwick, Durham, Bristol, Southampton, and other universities connected by the JANET national research network at 10-100 Gbps inter-site bandwidth. The JADE2 topology — multiple GPU clusters with good internal NVLink connectivity but only WAN links between sites — exactly matches DiLoCo's assumed deployment model: strong inner-loop compute (sufficient GPU memory and bandwidth for AdamW inner steps) with high-latency, limited-bandwidth inter-site links (compatible with infrequent outer synchronisation). Baskerville (University of Birmingham) and the Edinburgh EPCC ARCHER2 supercomputer are additional national compute facilities with similar characteristics.

  The DSIT AI Opportunities Action Plan (2025) explicitly identifies distributed training infrastructure as a strategic priority and includes recommendations to build compute capacity outside the hyperscaler model, pointing toward cooperative institutional training arrangements for which DiLoCo provides the technical protocol. The Alan Turing Institute's national AI Research Resources (AIRR) programme includes funding for distributed training infrastructure experiments. UK AI Safety Institute (AISI, established 2023) interest in training provenance and model auditability for AI safety purposes creates demand for DiLoCo-compatible training attestation standards. Northern England industrial relevance includes the potential for DiLoCo-based consortium training among UK university-industry research partnerships in Manchester, Leeds, Sheffield, and Newcastle, where GPU-equipped university clusters and corporate AI teams could pool compute for shared model training without requiring shared data or centralised infrastructure.

  ## Future Directions (2026-2030)

  Scaling laws for DiLoCo hyperparameters — specifically the functional relationship between inner loop length H, worker count K, model size N, and final training loss — are not yet well-characterised for models above 10-12B parameters. The DiLoCoX (2026) results extend to larger models but the empirical coverage of the hyperparameter space remains limited. Establishing robust scaling laws is essential for practitioners deciding whether DiLoCo is viable for specific training objectives and for understanding whether the efficiency advantage of DiLoCo (fewer synchronisations per training token) scales with model size or diminishes as parameter count grows.

  Fully asynchronous outer synchronisation — eliminating the global all-reduce barrier entirely — is the most significant open research direction. Decoupled DiLoCo introduces partial asynchrony through a quorum threshold; true NoLoCo directions explore dropping global synchronisation altogether, allowing workers to synchronise bilaterally or in small groups when bandwidth is available. This would enable training over networks with highly variable and intermittent bandwidth (satellite internet, shared university WAN links during peak hours) without the synchronisation failure modes that affect quorum-based approaches.

  The intersection of DiLoCo with privacy-preserving training is an important 2027-2030 frontier. Combining pseudo-gradient aggregation with secure aggregation (cryptographic all-reduce using masking or homomorphic encryption) and differential privacy (calibrated noise injection into pseudo-gradients before aggregation) would enable institutionally distrustful parties to train models collaboratively without revealing their data distributions — even to each other and to the aggregator. This application is particularly relevant for healthcare, finance, and government consortium training where data governance prohibits sharing raw data or individual model updates.

  Standardisation of DiLoCo-compatible training provenance formats analogous to SLSA for software supply chains will be required by EU AI Act implementing measures and NIST AI RMF profiles by 2028. A "training SBOM" attesting to which data shards were processed by which worker islands, with cryptographic linkage to the final model weights and to the training code version, would provide the auditability required for regulated sector AI deployment. [[Prime Intellect]]'s INTELLECT-1 training provides an early example of this provenance documentation, but standardised machine-readable formats comparable to SPDX or CycloneDX for software SBOMs do not yet exist for distributed model training.

  ## Practical Deployment Considerations

  Deploying DiLoCo in practice requires decisions across several dimensions that are not fully addressed by the algorithm specification. This section documents practitioner considerations as of 2026.

  **Bandwidth Planning**
  The primary bandwidth requirement is for the outer synchronisation all-reduce: one transmission of the model parameter tensor per H inner steps. For a 1B parameter model in BF16 (2 bytes per parameter), the raw model tensor is 2 GB. With H = 500 inner steps and assuming one outer step per 500 AdamW steps, the all-reduce occurs every 500 steps. If a training step takes 0.5 seconds on the inner hardware, the outer synchronisation period is 250 seconds (4 minutes). The peak bandwidth requirement for a 2 GB all-reduce in 30 seconds (to avoid dominating the outer step duration) is approximately 60 MB/s (~500 Mbps) per worker pair. At H = 500 and 4-bit quantisation (Streaming DiLoCo), this reduces to ~8 MB/s (~60 Mbps) — achievable on standard institutional internet connections.

  **Hardware Heterogeneity Management**
  Workers with different GPU generations (A100 vs V100 vs H100) complete H inner steps at different wall-clock times, creating a stragglers problem in synchronous DiLoCo. Practical strategies: (1) Set H in terms of wall-clock time rather than step count (each worker runs inner steps for a fixed 5-minute window, then synchronises — faster workers complete more steps but all synchronise at the same time); (2) Use Decoupled DiLoCo's quorum threshold (synchronise when 80% of workers submit, exclude the remaining 20% from the outer update for that round); (3) Normalise pseudo-gradients by effective step count before averaging (workers that completed more inner steps contribute proportionally larger pseudo-gradients — this is a simple heterogeneity correction that avoids down-weighting faster workers).

  **Data Shard Assignment and Deduplication**
  Each worker trains on a distinct data shard throughout the training run. Practical challenges: (1) Ensuring that data shards are non-overlapping and cover the full training corpus without leaving any portion undertrained; (2) Handling data quality variation across shards — if one worker's shard is systematically lower quality (more web spam, more repetitive text), its pseudo-gradients will be correspondingly less valuable; (3) Dealing with shard depletion in long training runs (some shards may be exhausted before others). DiLoCoX and HeLoCo address heterogeneous data quality; standard DiLoCo assumes uniform shard quality.

  **Checkpoint Strategy**
  In synchronous DiLoCo, the natural checkpoint point is immediately after an outer synchronisation (when all workers hold identical global weights). Checkpointing at this point allows any worker to rejoin training from a clean global state. For Decoupled DiLoCo with asynchronous synchronisation, determining the canonical "global state" at any given time is less clear — the outer state is updated at different times by different quorum groups. The recommended approach is to designate one worker as the "model server" that holds the authoritative global state and is checkpointed independently of the worker inner loop states.

  **Outer Learning Rate Scheduling**
  Standard LLM pre-training uses cosine learning rate decay for the inner AdamW optimiser. When combined with DiLoCo's outer Nesterov step, the interaction between inner and outer learning rate schedules requires careful tuning. Practitioners have found that applying cosine decay only to the inner AdamW rate while keeping the outer Nesterov learning rate fixed across the training run provides the best stability. The Smoothing DiLoCo paper (arXiv:2512.17131) additionally recommends transitioning to primal averaging in the final 10-20% of training steps to improve convergence to a smoother minimum.

  **Monitoring and Debugging**
  DiLoCo training adds several new failure modes relative to synchronous training: worker pseudo-gradient outliers (a misbehaving worker producing pseudo-gradients much larger than peers can corrupt the global update), synchronisation timeout failures (network partitions that prevent workers from reaching the all-reduce barrier), and inner loop divergence (a worker's local model diverging within its inner loop epoch due to excessive learning rate or data quality issues). Recommended monitoring: track per-worker pseudo-gradient L2 norms (outliers indicate worker issues), track outer synchronisation round completion times (increasing times indicate network degradation), and track per-worker validation perplexity trends (diverging trends indicate data quality issues).

  ## Research & Literature
  - 1. Douillard, A., Feng, Q., Rame, A., Evci, U., Zico Kolter, J., & Garg, S. (2023). "DiLoCo: Distributed Low-Communication Training of Language Models." arXiv:2311.08105. Google DeepMind.
  - 2. Jaghouar, S., Cheng, J., & Dettmers, T. (2024). "OpenDiLoCo: An Open-Source Framework for Globally Distributed Low-Communication Training." arXiv:2407.07852. Prime Intellect.
  - 3. Douillard, A., et al. (2025). "Streaming DiLoCo with Overlapping Communication: Towards a Distributed Free Lunch." arXiv:2501.18512.
  - 4. Google DeepMind (2026). "Decoupled DiLoCo: Resilient, Distributed AI Training at Scale." arXiv:2604.21428. deepmind.google/blog/decoupled-diloco.
  - 5. arXiv (2026). "DiLoCoX: A Low-Communication Large-Scale Training Framework for Decentralized Cluster." arXiv:2506.21263.
  - 6. arXiv (2026). "HeLoCo: Efficient Asynchronous Low-Communication Training under Data and Device Heterogeneity." arXiv:2606.00271.
  - 7. Peng, X., et al. (2025). "SNOO: Step-K Nesterov Outer Optimizer — The Surprising Effectiveness of Nesterov Momentum Applied to Pseudo-Gradients." arXiv:2510.15830.
  - 8. Douillard, A., et al. (2024). "Smoothing DiLoCo with Primal Averaging for Faster Training of LLMs." arXiv:2512.17131.
  - 9. arXiv (2025). "MuLoCo: Muon is a Practical Inner Optimizer for DiLoCo." arXiv:2505.23725.
  - 10. arXiv (2025). "Eager Updates for Overlapped Communication and Computation in DiLoCo." arXiv:2502.12996.
  - 11. University of Edinburgh et al. (2025). "Towards Decentralised and Sustainable Foundation Model Training with the Edge." arXiv:2507.01803.
  - 12. arXiv (2025). "Distributed and Decentralised Training: Technical Governance Challenges in a Shifting AI Landscape." arXiv:2507.07765.
  - 13. Epoch AI (2025). "How Far Can Decentralized Training Over the Internet Scale?" epoch.ai/gradient-updates/how-far-can-decentralized-training-over-the-internet-scale.
  - 14. McMahan, H.B., Moore, E., Ramage, D., Hampson, S., & Agüera y Arcas, B. (2017). "Communication-Efficient Learning of Deep Networks from Decentralized Data." *AISTATS 2017*. arXiv:1602.05629.
  - 15. Stich, S.U. (2018). "Local SGD Converges Fast and Communicates Little." *ICLR 2019*. arXiv:1805.09767.
  - 16. Li, T., Sahu, A.K., Zaheer, M., Sanjabi, M., Smola, A., & Smith, V. (2019). "Convergence of Federated Learning on Non-IID Data." arXiv:1907.02189.
  - 17. Karimireddy, S.P., Kale, S., Mohri, M., Reddi, S.J., Stich, S.U., & Suresh, A.T. (2020). "SCAFFOLD: Stochastic Controlled Averaging for Federated Learning." *ICML 2020*.
  - 18. Reddi, S., Charles, Z., Zaheer, M., Garrett, Z., Rush, K., Konecny, J., Kumar, S., & McMahan, H.B. (2020). "Adaptive Federated Optimization (FedOpt)." *ICLR 2021*. arXiv:2003.00295.
  - 19. Loshchilov, I., & Hutter, F. (2019). "Decoupled Weight Decay Regularization (AdamW)." *ICLR 2019*. arXiv:1711.05101.
  - 20. Rajbhandari, S., Rasley, J., Ruwase, O., & He, Y. (2020). "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models." *SC20*. arXiv:1910.02054.
  - 21. Shoeybi, M., Patwary, M., Puri, R., LeGresley, P., Casper, J., & Catanzaro, B. (2019). "Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism." arXiv:1909.08053.
  - 22. Lin, T., Stich, S.U., Aglin, K.K., & Jaggi, M. (2020). "Don't Use Large Minibatches, Use Local SGD." *ICLR 2020*. arXiv:1808.07217.
  - 23. IEEE Spectrum (2025). "Decentralized AI Training Turns Homes Into Data Hubs." spectrum.ieee.org/decentralized-ai-training-2676670858.
  - 24. The Alan Turing Institute (2025). "Doing AI Differently." turing.ac.uk/news/publications/doing-ai-differently.
  - 25. Prime Intellect (2024). "OpenDiLoCo: An Open-Source Framework for Globally Distributed Low-Communication Training." primeintellect.ai/blog/opendiloco.
  - 26. Nathan.rs (2025). "Local SGD and DiLoCo Research Musings." nathan.rs/posts/research-log.
  - 27. arXiv (2025). "Cross-region Model Training with Communication-Computation Overlapping and Delay Compensation." arXiv:2504.17672.

  ## Benchmark Results and Empirical Evaluation

  DiLoCo and its variants have been evaluated on a set of standard benchmarks that allow comparison with synchronous training baselines. Key empirical results as of 2026:

  **Original DiLoCo (arXiv:2311.08105) — Language Model Pre-training**
  - Models evaluated: Transformer language models from 35M to 400M parameters trained on C4 (Colossal Clean Crawled Corpus).
  - Baseline: synchronous AdamW data-parallel training with the same compute budget.
  - Result at H = 500, K = 8: DiLoCo achieves final perplexity within 0.1-0.5% of the synchronous baseline while communicating 500x less frequently.
  - Communication reduction: 500x versus synchronous all-reduce training (1 outer synchronisation per 500 inner steps vs 1 synchronisation per step).
  - Ablation over H: H = 100 matches synchronous perplexity exactly; H = 500 degrades by <0.5%; H = 1000 degrades by 1-2%. Optimal H is in the 200-500 range.
  - Ablation over outer optimiser: Nesterov SGD outer provides 1-3% perplexity improvement over vanilla SGD outer, and 2-4% over Adam outer.

  **OpenDiLoCo (arXiv:2407.07852) — Scale-up to 1.1B Parameters**
  - Model: 1.1B parameter transformer pre-trained on RedPajama-v1 dataset.
  - Workers: Distributed across 2 continents and 3 countries over public internet.
  - Compute utilisation: 90-95% (10-5% loss to communication overhead and occasional network disruptions).
  - Scaling: Perplexity matches synchronous baseline within 1% at the 1.1B parameter scale, confirming that DiLoCo's convergence properties extend beyond the 400M scale of the original paper.
  - Infrastructure: Hivemind DHT-based all-reduce over commodity internet links with latencies of 50-200ms.

  **Streaming DiLoCo (arXiv:2501.18512) — Bandwidth Reduction**
  - Bandwidth reduction: 100x versus naive synchronous data parallelism (H = 500 outer synchronisation reduction × 8x from 4-bit quantisation × additional reduction from parameter streaming).
  - Perplexity vs bandwidth: For a 1B parameter model at 1 Gbps bandwidth budget, Streaming DiLoCo achieves synchronous-quality perplexity while synchronous training would be bandwidth-bottlenecked and impractical.
  - Communication-computation overlap efficiency: 85-90% overlap (workers spend 85-90% of communication time also computing inner loop steps), reducing wall-clock overhead of outer synchronisation to near-zero.
  - 4-bit quantisation quality: Quantisation noise is below the inter-worker pseudo-gradient variance for models above 400M parameters, with no statistically significant perplexity degradation versus FP32 pseudo-gradient communication.

  **Decoupled DiLoCo (arXiv:2604.21428) — Production Scale**
  - Model: 12B parameter transformer pre-trained across four US cloud regions.
  - Infrastructure: 2-5 Gbps inter-region bandwidth (standard AWS/GCP cross-region connectivity).
  - Goodput: 88% under realistic hardware failure conditions (random node failures at industry-standard failure rates).
  - Comparison: Equivalent synchronous multi-region training would have goodput near zero (single node failure stalls the entire job under synchronous barrier semantics).
  - Quality: Final model quality matches single-region synchronous baseline within the evaluation margin on standard NLP benchmarks (MMLU, HellaSwag, WinoGrande).

  **MuLoCo (arXiv:2505.23725) — Muon Inner Optimiser**
  - Models: 125M, 370M, 760M parameter transformers.
  - Finding: Muon inner optimiser achieves 10-20% improvement in per-step perplexity reduction versus AdamW inner at identical compute budgets, suggesting that the original DiLoCo AdamW choice was suboptimal.
  - Communication: Same outer synchronisation frequency as DiLoCo (H = 500); improvement is purely from inner optimiser quality.

  **SNOO (arXiv:2510.15830) — Outer Optimiser Analysis**
  - Key finding: Step-K Nesterov outer optimiser reduces inter-worker consensus error by 15-30% versus vanilla SGD outer in the non-IID setting.
  - Generalisation: DiLoCo-trained models with Nesterov outer have 5-12% lower weight norm and 2-5% better held-out perplexity versus training set perplexity gap (generalisation metric) compared to synchronously-trained models, confirming the beneficial regularisation hypothesis.

  **HeLoCo (arXiv:2606.00271) — Heterogeneous Settings**
  - Dataset: Training split across workers with varying data quality and distribution skew (simulating real-world institutional data heterogeneity).
  - Hardware: Workers with 3x speed ratio (simulating different GPU generations — A100 vs V100 vs RTX 3090 mix).
  - Finding: Standard DiLoCo degrades 8-15% in perplexity under strong heterogeneity; HeLoCo with staleness correction recovers to within 2% of the synchronous baseline.

  ## Key Terminology

  **Inner loop**: The repeated local optimisation phase executed independently by each worker in DiLoCo. Each worker runs H steps of AdamW on its own data shard, starting from the current global model weights. The inner loop is entirely local — no communication occurs between workers during it. The number of inner steps H is the primary hyperparameter governing the bandwidth-convergence trade-off.

  **Outer loop**: The periodic global synchronisation phase in DiLoCo. At the end of each inner loop epoch, workers share their pseudo-gradients via an all-reduce collective, and the aggregated pseudo-gradient is applied by the outer Nesterov SGD optimiser to update the global model weights. The outer loop is the only point at which inter-worker communication occurs.

  **Pseudo-gradient**: The core information unit exchanged between workers in DiLoCo. Defined as Δ_k = θ^(t) − θ_k^(t,H), it represents the vectorial displacement of worker k's weights relative to the shared starting point after H inner AdamW steps. Pseudo-gradients are richer than single-step gradients because they summarise the entire inner optimisation trajectory — including curvature and momentum information — rather than a single gradient evaluation. This richness is why averaging pseudo-gradients across workers degrades less gracefully with increased heterogeneity than averaging single-step gradients would.

  **Client drift**: In federated and local SGD training, the phenomenon where each worker's model weights gradually diverge from the global optimum as the worker's local optimisation adapts to its local data distribution. Client drift is the primary mechanism that limits the inner step count H in federated learning: beyond a few local steps, drift causes poor convergence after averaging. DiLoCo suppresses client drift sufficiently for H = 100-500 through the combination of AdamW inner optimisation (which adapts to local curvature, avoiding divergence) and Nesterov outer optimisation (which applies a global correction that counteracts accumulated drift).

  **All-reduce**: A collective communication primitive in which K participants each contribute a tensor of the same shape, and all participants receive the element-wise aggregate (sum, average, or max) of all contributed tensors. In synchronous DiLoCo, all-reduce averages pseudo-gradients across K workers, and all workers receive the result simultaneously. In OpenDiLoCo, the Hivemind library implements all-reduce in a decentralised fashion using a DHT overlay without a central coordinator.

  **Worker island**: In DiLoCoX and related multi-level DiLoCo architectures, a group of GPUs with high-bandwidth internal connectivity (NVLink, InfiniBand) that collectively act as a single DiLoCo worker. The island runs tensor parallelism and pipeline parallelism internally using high-bandwidth interconnects; islands communicate with each other only via DiLoCo's low-frequency pseudo-gradient all-reduce over WAN links.

  **Goodput**: In distributed computing and network performance, the fraction of total compute capacity that is usefully applied to the training workload, as opposed to being wasted on communication overhead, fault recovery, load imbalance, and idle waiting. Decoupled DiLoCo achieves 88% goodput under realistic hardware failure conditions, compared to near-zero goodput for synchronous training when a single node fails (causing a global stall).

  **Nesterov momentum**: A variant of gradient descent with momentum that evaluates the gradient at the "lookahead" position (current point + momentum direction) rather than the current point. In the context of DiLoCo's outer optimiser, Nesterov momentum is applied to the aggregated pseudo-gradient: the algorithm first takes a step in the momentum direction, then applies the pseudo-gradient correction from that lookahead position. This provides a second-order correction effect that partially compensates for the approximation error introduced by averaging heterogeneous per-worker pseudo-gradients.

  **Quantisation (gradient)**: The lossy compression of floating-point tensors (typically FP32 or BF16) into lower-precision representations (INT8, INT4, or 1-bit) before transmission. In Streaming DiLoCo, pseudo-gradients are quantised to 4 bits using block floating-point or stochastic rounding before transmission, reducing communication volume 8x relative to FP32. The quantisation noise is typically smaller than the pseudo-gradient variance across workers, so it does not significantly degrade convergence quality at the scale of billion-parameter models.

  **Compute sovereignty**: The geopolitical and institutional concept that entities (nations, universities, research communities) should have the ability to develop and train AI models using compute infrastructure they control, without dependency on a small number of hyperscaler cloud providers that are headquartered in specific jurisdictions. DiLoCo enables compute sovereignty by making it possible to train competitive models across distributed, institutionally diverse compute pools over commodity internet connections.

  **Decentralised AI**: The broader paradigm in which AI model development — training, fine-tuning, and inference — is distributed across many participants without a single controlling authority. DiLoCo provides the training protocol; [[Bittensor]] and [[Prime Intellect]] provide governance and incentive frameworks. Decentralised AI is motivated by compute democratisation, sovereignty concerns, and resistance to single points of failure and control in the AI development stack.

  **Primal averaging**: A convergence acceleration technique for iterative optimisation in which the output is a weighted average of iterates rather than the final iterate. In Smoothing DiLoCo with Primal Averaging, the global model broadcast to workers at each outer step is the average of the past T outer iterates, rather than the most recent iterate alone. This Polyak-Ruppert averaging reduces the sensitivity of convergence to the outer learning rate and provides better convergence rate bounds in the theoretical analysis.

  **Staleness correction**: In asynchronous distributed training, the correction applied to gradient or pseudo-gradient contributions from workers whose local model state is out-of-sync with the current global model state. If a worker has not synchronised for two outer steps, its pseudo-gradient reflects local training starting from the global model state two steps ago rather than the current global state — introducing a systematic bias. Staleness correction schemes apply a weight or correction term to reduce this bias, with correction magnitude proportional to the staleness (number of outer steps since last synchronisation). HeLoCo implements staleness correction for DiLoCo's asynchronous heterogeneous setting.

  **Byzantine robustness**: In distributed optimisation, the property that an algorithm produces correct results even when some participants are malicious and actively trying to corrupt the global model (Byzantine fault model). Standard all-reduce averaging is not Byzantine-robust: a single malicious worker can corrupt the global pseudo-gradient by contributing an arbitrarily large or targeted adversarial pseudo-gradient. Byzantine-robust aggregation rules (Krum, COMED, Bulyan, coordinate-wise trimmed mean) replace the standard average with a statistically robust estimator that is less sensitive to outliers. Extending Byzantine robustness to DiLoCo's pseudo-gradient setting is an open research problem in 2026, particularly relevant for the volunteer compute use case where participants cannot be vetted.

  **Muon optimiser**: A first-order optimisation algorithm (Momentum + Orthogonalisation = Muon) that applies Nesterov momentum followed by an orthogonalisation step (analogous to the orthogonal update in Shampoo) that projects each parameter matrix update to be orthogonal to its previous update direction. Muon was introduced by Kosson et al. as an alternative to Adam for training transformer language models, with improved per-step sample efficiency relative to Adam at equivalent computational cost. MuLoCo demonstrates that using Muon as DiLoCo's inner optimiser rather than AdamW produces 10-20% improvement in per-step perplexity reduction.

  **Training throughput (MFU — Model FLOPs Utilisation)**: The fraction of the theoretical peak floating-point operations per second (FLOPS) of the hardware that are spent on useful model computation, as opposed to communication, synchronisation, memory management, and other overhead. In well-tuned single-datacenter training on A100 clusters, MFU is typically 40-60%. In DiLoCo training over WAN with H = 500, the communication overhead per outer step is approximately 2/H = 0.4% of total compute time (given that one outer all-reduce takes approximately twice a forward pass compute time), making MFU nearly identical to synchronous training once communication is hidden behind computation via Streaming DiLoCo overlap. This near-zero communication overhead is one of DiLoCo's most practically significant properties.

  **Bandwidth-compute ratio**: A characterisation of training infrastructure in terms of the ratio of inter-node communication bandwidth to per-node compute throughput. NVLink clusters: ~10 GB/s per GPU pair with 312 TFLOPS per A100 = bandwidth-compute ratio of ~3e-5 (bandwidth is cheap relative to compute). WAN internet: ~0.1 GB/s per link with 312 TFLOPS per A100 = bandwidth-compute ratio of ~3e-7 (bandwidth is 100x more expensive relative to compute). DiLoCo reduces the effective bandwidth requirement by factor H, shifting the effective bandwidth-compute ratio for WAN deployments to ~3e-7 × 500 = 1.5e-4, approaching the ratio achievable with InfiniBand inter-node connections.

  **Decentralised Foundation Model Training**: The practice of pre-training large foundation models (language models, vision-language models, multimodal models) using compute contributed by multiple geographically and institutionally separate organisations, governed by a protocol that does not require any single party to control or observe all training data or model states during training. DiLoCo is the primary enabling training algorithm for this paradigm; [[Prime Intellect]] and [[Bittensor]] are the primary organisational frameworks. Decentralised foundation model training contrasts with centralised training (a single organisation trains on their own infrastructure) and with [[Federated Learning]] (where data never leaves client devices, typically targeting inference models rather than pre-training large foundation models).

  **Open-Source Model Training**: The training and release of language model weights under open-source licences (Apache 2.0, MIT, LLAMA-2 Community) that permit downstream use, modification, and redistribution. DiLoCo-enabled training runs like [[Prime Intellect]]'s INTELLECT-1 represent a new category: not merely open weights (the result released openly) but open training (the training process itself distributed and participatory). Open-source model training under DiLoCo governance creates a new class of AI artefact — collectively trained open models — with governance properties intermediate between traditional open-source software projects (where code contributions are individual and attributable) and centralised open-weight model releases (where training was conducted by a single organisation).

  **Compute Exchange**: A marketplace or platform that matches AI training compute demand (teams that want to train models) with compute supply (organisations or individuals with idle GPU capacity), using DiLoCo-class protocols that can make use of the heterogeneous, geographically distributed compute available through such markets. [[Compute Exchange]] platforms, analogous to electricity spot markets or cloud spot instances but operating at the training-run granularity, are emerging as the economic infrastructure for internet-scale decentralised AI training. Pricing, reliability guarantees, and quality-of-contribution verification are the primary unsolved problems in 2026.

  **Non-IID (Non-Independent and Identically Distributed)**: A statistical description of data distributions in federated or distributed settings where different workers' data shards have substantially different statistical properties. In the IID case, each worker's data is a random sample from the same underlying distribution, so per-worker pseudo-gradients are unbiased estimates of the global gradient. In the non-IID case, workers' data distributions differ — one worker may have primarily English data, another primarily code, another primarily scientific text — causing per-worker pseudo-gradients to point in different directions. The non-IID case is the realistic case for DiLoCo internet-scale training (different institutions have different data collections), and is the primary theoretical challenge for ensuring convergence quality in the wild.

  **Volunteer Computing**: The practice of donating idle computing resources (CPU, GPU, storage) to scientific or public-interest computing projects without payment. The original volunteer computing project was SETI@home (distributed radio telescope signal processing over millions of volunteer machines). Modern GPU-based volunteer computing for AI training faces challenges that SETI@home did not: the computation (LLM training) is far more complex, requires stateful coordination between workers, and the outputs (model weights) have significant commercial value. DiLoCo's architecture reduces the coordination requirements substantially relative to synchronous training, making GPU volunteer computing for LLM training more tractable, though questions of trust, incentives, and Byzantine robustness remain open.

  **Globalisation of AI training**: The process by which AI model training — historically concentrated in a small number of US hyperscaler data centres — becomes geographically distributed across multiple continents, national jurisdictions, and institutional types. DiLoCo is a primary technical enabler of this globalisation. The economic and geopolitical implications include: reduced concentration of AI capability development in US technology companies; increased ability for European, Asian, African, and other regional actors to participate in frontier AI development; new questions about regulatory jurisdiction over AI systems whose training compute and data span multiple legal regimes; and new opportunities for international scientific collaboration on AI research without requiring physical hardware co-location.

  **Local SGD convergence theory**: The body of mathematical theory analysing the convergence properties of distributed training algorithms where workers perform multiple gradient steps locally between synchronisations. Key results include: Stich (2018) showing sublinear convergence for Local SGD under convexity assumptions; Karimireddy et al. (2020) quantifying client drift under non-IID data and showing it can cause divergence without correction; Wang et al. (2020, SlowMo) showing that a slow outer momentum step improves convergence. DiLoCo's convergence theory extends these results to the regime of adaptive inner optimisers (AdamW) and Nesterov outer steps, showing substantially better empirical convergence than predicted by existing Local SGD theory — motivating the development of new theoretical frameworks specifically for the DiLoCo setting.

  **Federation topology**: The structural arrangement of workers in a DiLoCo training run — how many worker islands exist, how each island is connected internally, and how islands connect to each other for outer synchronisation. Common topologies: (1) Flat federation: all K workers participate in a single all-reduce; simplest to implement, most synchronisation overhead. (2) Hierarchical federation: workers grouped into regional clusters, with intra-cluster aggregation followed by inter-cluster aggregation; reduces all-reduce communication distance for geographically distributed deployments. (3) Ring federation: workers arranged in a ring, with each pair exchanging pseudo-gradients bilaterally; most fault-tolerant but requires K-1 sequential exchanges. (4) Star federation: one designated coordinator collects pseudo-gradients from all workers and broadcasts the averaged result; simplest to implement but single point of failure. DiLoCo's original paper uses flat federation; Hivemind uses butterfly all-reduce; Decoupled DiLoCo uses a coordinator-based approach with quorum thresholds.

  ## Relationship to Adjacent Fields

  DiLoCo intersects with and draws from several adjacent research fields beyond distributed optimisation:

  **Continual Learning and Catastrophic Forgetting**
  The multi-worker DiLoCo setting where each worker trains on a fixed data shard exhibits a structural similarity to continual learning: if a worker's shard distribution drifts over time, or if different workers represent sequential temporal slices of data, the global model must integrate knowledge from heterogeneous temporal sources without catastrophic forgetting of earlier information. Research connecting DiLoCo to elastic weight consolidation (EWC) and progressive neural networks from the continual learning literature is an emerging topic in 2026.

  **Meta-Learning and MAML**
  DiLoCo's two-loop structure — inner optimisation followed by outer meta-update — is structurally analogous to Model-Agnostic Meta-Learning (MAML, Finn et al., 2017). MAML's inner loop adapts to a specific task; DiLoCo's inner loop adapts to a specific data shard. The pseudo-gradient in DiLoCo plays an analogous role to the meta-gradient in MAML. This structural connection may enable theoretical insights from meta-learning theory to transfer to DiLoCo convergence analysis.

  **Mixture of Experts (MoE) and DiLoCo**
  An emerging research direction explores combining DiLoCo's worker distribution with Mixture of Experts model architecture: each worker island specialises in a different domain (code, mathematics, multilingual text) through its local data shard, and the outer synchronisation corresponds to a soft expert aggregation step. This would enable data-distribution-aware model specialisation to emerge naturally from DiLoCo's training dynamics.

  **Swarm Intelligence and Collective Optimisation**
  DiLoCo's behaviour — many agents pursuing local objectives with periodic global synchronisation — has conceptual parallels to swarm intelligence algorithms (Particle Swarm Optimisation, Ant Colony Optimisation) where local exploration and global information sharing are balanced to find global optima. The theoretical connections between DiLoCo's convergence behaviour and swarm intelligence convergence theory have not been formally established but may provide new theoretical tools for understanding DiLoCo's empirically observed good generalisation properties.

  ## Open Problems and Research Challenges (2026)

  The following open problems are identified in the DiLoCo literature as requiring resolution before DiLoCo-class training can be considered fully mature:

  - Theoretical convergence bounds for the non-IID setting with AdamW inner optimiser (existing bounds cover only SGD inner)
  - Optimal outer learning rate schedule for DiLoCo (cosine decay? constant? stage-wise?)
  - Byzantine-robust pseudo-gradient aggregation rules for adversarial participants
  - Scaling laws for optimal H as a function of model size N and worker count K
  - Provenance attestation standards for distributed training run audit trails
  - Secure aggregation extensions enabling privacy-preserving DiLoCo training
  - Convergence analysis for fully asynchronous (no barrier) pseudo-gradient aggregation
  - Integration of RLHF and DPO alignment phases into DiLoCo-class training protocols
  - Formal governance frameworks for collectively-trained open model ownership
  - Energy efficiency analysis comparing DiLoCo geographically distributed training to centralised training

- ### Provenance
  - sources:: https://arxiv.org/abs/2311.08105, https://arxiv.org/abs/2407.07852, https://arxiv.org/abs/2501.18512, https://deepmind.google/blog/decoupled-diloco, https://arxiv.org/abs/2506.21263, https://arxiv.org/html/2606.00271v1, https://arxiv.org/abs/2510.15830, https://arxiv.org/abs/2512.17131, https://openreview.net/pdf?id=HfjAumxjT2, https://arxiv.org/pdf/2507.01803, https://arxiv.org/pdf/2507.07765, https://epoch.ai/gradient-updates/how-far-can-decentralized-training-over-the-internet-scale, https://www.primeintellect.ai/blog/opendiloco, https://spectrum.ieee.org/decentralized-ai-training-2676670858, https://www.turing.ac.uk/news/publications/doing-ai-differently, https://arxiv.org/pdf/2504.17672
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
